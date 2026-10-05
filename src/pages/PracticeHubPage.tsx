import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Bookmark, 
  Sliders, 
  Sparkles,
  Zap,
  Filter
} from 'lucide-react';
import { Question } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { allQuestions, filterQuestions } from '../data/questions';
import { allExams } from '../data/exams';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface PracticeHubPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialExam?: string;
}

export const PracticeHubPage: React.FC<PracticeHubPageProps> = ({ onNavigate, initialExam }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark, addToErrorNotebook } = useUserData();

  const [selectedExam, setSelectedExam] = useState<string>(initialExam || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [scoreCount, setScoreCount] = useState({ correct: 0, attempted: 0 });

  useEffect(() => {
    if (initialExam) {
      setSelectedExam(initialExam);
      setCurrentIdx(0);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }, [initialExam]);

  const activeQuestions = filterQuestions({
    exam: selectedExam !== 'all' ? selectedExam : undefined,
    difficulty: selectedDifficulty !== 'all' ? (selectedDifficulty as any) : undefined,
    sourceType: selectedSourceType !== 'all' ? (selectedSourceType as any) : undefined
  });

  const currentQ: Question | undefined = activeQuestions[currentIdx];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);

    if (currentQ) {
      const isCorrect = idx === currentQ.answer;
      setScoreCount(prev => ({
        attempted: prev.attempted + 1,
        correct: prev.correct + (isCorrect ? 1 : 0)
      }));

      if (!isCorrect) {
        addToErrorNotebook(currentQ, idx, 'Conceptual');
      }
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setCurrentIdx(0);
    }
  };

  const handleResetFilters = () => {
    setSelectedExam('all');
    setSelectedDifficulty('all');
    setSelectedSourceType('all');
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const bookmarked = currentQ ? isBookmarked(currentQ.id) : false;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Practice Engine', labelHi: 'अभ्यास इंजन', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>{t('INTERACTIVE PRACTICE ENGINE', 'इंटरैक्टिव अभ्यास इंजन')}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {t('Topic & Chapter Practice Mode', 'विषय-वार अभ्यास मोड')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t('Instant answer feedback with step-by-step verified explanations and auto-logging to Error Notebook.', 'तुरंत उत्तर सत्यापन, व्याख्या और गलत उत्तरों का त्रुटि नोटबुक में स्वतः रिकॉर्डिंग।')}
            </p>
          </div>

          {/* Quick Score Counter */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-center shrink-0">
            <div>
              <div className="text-[10px] text-slate-400 font-medium">Attempted</div>
              <div className="text-base font-bold text-slate-900 dark:text-slate-100">{scoreCount.attempted}</div>
            </div>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
            <div>
              <div className="text-[10px] text-slate-400 font-medium">Accuracy</div>
              <div className="text-base font-black text-emerald-600">
                {scoreCount.attempted > 0 ? Math.round((scoreCount.correct / scoreCount.attempted) * 100) : 0}%
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Target Exam:</label>
            <select
              value={selectedExam}
              onChange={e => { setSelectedExam(e.target.value); setCurrentIdx(0); }}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Examinations</option>
              {allExams.map(ex => (
                <option key={ex.id} value={ex.id}>{ex.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Difficulty:</label>
            <select
              value={selectedDifficulty}
              onChange={e => { setSelectedDifficulty(e.target.value); setCurrentIdx(0); }}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Source Type:</label>
            <select
              value={selectedSourceType}
              onChange={e => { setSelectedSourceType(e.target.value); setCurrentIdx(0); }}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Sources</option>
              <option value="VERIFIED PYQ">VERIFIED PYQ Only</option>
              <option value="ORIGINAL">ORIGINAL Questions</option>
              <option value="PYQ-STYLE">PYQ-STYLE Questions</option>
            </select>
          </div>
        </div>
      </div>

      {/* Question Card */}
      {currentQ ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          {/* Card Top */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">
                {currentIdx + 1}
              </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Question {currentIdx + 1} of {activeQuestions.length}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">{currentQ.subject}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">{currentQ.topic}</span>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="font-bold text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 shrink-0">
                {currentQ.sourceType}
              </span>
              <button
                onClick={() => toggleBookmark(currentQ.id)}
                className="p-1 text-slate-400 hover:text-blue-500"
                title="Bookmark Question"
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current text-blue-500' : ''}`} />
              </button>
            </div>
          </div>

          {/* Question Text */}
          <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
            {language === 'hi' && currentQ.questionHi ? currentQ.questionHi : currentQ.question}
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = currentQ.answer === optIdx;

              let style = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100';

              if (selectedOption !== null) {
                if (isCorrect) {
                  style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 line-through';
                }
              }

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelect(optIdx)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>
                      {language === 'hi' && currentQ.optionsHi?.[optIdx] ? currentQ.optionsHi[optIdx] : opt}
                    </span>
                  </div>

                  {selectedOption !== null && isCorrect && (
                    <span className="text-xs font-bold text-emerald-600">✓ Correct</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {showExplanation && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 animate-in fade-in">
              <div className="font-bold text-xs uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Explanation & Source:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {language === 'hi' && currentQ.explanationHi ? currentQ.explanationHi : currentQ.explanation}
              </p>
              <div className="text-[11px] text-slate-400 pt-1">
                Source Reference: <strong>{currentQ.source}</strong> (Year: {currentQ.year || 'Standard'})
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                if (currentIdx > 0) {
                  setCurrentIdx(currentIdx - 1);
                  setSelectedOption(null);
                  setShowExplanation(false);
                }
              }}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 disabled:opacity-40 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Next Question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-700">No questions found for the selected filter combination</h3>
          <button onClick={handleResetFilters} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
