import { Exam } from '../types';
import { allExams } from '../data/exams';

export interface EligibilityProfile {
  dob: string; // YYYY-MM-DD
  gender: 'male' | 'female' | 'other';
  category: 'UR' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'PwBD';
  qualification: '10th' | '12th' | 'Graduation' | 'Post_Graduation' | 'PhD';
  stream: 'Science_PCM' | 'Science_PCB' | 'Arts_Humanities' | 'Commerce' | 'Engineering' | 'Other';
  percentage: number;
  teachingQualification: 'none' | 'D_El_Ed' | 'B_Ed' | 'B_El_Ed' | 'Integrated_BEd';
  tetStatus: 'none' | 'CTET_P1' | 'CTET_P2' | 'CTET_Both' | 'State_TET';
}

export interface EligibilityResult {
  exam: Exam;
  isEligible: boolean;
  status: 'Eligible' | 'Conditionally Eligible' | 'Ineligible';
  reasons: string[];
  reasonsHi: string[];
  ageYears: number;
  appliedRelaxation?: string;
}

export const calculateEligibility = (profile: EligibilityProfile): EligibilityResult[] => {
  const birthDate = new Date(profile.dob);
  const refDate = new Date('2026-08-01');
  let age = refDate.getFullYear() - birthDate.getFullYear();
  const m = refDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && refDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return allExams.map(exam => {
    const reasons: string[] = [];
    const reasonsHi: string[] = [];
    let isEligible = true;

    // 1. Check Age Limits with Category Relaxation
    let maxAge = exam.eligibility.maxAge || 99;
    let minAge = exam.eligibility.minAge || 17;
    let appliedRelaxation = '';

    if (profile.category === 'SC' || profile.category === 'ST') {
      maxAge += 5;
      appliedRelaxation = '+5 Years (SC/ST Relaxation)';
    } else if (profile.category === 'OBC') {
      maxAge += 3;
      appliedRelaxation = '+3 Years (OBC Relaxation)';
    } else if (profile.category === 'PwBD') {
      maxAge += 10;
      appliedRelaxation = '+10 Years (PwBD Relaxation)';
    }

    if (profile.gender === 'female' && exam.category === 'teaching_recruitment') {
      maxAge = Math.max(maxAge, 40);
      appliedRelaxation += (appliedRelaxation ? '; ' : '') + 'Women candidate age limit extended up to 40 years.';
    }

    if (age < minAge) {
      isEligible = false;
      reasons.push(`Below minimum age requirement (${minAge} years). Your age: ${age} years.`);
      reasonsHi.push(`न्यूनतम आयु सीमा (${minAge} वर्ष) से कम। आपकी आयु: ${age} वर्ष।`);
    } else if (age > maxAge) {
      isEligible = false;
      reasons.push(`Exceeds maximum allowable age (${maxAge} years, including category relaxation). Your age: ${age} years.`);
      reasonsHi.push(`अधिकतम आयु सीमा (${maxAge} वर्ष, आरक्षित छूट सहित) से अधिक। आपकी आयु: ${age} वर्ष।`);
    }

    // 2. Check Educational Qualification
    const qualLevels = ['10th', '12th', 'Graduation', 'Post_Graduation', 'PhD'];
    const userQualIdx = qualLevels.indexOf(profile.qualification);

    if (exam.id === 'ssc-cgl' || exam.id === 'uppsc-pcs' || exam.id === 'iit-jam') {
      if (userQualIdx < qualLevels.indexOf('Graduation')) {
        isEligible = false;
        reasons.push('Requires Bachelor degree (Graduation).');
        reasonsHi.push('स्नातक (Graduation) डिग्री अनिवार्य है।');
      }
    }

    if (exam.id === 'csir-net' || exam.id === 'cuet-pg-science' || exam.id === 'jest-exam') {
      if (userQualIdx < qualLevels.indexOf('Post_Graduation')) {
        // Many science PG/NET require M.Sc. or 4-yr BS
        if (profile.qualification !== 'Graduation' && profile.qualification !== 'Post_Graduation') {
          isEligible = false;
          reasons.push('Requires M.Sc. / BS 4-Year or equivalent Post Graduate degree.');
          reasonsHi.push('एम.एससी. या 4-वर्षीय विज्ञान उपाधि अनिवार्य है।');
        }
      }
    }

    // 3. Check Stream Requirements for Science Exams
    if (exam.category === 'science') {
      if (profile.stream !== 'Science_PCM' && profile.stream !== 'Science_PCB' && profile.stream !== 'Engineering') {
        isEligible = false;
        reasons.push('Science stream (PCM/PCB/Engineering) required for this examination.');
        reasonsHi.push('इस परीक्षा हेतु विज्ञान संकाय (PCM/PCB) अनिवार्य है।');
      }
    }

    // 4. Check Teaching Qualifications (B.Ed / D.El.Ed & TET)
    if (exam.id === 'ctet') {
      if (profile.teachingQualification === 'none') {
        isEligible = false;
        reasons.push('Requires D.El.Ed (for Paper I) or B.Ed / B.El.Ed (for Paper II).');
        reasonsHi.push('डीएलएड (पेपर 1 हेतु) अथवा बीएड/बीएलएड (पेपर 2 हेतु) अनिवार्य है।');
      }
    }

    if (exam.category === 'teaching_recruitment') {
      if (profile.teachingQualification === 'none') {
        isEligible = false;
        reasons.push('Requires recognized teacher training qualification (B.Ed or D.El.Ed).');
        reasonsHi.push('शिक्षक प्रशिक्षण उपाधि (बीएड अथवा डीएलएड) अनिवार्य है।');
      }
      if (profile.tetStatus === 'none') {
        isEligible = false;
        reasons.push('Requires CTET or State TET qualification for PRT/TGT teaching posts.');
        reasonsHi.push('पीआरटी/टीजीटी पदों हेतु सीटीईटी अथवा राज्य टीईटी उत्तीर्ण होना अनिवार्य है।');
      }
    }

    // 5. Check Percentage Minimums
    if (exam.id === 'csir-net' && profile.percentage < (profile.category === 'UR' || profile.category === 'EWS' ? 55 : 50)) {
      isEligible = false;
      reasons.push('Minimum 55% marks required in Master’s degree (50% for SC/ST/OBC/PwD).');
      reasonsHi.push('परास्नातक में न्यूनतम 55% अंक अनिवार्य हैं (आरक्षित वर्गों हेतु 50%)।');
    }

    let status: 'Eligible' | 'Conditionally Eligible' | 'Ineligible' = 'Ineligible';
    if (isEligible) {
      status = 'Eligible';
      reasons.push('You fulfill the basic age, educational, and subject requirements.');
      reasonsHi.push('आप आयु, शैक्षणिक योग्यता व विषय संबंधी प्राथमिक मानदंडों को पूरा करते हैं।');
    } else if (reasons.length === 1 && reasons[0].includes('CTET')) {
      status = 'Conditionally Eligible';
      reasons.push('You can apply once you pass the upcoming CTET / TET cycle.');
      reasonsHi.push('आगामी सीटीईटी/टीईटी उत्तीर्ण करने के पश्चात आप पात्र हो जाएंगे।');
    }

    return {
      exam,
      isEligible,
      status,
      reasons,
      reasonsHi,
      ageYears: age,
      appliedRelaxation
    };
  });
};
