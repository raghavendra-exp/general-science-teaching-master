import { Exam } from '../../types';

export const teachingEligibilityExams: Exam[] = [
  {
    id: 'ctet',
    name: 'CTET',
    nameHi: 'सीटीईटी (केंद्रीय शिक्षक पात्रता परीक्षा)',
    fullName: 'Central Teacher Eligibility Test (CTET)',
    fullNameHi: 'केंद्रीय शिक्षक पात्रता परीक्षा',
    conductingBody: 'Central Board of Secondary Education (CBSE)',
    conductingBodyHi: 'केंद्रीय माध्यमिक शिक्षा बोर्ड (सीबीएसई)',
    officialUrl: 'https://ctet.nic.in',
    category: 'teaching_eligibility',
    subCategory: 'Central Teacher Eligibility (Classes I to VIII)',
    frequency: 'Biannual (January & July)',
    examMode: 'Pen & Paper (OMR)',
    level: 'National',
    description: 'Mandatory national eligibility credential for appointment as a teacher in schools run by the Central Government (KVS, NVS, Central Tibetan Schools, etc.) and schools under the administrative control of UTs of Chandigarh, Dadra & Nagar Haveli, Daman & Diu, Andaman & Nicobar, Lakshadweep, and NCT of Delhi.',
    descriptionHi: 'कक्षा 1 से 8 तक के शिक्षक पद पर नियुक्ति हेतु केंद्रीय सरकार (केवीएस, एनवीएस आदि) एवं केंद्र शासित प्रदेशों द्वारा अनिवार्य राष्ट्रीय पात्रता परीक्षा।',
    eligibility: {
      education: 'Paper I (Classes I-V): Senior Secondary with at least 50% marks and passed or appearing in 2-year Diploma in Elementary Education (D.El.Ed). Paper II (Classes VI-VIII): Graduation with at least 50% marks and passed or appearing in Bachelor in Education (B.Ed) or 4-year B.El.Ed.',
      educationHi: 'पेपर-1 (कक्षा 1-5): 50% अंकों सहित 12वीं एवं 2-वर्षीय डीएलएड। पेपर-2 (कक्षा 6-8): स्नातक एवं बीएड/डीएलएड/बीएलएड।',
      teachingQualification: ['D.El.Ed', 'B.Ed', 'B.El.Ed', 'B.A.Ed / B.Sc.Ed'],
      percentageRequired: 'Paper I: 50% in 12th; Paper II: 50% in Graduation/B.Ed.'
    },
    selectionProcess: [
      'Written Examination (OMR-Based Objective Multiple Choice Questions)',
      'Qualifying Standard: 60% marks (90 out of 150) for General; 55% marks (82 out of 150) for SC/ST/OBC/Differently Abled',
      'CTET Certificate issued on DigiLocker with Lifetime Validity'
    ],
    selectionProcessHi: [
      'ओएमआर आधारित 150 प्रश्नों की वस्तुनिष्ठ परीक्षा',
      'सामान्य वर्ग हेतु 60% (90/150 अंक), आरक्षित वर्ग हेतु 55% (82/150 अंक) अर्हक अंक',
      'आजीवन वैधता (Lifetime Validity) प्रमाण पत्र डिजीडॉकर पर उपलब्ध'
    ],
    examPattern: {
      totalQuestions: 150,
      totalMarks: 150,
      durationMinutes: 150,
      negativeMarking: 'No negative marking (0 marks deducted for wrong answer)',
      sections: [
        {
          id: 'ctet-cdp',
          name: 'Child Development and Pedagogy (Compulsory)',
          nameHi: 'बाल विकास एवं शिक्षाशास्त्र (अनिवार्य)',
          questions: 30,
          marks: 30,
          negativeMarking: '0 (None)'
        },
        {
          id: 'ctet-lang1',
          name: 'Language I (Hindi / English / 20 Official Languages)',
          nameHi: 'भाषा I (हिंदी/अंग्रेजी/अन्य 20 भाषाएँ)',
          questions: 30,
          marks: 30,
          negativeMarking: '0 (None)'
        },
        {
          id: 'ctet-lang2',
          name: 'Language II (Language other than Language I)',
          nameHi: 'भाषा II (भाषा I से भिन्न भाषा)',
          questions: 30,
          marks: 30,
          negativeMarking: '0 (None)'
        },
        {
          id: 'ctet-math-evs',
          name: 'Mathematics & Environmental Studies (Paper I) / Math & Science OR Social Studies (Paper II)',
          nameHi: 'गणित व पर्यावरण (पेपर-1) / गणित व विज्ञान या सामाजिक अध्ययन (पेपर-2)',
          questions: 60,
          marks: 60,
          negativeMarking: '0 (None)'
        }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-03-05',
      applyStartDate: '2026-03-07',
      applyEndDate: '2026-04-12',
      admitCardDate: '2026-07-02',
      examDate: '2026-07-14',
      status: 'active',
      notificationPdfUrl: 'https://ctet.nic.in'
    },
    cutoffTrends: [
      { year: 2024, general: '90 Marks (60%)', obc: '82 Marks (55%)', sc: '82 Marks (55%)', st: '82 Marks (55%)' }
    ],
    popularBooks: ['book-ctet-arihant-success-master', 'book-ctet-disha-pyq', 'book-cdp-himanshi-singh'],
    syllabusRef: 'ctet-syllabus'
  },
  {
    id: 'uptet',
    name: 'UPTET',
    nameHi: 'यूपीटीईटी',
    fullName: 'Uttar Pradesh Teacher Eligibility Test',
    fullNameHi: 'उत्तर प्रदेश शिक्षक पात्रता परीक्षा',
    conductingBody: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
    conductingBodyHi: 'उत्तर प्रदेश शिक्षा सेवा चयन आयोग',
    officialUrl: 'https://updeled.gov.in',
    category: 'teaching_eligibility',
    subCategory: 'State Teacher Eligibility (UP Primary & Upper Primary)',
    frequency: 'Annual',
    examMode: 'Pen & Paper (OMR)',
    level: 'State',
    description: 'State-level examination for determining eligibility to teach in primary (Classes 1 to 5) and upper primary (Classes 6 to 8) schools in Uttar Pradesh.',
    descriptionHi: 'उत्तर प्रदेश के प्राथमिक एवं उच्च प्राथमिक विद्यालयों में शिक्षक पात्रता हेतु राज्य स्तरीय परीक्षा।',
    eligibility: {
      education: 'Paper 1 (Primary): Graduation with at least 50% marks and 2-year D.El.Ed (BTC). Paper 2 (Upper Primary): Graduation with 50% marks and B.Ed/D.El.Ed.',
      educationHi: 'पेपर 1: स्नातक एवं डीएलएड (बीटीसी)। पेपर 2: स्नातक एवं बीएड अथवा बीटीसी।',
      teachingQualification: ['D.El.Ed / BTC', 'B.Ed'],
      percentageRequired: '50% in Graduation.'
    },
    selectionProcess: [
      'Written Examination (150 Objective Questions)',
      'Qualifying Standard: 60% (90 marks) for Unreserved, 55% (82 marks) for Reserved categories',
      'Issue of Lifetime Valid TET Certificate'
    ],
    selectionProcessHi: [
      '150 वस्तुनिष्ठ प्रश्नों की लिखित परीक्षा',
      'सामान्य वर्ग हेतु 90 अंक, आरक्षित वर्ग हेतु 82 अंक अर्हक',
      'आजीवन वैध यूपीटीईटी प्रमाण पत्र'
    ],
    examPattern: {
      totalQuestions: 150,
      totalMarks: 150,
      durationMinutes: 150,
      negativeMarking: 'No negative marking',
      sections: [
        { id: 'uptet-cdp', name: 'Child Development and Teaching Method', nameHi: 'बाल विकास एवं शिक्षण विधि', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'uptet-hindi', name: 'First Language (Hindi - Compulsory)', nameHi: 'प्रथम भाषा (अनिवार्य हिंदी)', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'uptet-lang2', name: 'Second Language (English / Urdu / Sanskrit)', nameHi: 'द्वितीय भाषा (अंग्रेजी/संस्कृत/उर्दू)', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'uptet-math', name: 'Mathematics', nameHi: 'गणित', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'uptet-evs', name: 'Environmental Studies', nameHi: 'पर्यावरण अध्ययन', questions: 30, marks: 30, negativeMarking: '0' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-05-10',
      applyStartDate: '2026-05-15',
      applyEndDate: '2026-06-15',
      admitCardDate: '2026-08-20',
      examDate: '2026-09-06',
      status: 'upcoming',
      notificationPdfUrl: 'https://updeled.gov.in'
    },
    popularBooks: ['book-uptet-yct-youth-competition', 'book-uptet-arihant'],
    syllabusRef: 'uptet-syllabus'
  },
  {
    id: 'reet',
    name: 'REET',
    nameHi: 'रीट (REET)',
    fullName: 'Rajasthan Eligibility Examination for Teachers',
    fullNameHi: 'राजस्थान अध्यापक पात्रता परीक्षा',
    conductingBody: 'Board of Secondary Education Rajasthan (BSER), Ajmer',
    conductingBodyHi: 'माध्यमिक शिक्षा बोर्ड राजस्थान (अजमेर)',
    officialUrl: 'https://rajeduboard.rajasthan.gov.in',
    category: 'teaching_eligibility',
    subCategory: 'State Teacher Eligibility (Level-1 & Level-2)',
    frequency: 'As Announced by Rajasthan Government',
    examMode: 'Pen & Paper (OMR)',
    level: 'State',
    description: 'Eligibility test conducted by BSER for qualifying candidates to teach in primary (Level 1: Classes 1 to 5) and upper primary (Level 2: Classes 6 to 8) schools across Rajasthan.',
    descriptionHi: 'राजस्थान में तृतीय श्रेणी अध्यापक पात्रता (लेवल-1 एवं लेवल-2) हेतु माध्यमिक शिक्षा बोर्ड राजस्थान द्वारा आयोजित परीक्षा।',
    eligibility: {
      education: 'Level 1: Senior Secondary with at least 50% marks and 2-year D.El.Ed (BSTC). Level 2: Graduation and 2-year D.El.Ed or 1-year/2-year B.Ed.',
      educationHi: 'लेवल 1: 12वीं में 50% एवं 2 वर्षीय डीएलएड (बीएसटीसी)। लेवल 2: स्नातक एवं बीएड।',
      teachingQualification: ['BSTC / D.El.Ed', 'B.Ed'],
      percentageRequired: '50% in 12th/Graduation.'
    },
    selectionProcess: [
      'Written Eligibility Examination (150 Marks)',
      'REET Certificate with Lifetime Validity',
      'Followed by Rajasthan Staff Selection Board (RSSB) REET Mains Teacher Recruitment Exam'
    ],
    selectionProcessHi: [
      '150 अंकों की पात्रता परीक्षा',
      'आजीवन वैध रीट प्रमाण पत्र',
      'राजस्थान कर्मचारी चयन बोर्ड द्वारा आयोजित मुख्य शिक्षक भर्ती परीक्षा'
    ],
    examPattern: {
      totalQuestions: 150,
      totalMarks: 150,
      durationMinutes: 150,
      negativeMarking: 'No negative marking in Eligibility Exam',
      sections: [
        { id: 'reet-cdp', name: 'Child Development and Pedagogy', nameHi: 'बाल विकास एवं शिक्षण विधियां', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'reet-lang1', name: 'Language I (Hindi / English / Sanskrit / Urdu / Sindhi / Punjabi / Gujarati)', nameHi: 'भाषा I', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'reet-lang2', name: 'Language II', nameHi: 'भाषा II', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'reet-subject', name: 'Mathematics & Science (for Science-Math Teachers) OR Social Studies (for SST Teachers)', nameHi: 'गणित व विज्ञान अथवा सामाजिक अध्ययन', questions: 60, marks: 60, negativeMarking: '0' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-02-15',
      applyStartDate: '2026-02-20',
      applyEndDate: '2026-03-31',
      admitCardDate: '2026-06-05',
      examDate: '2026-06-21',
      status: 'active',
      notificationPdfUrl: 'https://rajeduboard.rajasthan.gov.in'
    },
    popularBooks: ['book-reet-utkarsh-notes', 'book-reet-lakshya-rajasthan'],
    syllabusRef: 'reet-syllabus'
  },
  {
    id: 'htet',
    name: 'HTET',
    nameHi: 'एचटेट (HTET)',
    fullName: 'Haryana Teacher Eligibility Test',
    fullNameHi: 'हरियाणा शिक्षक पात्रता परीक्षा',
    conductingBody: 'Board of School Education Haryana (BSEH), Bhiwani',
    conductingBodyHi: 'हरियाणा विद्यालय शिक्षा बोर्ड, भिवानी',
    officialUrl: 'https://bseh.org.in',
    category: 'teaching_eligibility',
    subCategory: 'Three-Tier Eligibility (PRT, TGT, PGT)',
    frequency: 'Annual',
    examMode: 'Pen & Paper (OMR)',
    level: 'State',
    description: 'Comprehensive three-level eligibility test conducted by Haryana Board for Primary Teacher (Level 1: Classes 1-5), Trained Graduate Teacher (Level 2: Classes 6-8), and Post Graduate Teacher (Level 3: Classes 9-12).',
    descriptionHi: 'हरियाणा में पीआरटी (लेवल 1), टीजीटी (लेवल 2) एवं पीजीटी (लेवल 3) शिक्षकों की पात्रता हेतु तीन स्तरीय परीक्षा।',
    eligibility: {
      education: 'Level 1: Senior Secondary (50%) + D.El.Ed. Level 2: Graduation in relevant subject (50%) + B.Ed. Level 3: Post Graduation in relevant subject (50%) + B.Ed + Matric with Hindi/Sanskrit.',
      educationHi: 'लेवल 1: 12वीं + डीएलएड। लेवल 2: संबंधित विषय में स्नातक + बीएड। लेवल 3: संबंधित विषय में परास्नातक (50%) + बीएड।',
      teachingQualification: ['D.El.Ed', 'B.Ed'],
      percentageRequired: '50% marks in qualifying degree.'
    },
    selectionProcess: [
      'Written Objective Examination (150 Questions, 150 Marks)',
      'Qualifying cutoff: 60% (90 marks) for all candidates except SC/PH of Haryana (55% / 82 marks)',
      'HTET Qualifying Certificate with Lifetime Validity'
    ],
    selectionProcessHi: [
      '150 अंकों की लिखित वस्तुनिष्ठ परीक्षा',
      'अर्हक अंक: सामान्य वर्ग 60% (90 अंक), हरियाणा के एससी/दिव्यांग 55% (82 अंक)',
      'आजीवन वैध एचटेट प्रमाण पत्र'
    ],
    examPattern: {
      totalQuestions: 150,
      totalMarks: 150,
      durationMinutes: 150,
      negativeMarking: 'No negative marking',
      sections: [
        { id: 'htet-cdp', name: 'Child Development and Pedagogy', nameHi: 'बाल विकास एवं शिक्षाशास्त्र', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'htet-lang', name: 'Languages (Hindi 15 Q + English 15 Q)', nameHi: 'भाषा (हिंदी 15 + अंग्रेजी 15)', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'htet-ga', name: 'General Studies (Quant 10 Q + Reasoning 10 Q + Haryana GK 10 Q)', nameHi: 'सामान्य अध्ययन (गणित + रीजनिंग + हरियाणा सामान्य ज्ञान)', questions: 30, marks: 30, negativeMarking: '0' },
        { id: 'htet-subject', name: 'Subject Specific Specialization (Level 2/3) or Math & EVS (Level 1)', nameHi: 'विषय विशिष्ट विशेषज्ञता', questions: 60, marks: 60, negativeMarking: '0' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-09-10',
      applyStartDate: '2026-09-15',
      applyEndDate: '2026-10-10',
      admitCardDate: '2026-11-20',
      examDate: '2026-12-05',
      status: 'upcoming',
      notificationPdfUrl: 'https://bseh.org.in'
    },
    popularBooks: ['book-htet-arihant', 'book-htet-disha-solved'],
    syllabusRef: 'htet-syllabus'
  }
];
