import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  HelpCircle, 
  CheckCircle, 
  Play, 
  Sparkles, 
  AlertTriangle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allExams } from '../data/exams';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface MockTestsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onStartMock: (examId: string, customConfig?: { questionCount: number; duration: number }) => void;
  initialExamId?: string;
}

export const MockTestsPage: React.FC<MockTestsPageProps> = ({ onNavigate, onStartMock, initialExamId }) => {
  const { language, t } = useLanguage();
  const initialCategory = React.useMemo(() => {
    if (!initialExamId) return 'all';
    const found = allExams.find(e => e.id === initialExamId);
    return found ? found.category : 'all';
  }, [initialExamId]);

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = [
    { id: 'all', label: 'All Mocks', labelHi: 'सभी टेस्ट' },
    { id: 'teaching_eligibility', label: 'CTET & State TETs', labelHi: 'सीटीईटी व टीईटी' },
    { id: 'science', label: 'Science Entrance (CSIR, JAM, GATE)', labelHi: 'विज्ञान प्रवेश' },
    { id: 'teaching_recruitment', label: 'Teaching Recruitment (KVS, DSSSB)', labelHi: 'शिक्षक भर्ती' },
    { id: 'general', label: 'General (SSC CGL)', labelHi: 'सामान्य (SSC)' }
  ];

  const filteredExams = allExams.filter(exam => {
    if (selectedCategory !== 'all' && exam.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Mock Test Simulator', labelHi: 'मॉक टेस्ट सिम्युलेटर', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>{t('NTA / CBSE COMPUTER BASED TEST (CBT) SIMULATOR', 'कंप्यूटर आधारित परीक्षा (CBT) सिम्युलेटर')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          {t('Official Exam Mock Tests', 'आधिकारिक पैटर्न मॉक टेस्ट')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl">
          {t('Experience identical exam pressure with real-time countdown timer, official question palette colors, section navigation, negative marking rules, and instant in-depth analytics.', 'वास्तविक परीक्षा जैसा माहौल, आधिकारिक प्रश्न पैलेट रंग, नकारात्मक अंकन और विस्तृत रिपोर्ट के साथ परीक्षा दें।')}
        </p>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 scrollbar-thin">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mock Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExams.map(exam => (
          <div
            key={exam.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                  {exam.category.replace('_', ' ').toUpperCase()}
                </span>
                <span className="text-[10px] font-semibold text-slate-400">
                  {exam.examMode}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 mb-1">
                {language === 'hi' ? exam.nameHi : exam.name} Full Mock
              </h3>
              <div className="text-xs text-slate-500 mb-3">
                {exam.conductingBody}
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-3 text-center text-xs">
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Questions</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{exam.examPattern.totalQuestions}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Marks</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{exam.examPattern.totalMarks}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Time</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{exam.examPattern.durationMinutes}m</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 space-y-1 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-amber-600">Negative:</span>
                  <span className="truncate">{exam.examPattern.negativeMarking}</span>
                </div>
                <div>Sections: {exam.examPattern.sections.map(s => s.name.split(':')[0]).join(', ')}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <button
                onClick={() => onStartMock(exam.id)}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t('Start CBT Mock', 'मॉक टेस्ट दें')}</span>
              </button>

              <button
                onClick={() => onStartMock(exam.id, { questionCount: 15, duration: 15 })}
                className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-medium text-xs transition-colors"
                title="Quick 15-question mini test"
              >
                15 Qs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
