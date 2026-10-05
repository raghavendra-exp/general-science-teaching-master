import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  HelpCircle, 
  X, 
  Maximize, 
  Minimize, 
  Pause, 
  Play, 
  Flag, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { Question, QuestionStatus, TestSession } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { getExamById } from '../data/exams';
import { TestResultAnalytics } from '../components/practice/TestResultAnalytics';

interface MockTestActivePageProps {
  examId: string;
  questions: Question[];
  durationMinutes: number;
  onExit: () => void;
}

export const MockTestActivePage: React.FC<MockTestActivePageProps> = ({
  examId,
  questions,
  durationMinutes,
  onExit
}) => {
  const { language, t } = useLanguage();
  const { saveCompletedTest } = useUserData();
  const exam = getExamById(examId);

  // Test state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [questionStatus, setQuestionStatus] = useState<Record<number, QuestionStatus>>(() => {
    const initial: Record<number, QuestionStatus> = {};
    questions.forEach((_, idx) => {
      initial[idx] = idx === 0 ? 'not_answered' : 'not_visited';
    });
    return initial;
  });

  const [timeSpent, setTimeSpent] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(durationMinutes * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [completedSession, setCompletedSession] = useState<TestSession | null>(null);
  const [qLang, setQLang] = useState<'en' | 'hi'>('en');

  // Timer interval
  useEffect(() => {
    if (isSubmitted || isPaused) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });

      // Track time spent on current question
      setTimeSpent(prev => ({
        ...prev,
        [currentIndex]: (prev[currentIndex] || 0) + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isSubmitted, isPaused]);

  const currentQ = questions[currentIndex];

  // Options handling
  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleClearResponse = () => {
    if (isSubmitted) return;
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
    setQuestionStatus(prev => ({ ...prev, [currentIndex]: 'not_answered' }));
  };

  const handleMarkForReviewAndNext = () => {
    const isAnswered = userAnswers[currentIndex] !== undefined;
    setQuestionStatus(prev => ({
      ...prev,
      [currentIndex]: isAnswered ? 'answered_marked' : 'marked'
    }));
    goToNextQuestion();
  };

  const handleSaveAndNext = () => {
    const isAnswered = userAnswers[currentIndex] !== undefined;
    setQuestionStatus(prev => ({
      ...prev,
      [currentIndex]: isAnswered ? 'answered' : 'not_answered'
    }));
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (questionStatus[nextIdx] === 'not_visited') {
        setQuestionStatus(prev => ({ ...prev, [nextIdx]: 'not_answered' }));
      }
    }
  };

  const goToPrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    setCurrentIndex(idx);
    if (questionStatus[idx] === 'not_visited') {
      setQuestionStatus(prev => ({ ...prev, [idx]: 'not_answered' }));
    }
  };

  // Submit test
  const handleSubmitTest = () => {
    setShowSubmitModal(false);
    setIsSubmitted(true);

    const session: TestSession = {
      testId: `test-${Date.now()}`,
      title: `${exam ? exam.name : 'Competitive'} Mock Test`,
      examId,
      questions,
      userAnswers,
      status: questionStatus,
      timeSpentPerQuestion: timeSpent,
      currentQuestionIndex: currentIndex,
      durationMinutes,
      timeRemainingSeconds: timeRemaining,
      isSubmitted: true,
      submittedAt: new Date().toISOString()
    };

    setCompletedSession(session);
    saveCompletedTest(session);
  };

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  // Status counts
  let answeredCount = 0;
  let markedCount = 0;
  let answeredMarkedCount = 0;
  let notAnsweredCount = 0;
  let notVisitedCount = 0;

  questions.forEach((_, idx) => {
    const s = questionStatus[idx] || 'not_visited';
    if (s === 'answered') answeredCount++;
    else if (s === 'marked') markedCount++;
    else if (s === 'answered_marked') answeredMarkedCount++;
    else if (s === 'not_answered') notAnsweredCount++;
    else notVisitedCount++;
  });

  if (isSubmitted && completedSession) {
    return (
      <TestResultAnalytics
        session={completedSession}
        onRetake={() => {
          setIsSubmitted(false);
          setCompletedSession(null);
          setTimeRemaining(durationMinutes * 60);
          setUserAnswers({});
          setCurrentIndex(0);
          const fresh: Record<number, QuestionStatus> = {};
          questions.forEach((_, i) => { fresh[i] = i === 0 ? 'not_answered' : 'not_visited'; });
          setQuestionStatus(fresh);
        }}
        onExit={onExit}
      />
    );
  }

  const isLowTime = timeRemaining < 300; // less than 5 min

  return (
    <div className="fixed inset-0 z-50 bg-slate-100 dark:bg-slate-950 flex flex-col overflow-hidden text-slate-900 dark:text-slate-100">
      {/* Top Bar (CBT Header) */}
      <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
            {exam ? (language === 'hi' ? exam.nameHi : exam.name) : 'CBT Exam Simulator'}
          </div>
          <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
            {questions.length} Questions • {durationMinutes} Mins
          </span>
        </div>

        {/* Center: Live Sticky Countdown Timer */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold border transition-colors ${
          isLowTime 
            ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 border-rose-300 dark:border-rose-800 animate-pulse' 
            : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        }`}>
          <Clock className="w-4 h-4" />
          <span>{formatTime(timeRemaining)}</span>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2">
          {/* Pause / Resume */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isPaused ? 'Resume Test' : 'Pause Test'}
          >
            {isPaused ? <Play className="w-4 h-4 text-emerald-500" /> : <Pause className="w-4 h-4" />}
          </button>

          {/* Language Toggle for this question */}
          <button
            onClick={() => setQLang(qLang === 'en' ? 'hi' : 'en')}
            className="px-2 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
          >
            {qLang === 'en' ? 'हिंदी' : 'English'}
          </button>

          {/* Submit Test Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            {t('Submit Test', 'सबमिट करें')}
          </button>
        </div>
      </header>

      {/* Main Examination Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Question Area */}
        <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900/60 overflow-y-auto p-4 sm:p-6 scrollbar-thin">
          {currentQ ? (
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-between space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
                {/* Question Info Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                      {currentIndex + 1}
                    </span>
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
                      {currentQ.subject} • {currentQ.topic}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className="text-emerald-600">+1.0 Mark</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-rose-500">-0.25 Mark</span>
                  </div>
                </div>

                {/* Question Text */}
                <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {qLang === 'hi' && currentQ.questionHi ? currentQ.questionHi : currentQ.question}
                </div>

                {/* Options List */}
                <div className="space-y-2.5 pt-2">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = userAnswers[currentIndex] === optIdx;
                    const optText = qLang === 'hi' && currentQ.optionsHi?.[optIdx] 
                      ? currentQ.optionsHi[optIdx] 
                      : opt;

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'border-slate-300 dark:border-slate-600 text-slate-500'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <div className="text-xs sm:text-sm font-medium leading-relaxed">
                          {optText}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClearResponse}
                    disabled={userAnswers[currentIndex] === undefined}
                    className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors"
                  >
                    {t('Clear Response', 'उत्तर हटाएं')}
                  </button>

                  <button
                    onClick={handleMarkForReviewAndNext}
                    className="px-3 py-2 text-xs font-semibold rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 transition-colors flex items-center gap-1.5"
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{t('Mark for Review & Next', 'समीक्षा हेतु चिन्हित करें')}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrevQuestion}
                    disabled={currentIndex === 0}
                    className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 disabled:opacity-40 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t('Previous', 'पिछला')}</span>
                  </button>

                  <button
                    onClick={handleSaveAndNext}
                    className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <span>{t('Save & Next', 'सेव करें एवं आगे बढ़ें')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Right: Question Status Palette */}
        <aside className="w-72 sm:w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shrink-0 hidden md:flex">
          {/* Palette Legend */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 text-[11px] space-y-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[10px]">
              Question Palette Legend
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center">{answeredCount}</span>
                <span className="text-slate-600 dark:text-slate-400">Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center">{markedCount}</span>
                <span className="text-slate-600 dark:text-slate-400">Marked</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center">{notAnsweredCount}</span>
                <span className="text-slate-600 dark:text-slate-400">Not Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[9px] font-bold flex items-center justify-center">{notVisitedCount}</span>
                <span className="text-slate-600 dark:text-slate-400">Not Visited</span>
              </div>
            </div>
          </div>

          {/* Question Grid Buttons */}
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => {
                const status = questionStatus[idx] || 'not_visited';
                const isCurrent = currentIndex === idx;

                let bgClass = 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';
                if (status === 'answered') bgClass = 'bg-emerald-600 text-white';
                else if (status === 'marked') bgClass = 'bg-purple-600 text-white';
                else if (status === 'answered_marked') bgClass = 'bg-purple-700 text-white ring-2 ring-emerald-400';
                else if (status === 'not_answered') bgClass = 'bg-rose-600 text-white';

                return (
                  <button
                    key={idx}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${bgClass} ${
                      isCurrent ? 'ring-2 ring-blue-500 scale-105 shadow-md' : 'hover:opacity-90'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Palette Footer Submit */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              {t('Final Submit Test', 'अंतिम टेस्ट सबमिट करें')}
            </button>
          </div>
        </aside>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                {t('Confirm Test Submission', 'टेस्ट सबमिशन की पुष्टि')}
              </h3>
              <button onClick={() => setShowSubmitModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200">
                <div className="font-bold text-base">{answeredCount}</div>
                <div>Questions Answered</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-200">
                <div className="font-bold text-base">{markedCount + answeredMarkedCount}</div>
                <div>Marked for Review</div>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200">
                <div className="font-bold text-base">{notAnsweredCount}</div>
                <div>Not Answered</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <div className="font-bold text-base">{notVisitedCount}</div>
                <div>Not Visited</div>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              {t('Are you sure you want to conclude the test? You will immediately receive your score, accuracy %, and section analysis.', 'क्या आप टेस्ट समाप्त करना चाहते हैं? सबमिट करते ही आपका स्कोर व विस्तृत विश्लेषण उपलब्ध होगा।')}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                {t('Resume Test', 'जारी रखें')}
              </button>
              <button
                onClick={handleSubmitTest}
                className="flex-1 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
              >
                {t('Yes, Submit Now', 'हाँ, सबमिट करें')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
