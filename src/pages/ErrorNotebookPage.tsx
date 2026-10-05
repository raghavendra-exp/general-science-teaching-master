import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  Trash2, 
  RotateCcw, 
  Filter, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { MistakeType, Question } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface ErrorNotebookPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onPracticeErrors: (questions: Question[]) => void;
}

export const ErrorNotebookPage: React.FC<ErrorNotebookPageProps> = ({
  onNavigate,
  onPracticeErrors
}) => {
  const { language, t } = useLanguage();
  const { 
    errorNotebook, 
    removeFromErrorNotebook, 
    resolveErrorItem, 
    updateMistakeType 
  } = useUserData();

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'unresolved' | 'resolved'>('unresolved');
  const [selectedMistakeType, setSelectedMistakeType] = useState<string>('all');

  const mistakeTypes: MistakeType[] = [
    'Conceptual',
    'Calculation',
    'Memory',
    'Misread',
    'Guess',
    'Careless',
    'Time Pressure'
  ];

  const filteredItems = errorNotebook.filter(item => {
    if (selectedFilter === 'unresolved' && item.isResolved) return false;
    if (selectedFilter === 'resolved' && !item.isResolved) return false;
    if (selectedMistakeType !== 'all' && item.mistakeType !== selectedMistakeType) return false;
    return true;
  });

  const handleStartErrorPractice = () => {
    const questionsToTest = filteredItems.map(item => item.question);
    if (questionsToTest.length > 0) {
      onPracticeErrors(questionsToTest);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Error Notebook', labelHi: 'त्रुटि नोटबुक', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-semibold mb-2">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{t('ACTIVE MISTAKE LOG & DIAGNOSTICS', 'सक्रिय त्रुटि विश्लेषण व सुधार')}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {t('Error Notebook & Mistake Classifier', 'त्रुटि नोटबुक एवं गलतियों का वर्गीकरण')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t('Classify exam mistakes into Conceptual, Calculation, Memory, or Careless errors. Retake errors until full mastery.', 'अपनी गलतियों को वैचारिक, गणनात्मक, विस्मृति अथवा जल्दबाजी में वर्गीकृत कर निरंतर रिवीजन करें।')}
            </p>
          </div>

          {filteredItems.length > 0 && (
            <button
              onClick={handleStartErrorPractice}
              className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 flex items-center justify-center gap-2 transition-all shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('Retake My Errors', 'मेरी त्रुटियों का टेस्ट दें')} ({filteredItems.length})</span>
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Status:</span>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs">
              {(['unresolved', 'resolved', 'all'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setSelectedFilter(st)}
                  className={`px-3 py-1 rounded-lg font-semibold capitalize transition-all ${
                    selectedFilter === st
                      ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {st === 'unresolved' ? `Needs Revision (${errorNotebook.filter(e => !e.isResolved).length})` : st}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Mistake Type:</span>
            <select
              value={selectedMistakeType}
              onChange={e => setSelectedMistakeType(e.target.value)}
              className="px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-800 dark:text-slate-200"
            >
              <option value="all">All Types</option>
              {mistakeTypes.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Error Items List */}
      {filteredItems.length > 0 ? (
        <div className="space-y-4">
          {filteredItems.map(item => {
            const q = item.question;
            return (
              <div
                key={item.questionId}
                className={`p-6 rounded-3xl border transition-all ${
                  item.isResolved
                    ? 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 opacity-70'
                    : 'bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-900/60 shadow-2xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                      {item.mistakeType} Error
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{q.subject} • {q.topic}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => resolveErrorItem(item.questionId)}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1 ${
                        item.isResolved
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 border-slate-200'
                          : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{item.isResolved ? 'Marked Resolved' : 'Mark as Mastered'}</span>
                    </button>

                    <button
                      onClick={() => removeFromErrorNotebook(item.questionId)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                      title="Delete from error notebook"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {language === 'hi' && q.questionHi ? q.questionHi : q.question}
                </p>

                {/* Answers Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200">
                    <div className="text-[10px] font-bold text-rose-600 uppercase">My Submitted Answer:</div>
                    <div className="font-semibold mt-0.5">
                      {item.userSelectedAnswer !== -1 && q.options[item.userSelectedAnswer] 
                        ? `${String.fromCharCode(65 + item.userSelectedAnswer)}. ${q.options[item.userSelectedAnswer]}`
                        : 'Unattempted'}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200">
                    <div className="text-[10px] font-bold text-emerald-600 uppercase">Official Correct Answer:</div>
                    <div className="font-semibold mt-0.5">
                      {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <div className="font-bold text-emerald-600 text-[11px] uppercase">Solution & Remediation:</div>
                  <div>{language === 'hi' && q.explanationHi ? q.explanationHi : q.explanation}</div>
                </div>

                {/* User Notes if present */}
                {item.userNotes && (
                  <div className="mt-2 text-xs text-slate-500 italic">
                    Note: "{item.userNotes}"
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">
            {t('Your Error Notebook is Clean!', 'आपकी त्रुटि नोटबुक पूरी तरह स्वच्छ है!')}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {t('Whenever you get a question incorrect in Practice or Mock Tests, log it here to track conceptual mistakes and schedule revision.', 'अभ्यास अथवा टेस्ट में होने वाली गलतियों को यहाँ दर्ज कर अपनी कमियों को दूर करें।')}
          </p>
          <button
            onClick={() => onNavigate('practice-hub')}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs"
          >
            Start Practice
          </button>
        </div>
      )}
    </div>
  );
};
