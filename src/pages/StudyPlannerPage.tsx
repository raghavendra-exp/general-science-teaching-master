import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle, 
  Save, 
  Trash2, 
  AlertCircle, 
  Layers, 
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { allExams } from '../data/exams';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface StudyPlannerPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const StudyPlannerPage: React.FC<StudyPlannerPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { studyPlan, saveStudyPlan, deleteStudyPlan } = useUserData();

  const [selectedExamId, setSelectedExamId] = useState<string>(studyPlan?.examId || 'ctet');
  const [dailyHours, setDailyHours] = useState<number>(studyPlan?.dailyHours || 4);
  const [level, setLevel] = useState<'Beginner' | 'Intermediate' | 'Revision'>(studyPlan?.currentLevel || 'Intermediate');
  const [targetDate, setTargetDate] = useState<string>(studyPlan?.targetDate || '2026-07-15');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const selectedExam = allExams.find(e => e.id === selectedExamId) || allExams[0];

  const handleGenerateAndSave = () => {
    saveStudyPlan({
      examId: selectedExam.id,
      examName: selectedExam.name,
      targetDate,
      dailyHours,
      currentLevel: level,
      weakSubjects: ['Pedagogy / High-Yield Concepts', 'Quantitative / Analytical Numerical'],
      strongSubjects: ['General Studies', 'Language / Comprehension'],
      createdAt: new Date().toISOString()
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  // Generate Slots based on daily hours
  const generateSlots = (hours: number) => {
    if (hours <= 2) {
      return [
        { slot: 'Morning (60 Min)', title: 'Core Concepts & NCERT Chapter', task: 'Focus on one difficult syllabus topic and make bullet revision notes.', icon: '📖' },
        { slot: 'Evening (60 Min)', title: 'PYQ Drill & Error Notebook', task: 'Solve 20 verified PYQs. Note down missed questions in the Error Notebook.', icon: '🎯' }
      ];
    } else if (hours <= 4) {
      return [
        { slot: 'Slot 1: Early Morning (90 Min)', title: 'Theory & Concept Mastery', task: 'Study core syllabus chapters and theoretical foundations without distractions.', icon: '🌅' },
        { slot: 'Slot 2: Afternoon (60 Min)', title: 'Speed Drill & Shortcut Practice', task: 'Timed practice on quantitative shortcuts or pedagogy situational scenarios.', icon: '⚡' },
        { slot: 'Slot 3: Evening (90 Min)', title: 'Full Sectional Test & Analytics', task: 'Attempt a 30-50 question sectional test. Analyze weak topics in post-test analytics.', icon: '📊' }
      ];
    } else {
      return [
        { slot: 'Slot 1: Morning (120 Min)', title: 'Heavy Subject & Standard Textbook', task: 'High-focus time for toughest subject (Physics, Math, or Pedagogy Theories).', icon: '🧠' },
        { slot: 'Slot 2: Midday (90 Min)', title: 'NCERT Chapter-by-Chapter Review', task: 'Review NCERT textbook lines, boxed facts, and previous year recurring themes.', icon: '📚' },
        { slot: 'Slot 3: Afternoon (90 Min)', title: 'Timed Mock Test Simulation', task: 'Full CBT simulation with timer and palette under exam conditions.', icon: '💻' },
        { slot: 'Slot 4: Night (60 Min)', title: 'Active Recall, Formulas & Error Revision', task: 'Flip through flashcards, review mistakes logged today in the Error Notebook.', icon: '🌙' }
      ];
    }
  };

  const scheduleSlots = generateSlots(dailyHours);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Study Planner & Timetable', labelHi: 'अध्ययन योजनाकार एवं समय सारिणी', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t('PERSONALIZED ADAPTIVE TIMETABLE GENERATOR', 'व्यक्तिगत अनुकूली समय सारिणी निर्माता')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Smart Study Planner & Daily Routine', 'स्मार्ट अध्ययन योजनाकार व दैनिक दिनचर्या')}
        </h1>
        <p className="text-indigo-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Generate a mathematically balanced daily schedule aligning theory, NCERT review, timed PYQ drills, and nightly error log rectification according to your target exam date.',
            'अपनी परीक्षा तिथि और उपलब्ध अध्ययन घंटों के आधार पर सिद्धांत, प्रश्न अभ्यास व रिवीजन का वैज्ञानिक टाइमटेबल तैयार करें।'
          )}
        </p>
      </div>

      {/* Planner Configurator */}
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>{t('Configure Your Preparation Parameters', 'अपनी तैयारी के पैरामीटर सेट करें')}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Target Exam */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              {t('Target Exam', 'लक्षित परीक्षा')}
            </label>
            <select
              value={selectedExamId}
              onChange={(e) => setSelectedExamId(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500 font-medium"
            >
              {allExams.map(ex => (
                <option key={ex.id} value={ex.id}>{ex.name}</option>
              ))}
            </select>
          </div>

          {/* Daily Study Hours */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              {t('Available Daily Hours', 'दैनिक अध्ययन घंटे')}
            </label>
            <select
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500 font-medium"
            >
              <option value={2}>2 Hours / Day (Working Aspirant)</option>
              <option value={4}>4 Hours / Day (Moderate Pace)</option>
              <option value={6}>6 Hours / Day (Full-time Aspirant)</option>
              <option value={8}>8+ Hours / Day (Intensive Bootcamp)</option>
            </select>
          </div>

          {/* Preparation Stage */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              {t('Current Level', 'तैयारी का स्तर')}
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as any)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500 font-medium"
            >
              <option value="Beginner">Beginner (Syllabus Familiarization)</option>
              <option value="Intermediate">Intermediate (Practice & PYQs)</option>
              <option value="Revision">Revision (Full Mocks & Speed)</option>
            </select>
          </div>

          {/* Target Exam Date */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              {t('Target Exam Date', 'लक्षित परीक्षा तिथि')}
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500 font-medium"
            />
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {savedSuccess && (
              <span className="text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                {t('Study plan saved successfully in browser memory!', 'अध्ययन योजना सफलतापूर्वक सहेज ली गई!')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {studyPlan && (
              <button
                onClick={deleteStudyPlan}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{t('Reset Plan', 'योजना हटाएं')}</span>
              </button>
            )}

            <button
              onClick={handleGenerateAndSave}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 shadow-2xs transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{t('Save Active Timetable', 'टाइमटेबल सक्रिय करें')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Generated Daily Routine Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-600" />
            <span>{t('Your Customized Daily Routine Slots', 'आपकी दैनिक अध्ययन समय सारिणी')}</span>
          </h2>
          <span className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
            {selectedExam.name} • {dailyHours} {t('Hours Daily', 'घंटे प्रतिदिन')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scheduleSlots.map((slot, sIdx) => (
            <div
              key={sIdx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-2 hover:border-purple-300 transition-all"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                  <span className="text-base">{slot.icon}</span>
                  {slot.slot}
                </span>
                <span className="text-slate-400 text-[11px] font-semibold">Priority 1</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {slot.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {slot.task}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 12-Week Strategic Progression Roadmap */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-600" />
          <span>{t('12-Week Strategic Master Roadmap', '12-सप्ताह रणनीतिक तैयारी खाका')}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded-md font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              Weeks 1–4 (Phase 1)
            </span>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              {t('Foundation & NCERT Mastery', 'मूल अवधारणा व एनसीईआरटी अध्ययन')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete first-pass reading of all NCERT core chapters, make one-page formula and concept sheets, and attempt chapter-end questions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded-md font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
              Weeks 5–8 (Phase 2)
            </span>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              {t('Authentic PYQs & Speed Lab', 'विगत वर्ष प्रश्न व गति सुधार')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Solve last 10 years verified PYQs under timed conditions. Log every incorrect answer in the Error Notebook and categorize mistake types.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded-md font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Weeks 9–12 (Phase 3)
            </span>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              {t('Full CBT Mocks & Error Zeroing', 'पूर्ण मॉक टेस्ट व त्रुटि निवारण')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Attempt 2 full CBT mock tests weekly. Target 95%+ accuracy, eliminate negative marks, and resolve all entries in the Error Notebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
