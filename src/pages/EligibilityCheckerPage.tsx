import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  ArrowRight, 
  AlertTriangle, 
  RotateCcw,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { calculateEligibility, EligibilityProfile, EligibilityResult } from '../utils/eligibilityCalculator';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface EligibilityCheckerPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const EligibilityCheckerPage: React.FC<EligibilityCheckerPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const [profile, setProfile] = useState<EligibilityProfile>({
    dob: '1998-05-15',
    gender: 'male',
    category: 'UR',
    qualification: 'Graduation',
    stream: 'Science_PCM',
    percentage: 62,
    teachingQualification: 'B_Ed',
    tetStatus: 'CTET_P2'
  });

  const [results, setResults] = useState<EligibilityResult[] | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateEligibility(profile);
    setResults(res);
  };

  const handleReset = () => {
    setProfile({
      dob: '2000-01-01',
      gender: 'male',
      category: 'UR',
      qualification: 'Graduation',
      stream: 'Science_PCM',
      percentage: 60,
      teachingQualification: 'none',
      tetStatus: 'none'
    });
    setResults(null);
  };

  const eligibleCount = results ? results.filter(r => r.status === 'Eligible').length : 0;
  const conditionalCount = results ? results.filter(r => r.status === 'Conditionally Eligible').length : 0;
  const ineligibleCount = results ? results.filter(r => r.status === 'Ineligible').length : 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Which Exam Can I Apply For?', labelHi: 'पात्रता कैलकुलेटर', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('INDIAN EXAMINATION ELIGIBILITY ENGINE', 'परीक्षा पात्रता निर्धारण प्रणाली')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('Which Exam Can I Apply For?', 'मैं किस परीक्षा हेतु पात्र हूँ?')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('Select your date of birth, category, education, percentage, and teaching certificates. Our engine computes exact eligibility across General, Science & Teaching exams with age relaxations.', 'अपनी जन्मतिथि, श्रेणी, शैक्षणिक डिग्री, प्रतिशत और शिक्षक प्रशिक्षण विवरण दर्ज करें। इंजन सभी छूटों सहित आपकी पात्र परीक्षाएं प्रदर्शित करेगा।')}
          </p>
        </div>

        {/* Mandatory Official Disclaimer */}
        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>{t('Statutory Disclaimer:', 'सांविधिक अस्वीकरण:')}</strong>{' '}
            {language === 'hi'
              ? 'पात्रता परिणाम सांकेतिक हैं। किसी भी परीक्षा में आवेदन करने से पूर्व संबंधित परीक्षा प्राधिकरण (NTA, CBSE, SSC, आयोग) की नवीनतम आधिकारिक अधिसूचना अवश्य सत्यापित करें।'
              : 'Eligibility calculations are indicative and based on published norms. Always verify the current official notification before applying.'}
          </div>
        </div>
      </div>

      {/* Form and Results Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Inputs (Left) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <form onSubmit={handleCalculate} className="space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
              {t('Candidate Academic Profile', 'अभ्यर्थी शैक्षणिक प्रोफाइल')}
            </h2>

            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t('Date of Birth (DoB):', 'जन्म तिथि:')}
              </label>
              <input
                type="date"
                value={profile.dob}
                onChange={e => setProfile({ ...profile, dob: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-slate-100"
                required
              />
            </div>

            {/* Gender & Category Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Gender:', 'लिंग:')}
                </label>
                <select
                  value={profile.gender}
                  onChange={e => setProfile({ ...profile, gender: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Category:', 'आरक्षण श्रेणी:')}
                </label>
                <select
                  value={profile.category}
                  onChange={e => setProfile({ ...profile, category: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
                >
                  <option value="UR">UR (General)</option>
                  <option value="OBC">OBC-NCL (+3 Yrs)</option>
                  <option value="SC">SC (+5 Yrs)</option>
                  <option value="ST">ST (+5 Yrs)</option>
                  <option value="EWS">EWS</option>
                  <option value="PwBD">PwBD (+10 Yrs)</option>
                </select>
              </div>
            </div>

            {/* Highest Qualification */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t('Highest Qualification:', 'उच्चतम शैक्षणिक योग्यता:')}
              </label>
              <select
                value={profile.qualification}
                onChange={e => setProfile({ ...profile, qualification: e.target.value as any })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
              >
                <option value="12th">10+2 / Senior Secondary (12th)</option>
                <option value="Graduation">Bachelor Degree (Graduation B.Sc/B.A/B.Tech)</option>
                <option value="Post_Graduation">Master Degree (Post Graduation M.Sc/M.A/M.Tech)</option>
                <option value="PhD">Ph.D. / Doctorate</option>
              </select>
            </div>

            {/* Stream & Percentage */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Stream / Discipline:', 'संकाय / विषय:')}
                </label>
                <select
                  value={profile.stream}
                  onChange={e => setProfile({ ...profile, stream: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
                >
                  <option value="Science_PCM">Science (PCM: Physics, Chem, Math)</option>
                  <option value="Science_PCB">Science (PCB: Physics, Chem, Bio)</option>
                  <option value="Engineering">Engineering / Tech</option>
                  <option value="Arts_Humanities">Arts / Humanities / Social Sciences</option>
                  <option value="Commerce">Commerce / Economics</option>
                  <option value="Other">Other Disciplines</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t('Marks Aggregate %:', 'प्राप्तांक प्रतिशत (%):')}
                </label>
                <input
                  type="number"
                  min="30"
                  max="100"
                  value={profile.percentage}
                  onChange={e => setProfile({ ...profile, percentage: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
                  required
                />
              </div>
            </div>

            {/* Teaching Qualification */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t('Teaching Qualification (Teacher Education):', 'शिक्षक प्रशिक्षण योग्यता:')}
              </label>
              <select
                value={profile.teachingQualification}
                onChange={e => setProfile({ ...profile, teachingQualification: e.target.value as any })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
              >
                <option value="none">None (No Teaching Diploma/Degree)</option>
                <option value="D_El_Ed">D.El.Ed / BTC (2-Year Elementary Diploma)</option>
                <option value="B_Ed">B.Ed (Bachelor of Education)</option>
                <option value="B_El_Ed">B.El.Ed (4-Year Elementary Degree)</option>
                <option value="Integrated_BEd">4-Year Integrated ITEP / B.Sc. B.Ed</option>
              </select>
            </div>

            {/* TET Status */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t('TET Qualification Status:', 'टीईटी उत्तीर्ण स्थिति:')}
              </label>
              <select
                value={profile.tetStatus}
                onChange={e => setProfile({ ...profile, tetStatus: e.target.value as any })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
              >
                <option value="none">Not Qualified / None</option>
                <option value="CTET_P1">CTET Paper I (Classes 1-5)</option>
                <option value="CTET_P2">CTET Paper II (Classes 6-8)</option>
                <option value="CTET_Both">CTET Both Papers (I & II)</option>
                <option value="State_TET">State TET Qualified (UPTET, REET, HTET, etc.)</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t('Compute Eligible Exams', 'पात्र परीक्षाएं खोजें')}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Results Panel (Right) */}
        <div className="lg:col-span-7 space-y-4">
          {!results && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <Compass className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
              <h3 className="font-bold text-base text-slate-700 dark:text-slate-300">
                {t('Ready to Evaluate Your Eligibility', 'पात्रता मूल्यांकन हेतु तैयार')}
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {t('Fill the academic details on the left and click "Compute Eligible Exams" to generate your detailed compatibility report.', 'बाईं ओर अपना विवरण भरें और "पात्र परीक्षाएं खोजें" पर क्लिक करें।')}
              </p>
            </div>
          )}

          {results && (
            <div className="space-y-4">
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 text-center">
                  <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">{eligibleCount}</div>
                  <div className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">Directly Eligible</div>
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-900/60 text-center">
                  <div className="text-xl font-black text-amber-600 dark:text-amber-400">{conditionalCount}</div>
                  <div className="text-[11px] font-semibold text-amber-800 dark:text-amber-300">Conditional</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-xl font-black text-slate-500">{ineligibleCount}</div>
                  <div className="text-[11px] font-semibold text-slate-500">Ineligible</div>
                </div>
              </div>

              {/* List of Results */}
              <div className="space-y-3">
                {results.map((res, idx) => {
                  const isSuccess = res.status === 'Eligible';
                  const isCond = res.status === 'Conditionally Eligible';

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition-all ${
                        isSuccess
                          ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
                          : isCond
                          ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-75'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                              {language === 'hi' ? res.exam.nameHi : res.exam.name}
                            </h4>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isSuccess
                                ? 'bg-emerald-600 text-white'
                                : isCond
                                ? 'bg-amber-600 text-white'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                            }`}>
                              {res.status}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500">
                            {res.exam.conductingBody} • {res.exam.category.replace('_', ' ').toUpperCase()}
                          </div>
                        </div>

                        <button
                          onClick={() => onNavigate('exam-detail', { examId: res.exam.id })}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 flex items-center gap-1 shrink-0"
                        >
                          <span>{t('View Exam', 'विवरण')}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Criteria analysis */}
                      <div className="space-y-1 text-xs">
                        {(language === 'hi' ? res.reasonsHi : res.reasons).map((reason, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-1.5 text-slate-600 dark:text-slate-400">
                            {isSuccess ? (
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            ) : isCond ? (
                              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            )}
                            <span>{reason}</span>
                          </div>
                        ))}

                        {res.appliedRelaxation && (
                          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                            Applied: {res.appliedRelaxation} (Calculated age: {res.ageYears} yrs)
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
