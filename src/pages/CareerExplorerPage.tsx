import React, { useState } from 'react';
import { 
  Compass, 
  GraduationCap, 
  Atom, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface CareerExplorerPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const CareerExplorerPage: React.FC<CareerExplorerPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [selectedPathway, setSelectedPathway] = useState<'teaching' | 'science' | 'general'>('teaching');

  const pathways = {
    teaching: {
      title: 'School Education & University Faculty Cadre',
      titleHi: 'विद्यालयी शिक्षा एवं विश्वविद्यालय प्राध्यापक संवर्ग',
      description: 'Progression from Primary Teacher (PRT) to University Professor with required qualifications and eligibility exams.',
      levels: [
        {
          role: 'Primary Teacher (PRT / Assistant Teacher)',
          roleHi: 'प्राथमिक शिक्षक (पीआरटी - कक्षा 1 से 5)',
          stage: 'Entry Level (Pay Matrix Level 6: Rs. 35,400 – 1,12,400)',
          qualification: 'Senior Secondary (50%) + 2-year D.El.Ed / JBT / B.El.Ed + CTET Paper I (or State TET Paper I)',
          examPath: 'KVS PRT, DSSSB PRT, State PRT (REET, UPTET SuperTET, HTET PRT)',
          promotion: 'Promoted to TGT after 5 years or departmental exam.'
        },
        {
          role: 'Trained Graduate Teacher (TGT)',
          roleHi: 'प्रशिक्षित स्नातक शिक्षक (टीजीटी - कक्षा 6 से 10)',
          stage: 'Secondary Stage (Pay Matrix Level 7: Rs. 44,900 – 1,42,400)',
          qualification: 'Bachelor’s Degree in Subject (50%) + B.Ed + CTET Paper II (or State TET Paper II)',
          examPath: 'KVS TGT, NVS TGT, DSSSB TGT, EMRS TGT, State TGT Recruitment',
          promotion: 'Promoted to PGT or Vice Principal / Headmaster.'
        },
        {
          role: 'Post Graduate Teacher (PGT / Lecturer)',
          roleHi: 'परास्नातक शिक्षक (पीजीटी / प्रवक्ता - कक्षा 11 एवं 12)',
          stage: 'Senior Secondary Stage (Pay Matrix Level 8: Rs. 47,600 – 1,51,100)',
          qualification: 'Master’s Degree in Subject (50%) + B.Ed (TET not mandatory for central PGTs)',
          examPath: 'KVS PGT, NVS PGT, DSSSB PGT, EMRS PGT, State Lecturer PSC Exams',
          promotion: 'Promoted to Vice Principal (Level 10) and Principal (Level 12).'
        },
        {
          role: 'Assistant Professor (Higher Education)',
          roleHi: 'सहायक प्राध्यापक (विश्वविद्यालय एवं राजकीय महाविद्यालय)',
          stage: 'Higher Education (Academic Level 10: Rs. 57,700 – 1,82,400)',
          qualification: 'Master’s Degree with 55% + CSIR-UGC NET / UGC-NET or Ph.D. as per UGC 2018 regulations',
          examPath: 'UGC-NET / CSIR-NET + State PSC Assistant Professor Recruitment / University Selection Committee',
          promotion: 'Associate Professor (Level 13A) → Full Professor (Level 14).'
        }
      ]
    },
    science: {
      title: 'Scientific Research, R&D & Premier Institutes',
      titleHi: 'वैज्ञानिक अनुसंधान, डीआरडीओ, इसरो एवं उच्च शोध संस्थान',
      description: 'Career roadmap for Pure Science & Technology scholars from Postgraduate Entrance to Lead Scientist.',
      levels: [
        {
          role: 'Postgraduate / Integrated Ph.D. Scholar',
          roleHi: 'परास्नातक एवं एकीकृत शोधार्थी',
          stage: 'Graduate to Masters Transition',
          qualification: 'B.Sc. in Physics / Chemistry / Mathematics / Life Sciences / Geology',
          examPath: 'IIT JAM, CUET-PG Science, JEST, NEST, TIFR GS Entrance',
          promotion: 'Enters premier M.Sc. or Ph.D. programs at IITs, IISc, IISERs, or Central Universities.'
        },
        {
          role: 'Junior Research Fellow (JRF) & Doctoral Fellow',
          roleHi: 'कनिष्ठ शोध अध्येता (JRF - डॉक्टरेट शोध)',
          stage: 'Doctoral Fellowship (Rs. 37,000/month + HRA Fellowship)',
          qualification: 'Master’s Degree in Science / B.Tech with high merit + National Eligibility Test',
          examPath: 'CSIR-UGC NET JRF, GATE (Science/Engineering), JEST, DBT-JRF, ICMR-JRF',
          promotion: 'Upgrades to Senior Research Fellow (SRF - Rs. 42,000/month + HRA) after 2-year progress review.'
        },
        {
          role: 'Scientist ‘B’ / Scientist ‘C’ in National Labs',
          roleHi: 'वैज्ञानिक बी/सी (ISRO, DRDO, BARC, CSIR, ICMR)',
          stage: 'Class-A Gazetted Scientific Officer (Level 10: Rs. 56,100 – 1,77,500)',
          qualification: 'First-Class M.Sc. / B.Tech + Valid GATE Score or BARC OCES/DGFS or ISRO ICRB',
          examPath: 'GATE, ISRO ICRB Scientist Recruitment, BARC OCES Exam, DRDO RAC Interview',
          promotion: 'Scientist D → Scientist E → Scientist F (Director of Laboratory).'
        }
      ]
    },
    general: {
      title: 'General Administration & Public Service Cadres',
      titleHi: 'सामान्य प्रशासनिक व सार्वजनिक सेवाएं (SSC, PCS)',
      description: 'Career progression for General Graduate competitive examinations.',
      levels: [
        {
          role: 'Combined Higher Secondary Staff (LDC / JSA / DEO)',
          roleHi: 'अधीनस्थ लिपिकीय सेवाएं (एसएससी सीएचएसएल)',
          stage: 'Pay Matrix Level 2 & 4 (Rs. 19,900 – 81,100)',
          qualification: '10+2 Intermediate from recognized board + Typing proficiency',
          examPath: 'SSC CHSL (Tier 1 CBT + Tier 2 CBT & Typing Test)',
          promotion: 'Promoted to Upper Division Clerk (UDC) and Section Officer.'
        },
        {
          role: 'Assistant Section Officer (ASO) / Inspector Cadres',
          roleHi: 'सहायक अनुभाग अधिकारी (ASO) व केंद्रीय निरीक्षक (एसएससी सीजीएल)',
          stage: 'Group B Non-Gazetted / Gazetted (Level 7: Rs. 44,900 – 1,42,400)',
          qualification: 'Bachelor’s Degree in any discipline from a recognized University',
          examPath: 'SSC CGL (Tier 1 Qualifying + Tier 2 Merit CBT)',
          promotion: 'Under Secretary, Deputy Director, Assistant Commissioner.'
        },
        {
          role: 'Sub-Divisional Magistrate (SDM) / DSP / Executive Officer',
          roleHi: 'उप-जिलाधिकारी (SDM), डीएसपी व राज्य प्रशासनिक संवर्ग',
          stage: 'State Civil Services Group A (Level 10: Rs. 56,100 – 1,77,500)',
          qualification: 'Graduation in any stream from recognized university',
          examPath: 'State Public Service Commissions (UPPSC, BPSC, MPPSC, RPSC RAS Prelims, Mains, Interview)',
          promotion: 'Induction into Indian Administrative Service (IAS) / IPS after stipulated service.'
        }
      ]
    }
  };

  const currentData = pathways[selectedPathway];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Career Explorer Pathways', labelHi: 'करियर मार्गदर्शक खाका', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-800">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>{t('STRATEGIC CAREER ROADMAP & PAY PROGRESSION', 'रणनीतिक करियर मार्ग एवं वेतन संरचना')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Indian Public Exams Career Pathways', 'भारतीय सार्वजनिक परीक्षाएं करियर ट्री')}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {t(
            'Understand the exact qualification, eligibility gateway, 7th Pay Commission pay scale, and long-term promotion trajectory across Teaching, Pure Science, and Public Administration.',
            'शिक्षण, वैज्ञानिक अनुसंधान और सामान्य प्रशासनिक सेवाओं में आवश्यक अर्हताएं, प्रवेश परीक्षाएं और पदोन्नति का संपूर्ण मार्गदर्शक।'
          )}
        </p>
      </div>

      {/* Pathway Switcher Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setSelectedPathway('teaching')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
            selectedPathway === 'teaching'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100 shadow-2xs'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-300'
          }`}
        >
          <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              {t('Teaching Stream', 'शिक्षक संवर्ग')}
            </div>
            <div className="text-sm font-bold mt-0.5">
              PRT → TGT → PGT → Professor
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedPathway('science')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
            selectedPathway === 'science'
              ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-950 dark:text-teal-100 shadow-2xs'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-teal-300'
          }`}
        >
          <div className="p-2.5 rounded-xl bg-teal-600 text-white shrink-0">
            <Atom className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
              {t('Science & Research', 'वैज्ञानिक अनुसंधान')}
            </div>
            <div className="text-sm font-bold mt-0.5">
              JAM → JRF → Scientist B / C
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedPathway('general')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
            selectedPathway === 'general'
              ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-950 dark:text-blue-100 shadow-2xs'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-300'
          }`}
        >
          <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-400">
              {t('Public Administration', 'प्रशासनिक सेवाएं')}
            </div>
            <div className="text-sm font-bold mt-0.5">
              CHSL → CGL (Inspector) → PCS
            </div>
          </div>
        </button>
      </div>

      {/* Pathway Details Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
        <div>
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100">
            {language === 'hi' ? currentData.titleHi : currentData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {currentData.description}
          </p>
        </div>

        {/* Milestones Vertical Steps */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
          {currentData.levels.map((lvl, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet circle */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 flex items-center justify-center text-xs font-black shadow-xs">
                {idx + 1}
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {language === 'hi' ? lvl.roleHi : lvl.role}
                  </h3>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                    {lvl.stage}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-800 dark:text-slate-200 block mb-1">
                      🎓 {t('Required Qualification:', 'अनिवार्य शैक्षणिक अर्हता:')}
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {lvl.qualification}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-800 dark:text-slate-200 block mb-1">
                      🎯 {t('Mandatory Examinations:', 'प्रवेश व चयन परीक्षाएं:')}
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed font-semibold text-indigo-600 dark:text-indigo-400">
                      {lvl.examPath}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  <span><strong>{t('Promotion Route:', 'पदोन्नति मार्ग:')}</strong> {lvl.promotion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
