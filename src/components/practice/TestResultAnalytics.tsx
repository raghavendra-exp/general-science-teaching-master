import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  AlertCircle, 
  Clock, 
  RotateCcw, 
  ArrowLeft, 
  Filter, 
  Share2, 
  PlusCircle,
  Bookmark
} from 'lucide-react';
import { TestSession, MistakeType, Question } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useUserData } from '../../context/UserDataContext';
import { computeTestAnalytics } from '../../utils/analytics';

interface TestResultAnalyticsProps {
  session: TestSession;
  onRetake: () => void;
  onExit: () => void;
}

export const TestResultAnalytics: React.FC<TestResultAnalyticsProps> = ({
  session,
  onRetake,
  onExit
}) => {
  const { language, t } = useLanguage();
  const { addToErrorNotebook, isBookmarked, toggleBookmark } = useUserData();

  const analytics = computeTestAnalytics(session);
  const [filterMode, setFilterMode] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');
  const [selectedErrorQ, setSelectedErrorQ] = useState<Question | null>(null);
  const [mistakeType, setMistakeType] = useState<MistakeType>('Conceptual');
  const [errorNotes, setErrorNotes] = useState('');
  const [errorAddedToast, setErrorAddedToast] = useState(false);

  const mistakeTypes: MistakeType[] = [
    'Conceptual',
    'Calculation',
    'Memory',
    'Misread',
    'Guess',
    'Careless',
    'Time Pressure'
  ];

  const handleSaveToErrorNotebook = () => {
    if (!selectedErrorQ) return;
    const qIdx = session.questions.findIndex(q => q.id === selectedErrorQ.id);
    const userAns = session.userAnswers[qIdx] !== undefined ? session.userAnswers[qIdx] : -1;

    addToErrorNotebook(selectedErrorQ, userAns, mistakeType, errorNotes);
    setSelectedErrorQ(null);
    setErrorNotes('');
    setErrorAddedToast(true);
    setTimeout(() => setErrorAddedToast(false), 3000);
  };

  const filteredQuestions = session.questions.filter((q, idx) => {
    const userAns = session.userAnswers[idx];
    const isAnswered = userAns !== undefined;
    const isCorrect = isAnswered && userAns === q.answer;

    if (filterMode === 'correct') return isCorrect;
    if (filterMode === 'incorrect') return isAnswered && !isCorrect;
    if (filterMode === 'unattempted') return !isAnswered;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Toast */}
      {errorAddedToast && (
        <div className="fixed top-6 right-6 z-50 p-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle className="w-4 h-4" />
          <span>{t('Saved to Error Notebook successfully!', 'त्रुटि नोटबुक में सुरक्षित कर दिया गया!')}</span>
        </div>
      )}

      {/* Result Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60">
              Mock Test Completed
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1.5">
              {session.title} — {t('Performance Report', 'प्रदर्शन रिपोर्ट')}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Completed on {new Date(session.submittedAt || '').toLocaleString()}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onRetake}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('Retake Test', 'पुनः परीक्षा दें')}</span>
            </button>
            <button
              onClick={onExit}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('Exit to Dashboard', 'डैशबोर्ड')}</span>
            </button>
          </div>
        </div>

        {/* Score & Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          <div className="p-3 sm:p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-center">
            <div className="text-[11px] sm:text-xs text-emerald-700 dark:text-emerald-400 font-medium">Final Score</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 dark:text-emerald-300 mt-1">
              {analytics.rawScore} <span className="text-[10px] sm:text-xs font-normal">/ {analytics.maxScore}</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-center">
            <div className="text-[11px] sm:text-xs text-blue-700 dark:text-blue-400 font-medium">Accuracy</div>
            <div className="text-xl sm:text-2xl font-black text-blue-700 dark:text-blue-300 mt-1">
              {analytics.accuracy}%
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-xs text-slate-500 font-medium">Correct</div>
            <div className="text-2xl font-black text-emerald-600 mt-1">
              {analytics.correctCount}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-xs text-slate-500 font-medium">Incorrect</div>
            <div className="text-2xl font-black text-rose-600 mt-1">
              {analytics.incorrectCount}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-xs text-slate-500 font-medium">Unattempted</div>
            <div className="text-2xl font-black text-slate-500 mt-1">
              {analytics.unattemptedCount}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-xs text-slate-500 font-medium">Avg Time / Q</div>
            <div className="text-2xl font-black text-amber-600 mt-1">
              {analytics.avgTimePerQuestionSeconds}s
            </div>
          </div>
        </div>
      </div>

      {/* Section-Wise Breakdown Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
          {t('Section-Wise Performance Breakdown', 'अनुभाग-वार प्रदर्शन विश्लेषण')}
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3">Section</th>
                <th className="p-3 text-center">Total</th>
                <th className="p-3 text-center">Attempted</th>
                <th className="p-3 text-center text-emerald-600">Correct</th>
                <th className="p-3 text-center text-rose-500">Incorrect</th>
                <th className="p-3 text-center">Score</th>
                <th className="p-3 text-center">Accuracy %</th>
                <th className="p-3 text-center">Avg Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {analytics.sectionBreakdown.map((sec, sIdx) => (
                <tr key={sIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-900 dark:text-slate-100">{sec.sectionName}</td>
                  <td className="p-3 text-center">{sec.totalQuestions}</td>
                  <td className="p-3 text-center font-medium">{sec.attempted}</td>
                  <td className="p-3 text-center font-bold text-emerald-600">{sec.correct}</td>
                  <td className="p-3 text-center font-bold text-rose-500">{sec.incorrect}</td>
                  <td className="p-3 text-center font-black text-emerald-700 dark:text-emerald-400">{sec.score}</td>
                  <td className="p-3 text-center font-semibold">{sec.accuracy}%</td>
                  <td className="p-3 text-center text-slate-500">{sec.avgTimeSeconds}s</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Topic Diagnostics: Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strong Topics */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
          <h3 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4" />
            <span>Strong Topics (Accuracy ≥ 75%)</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {analytics.strongTopics.length > 0 ? (
              analytics.strongTopics.map((top, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium border border-emerald-200 dark:border-emerald-800">
                  ✓ {top}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-400">Keep practicing to build strong topics!</span>
            )}
          </div>
        </div>

        {/* Weak Topics */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
          <h3 className="font-bold text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            <span>Topics Requiring Revision (Accuracy ≤ 40%)</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {analytics.weakTopics.length > 0 ? (
              analytics.weakTopics.map((top, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-medium border border-rose-200 dark:border-rose-800">
                  ! {top}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-400">Great job! No critically weak topics detected.</span>
            )}
          </div>
        </div>
      </div>

      {/* Question-By-Question Solution Review */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
            {t('Detailed Solution Review', 'विस्तृत प्रश्न हल एवं व्याख्या')}
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'correct', 'incorrect', 'unattempted'] as const).map(mode => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                  filterMode === mode
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const originalIndex = session.questions.findIndex(item => item.id === q.id);
            const userAns = session.userAnswers[originalIndex];
            const isAnswered = userAns !== undefined;
            const isCorrect = isAnswered && userAns === q.answer;
            const timeTaken = session.timeSpentPerQuestion[originalIndex] || 0;
            const bookmarked = isBookmarked(q.id);

            return (
              <div 
                key={q.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isCorrect
                    ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                    : isAnswered
                    ? 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/10'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                }`}
              >
                {/* Q Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-800 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      {originalIndex + 1}
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{q.subject}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{q.topic}</span>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <span className="text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {timeTaken}s
                    </span>

                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className="p-1 text-slate-400 hover:text-blue-500"
                      title="Bookmark question"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current text-blue-500' : ''}`} />
                    </button>

                    {!isCorrect && (
                      <button
                        onClick={() => setSelectedErrorQ(q)}
                        className="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-[11px] font-semibold hover:bg-rose-100 flex items-center gap-1"
                        title="Add to Error Notebook"
                      >
                        <PlusCircle className="w-3 h-3" />
                        <span>Error Log</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Question Statement */}
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {language === 'hi' && q.questionHi ? q.questionHi : q.question}
                </p>

                {/* Options display */}
                <div className="space-y-1.5 mb-3">
                  {q.options.map((opt, optIdx) => {
                    const isUserChoice = userAns === optIdx;
                    const isCorrectOpt = q.answer === optIdx;

                    let optStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                    if (isCorrectOpt) {
                      optStyle = 'border-emerald-500 bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold';
                    } else if (isUserChoice && !isCorrectOpt) {
                      optStyle = 'border-rose-500 bg-rose-100/60 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 line-through';
                    }

                    return (
                      <div key={optIdx} className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${optStyle}`}>
                        <span>
                          <strong>{String.fromCharCode(65 + optIdx)}.</strong>{' '}
                          {language === 'hi' && q.optionsHi?.[optIdx] ? q.optionsHi[optIdx] : opt}
                        </span>
                        {isCorrectOpt && <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">CORRECT ANSWER</span>}
                        {isUserChoice && !isCorrectOpt && <span className="text-[10px] font-bold text-rose-600">YOUR CHOICE</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed border border-slate-200/60 dark:border-slate-700/60">
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-[11px] uppercase tracking-wider text-emerald-600">
                    Step-by-Step Explanation:
                  </div>
                  <div>
                    {language === 'hi' && q.explanationHi ? q.explanationHi : q.explanation}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-2">
                    <span>Source: {q.source}</span>
                    <span>•</span>
                    <span className="font-semibold text-emerald-600">{q.sourceType}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Add to Error Notebook */}
      {selectedErrorQ && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {t('Log Question to Error Notebook', 'त्रुटि नोटबुक में दर्ज करें')}
            </h3>

            <p className="text-xs text-slate-500 line-clamp-2">
              {selectedErrorQ.question}
            </p>

            {/* Select Mistake Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t('Classify Mistake Reason:', 'गलती का प्रकार चुनें:')}
              </label>
              <select
                value={mistakeType}
                onChange={e => setMistakeType(e.target.value as MistakeType)}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
              >
                {mistakeTypes.map(m => (
                  <option key={m} value={m}>{m} Mistake</option>
                ))}
              </select>
            </div>

            {/* User Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t('Personal Learning Note / Remedy:', 'व्यक्तिगत सुधार नोट:')}
              </label>
              <textarea
                value={errorNotes}
                onChange={e => setErrorNotes(e.target.value)}
                placeholder="Why did I get this wrong? What concept must I revise?"
                rows={3}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setSelectedErrorQ(null)}
                className="flex-1 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveToErrorNotebook}
                className="flex-1 py-2 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Save to Error Notebook
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
