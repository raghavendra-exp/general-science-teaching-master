import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  Filter, 
  CheckCircle, 
  Award, 
  Bookmark, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles,
  BookOpen,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { Question, SourceType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { allQuestions } from '../data/questions';
import { allExams } from '../data/exams';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface QuestionBankPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialFilter?: {
    exam?: string;
    sourceType?: SourceType;
  };
}

export const QuestionBankPage: React.FC<QuestionBankPageProps> = ({ 
  onNavigate, 
  initialFilter 
}) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark, addToErrorNotebook } = useUserData();

  // Filters
  const [selectedExam, setSelectedExam] = useState<string>(initialFilter?.exam || 'all');
  const [selectedSourceType, setSelectedSourceType] = useState<string>(initialFilter?.sourceType || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Interactive answer reveals per question
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [questionLang, setQuestionLang] = useState<Record<string, 'en' | 'hi'>>({});

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 12;

  // Extract distinct subjects
  const availableSubjects = useMemo(() => {
    return ['all', ...Array.from(new Set(allQuestions.map(q => q.subject))).sort()];
  }, []);

  // Filtered dataset
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      if (selectedExam !== 'all' && q.exam.toLowerCase() !== selectedExam.toLowerCase()) return false;
      if (selectedSourceType !== 'all' && q.sourceType !== selectedSourceType) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      if (selectedSubject !== 'all' && q.subject !== selectedSubject) return false;
      if (searchQuery.trim()) {
        const qStr = searchQuery.toLowerCase();
        const inQ = q.question.toLowerCase().includes(qStr);
        const inQHi = q.questionHi?.toLowerCase().includes(qStr);
        const inTopic = q.topic.toLowerCase().includes(qStr);
        const inExp = q.explanation.toLowerCase().includes(qStr);
        if (!inQ && !inQHi && !inTopic && !inExp) return false;
      }
      return true;
    });
  }, [selectedExam, selectedSourceType, selectedDifficulty, selectedSubject, searchQuery]);

  // Paginated slice
  const totalPages = Math.ceil(filteredQuestions.length / pageSize) || 1;
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredQuestions.slice(start, start + pageSize);
  }, [filteredQuestions, currentPage]);

  const toggleAnswer = (id: string) => {
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCardLanguage = (id: string) => {
    setQuestionLang(prev => ({
      ...prev,
      [id]: prev[id] === 'hi' ? 'en' : 'hi'
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Question Bank & PYQ Database', labelHi: 'प्रश्न बैंक एवं विगत वर्ष प्रश्न', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('CURRICULUM-ALIGNED MULTI-EXAM REPOSITORY', 'पाठ्यक्रम-आधारित बहु-परीक्षा प्रश्न भंडार')}</span>
          </div>

          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ✓ {filteredQuestions.length} {t('Questions Found', 'प्रश्न उपलब्ध')}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Master Question Bank & Verified PYQs', 'महा प्रश्न बैंक एवं सत्यापित विगत वर्ष प्रश्न')}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          {t(
            'Explore high-density questions strictly categorized into VERIFIED PYQ, ORIGINAL, and PYQ-STYLE. Every question contains complete syllabus mapping, official keys, and step-by-step verified explanations.',
            'सत्यापित विगत वर्ष के प्रश्न, मूल मॉडल प्रश्न और परीक्षा-उन्मुख अभ्यास प्रश्न। प्रत्येक प्रश्न के साथ विस्तृत व्याख्या और स्रोत का उल्लेख।'
          )}
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        {/* Row 1: Search & Exam selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Exam Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              {t('Examination', 'परीक्षा')}
            </label>
            <select
              value={selectedExam}
              onChange={(e) => { setSelectedExam(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 font-medium"
            >
              <option value="all">{t('All Examinations', 'सभी परीक्षाएं')}</option>
              {allExams.map(ex => (
                <option key={ex.id} value={ex.id}>{ex.name}</option>
              ))}
            </select>
          </div>

          {/* Source Type Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              {t('Source Classification', 'स्रोत वर्गीकरण')}
            </label>
            <select
              value={selectedSourceType}
              onChange={(e) => { setSelectedSourceType(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 font-medium"
            >
              <option value="all">{t('All Sources', 'सभी स्रोत')}</option>
              <option value="VERIFIED PYQ">🏆 VERIFIED PYQ (आधिकारिक प्रश्न)</option>
              <option value="ORIGINAL">✨ ORIGINAL (मॉडल प्रश्न)</option>
              <option value="PYQ-STYLE">🎯 PYQ-STYLE (परीक्षा समरूप)</option>
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              {t('Subject Discipline', 'विषय')}
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => { setSelectedSubject(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 font-medium"
            >
              {availableSubjects.map(sub => (
                <option key={sub} value={sub}>{sub === 'all' ? t('All Subjects', 'सभी विषय') : sub}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              {t('Difficulty Level', 'कठिनाई स्तर')}
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => { setSelectedDifficulty(e.target.value); setCurrentPage(1); }}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 font-medium"
            >
              <option value="all">{t('All Difficulties', 'सभी स्तर')}</option>
              <option value="Easy">Easy (सरल)</option>
              <option value="Medium">Medium (मध्यम)</option>
              <option value="Hard">Hard (कठिन)</option>
            </select>
          </div>
        </div>

        {/* Row 2: Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            placeholder={t('Search inside questions, topics, formulas, or explanations...', 'प्रश्न, विषय या व्याख्या में खोजें...')}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {paginatedQuestions.map((q, idx) => {
          const globalIdx = (currentPage - 1) * pageSize + idx + 1;
          const isRevealed = revealedAnswers[q.id];
          const lang = questionLang[q.id] || language;
          const bookmarked = isBookmarked(q.id);

          return (
            <div 
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4"
            >
              {/* Question Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-slate-500 dark:text-slate-400">
                    Q{globalIdx}.
                  </span>

                  {/* Exam Badge */}
                  <span className="px-2.5 py-0.5 rounded-md font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/50">
                    {q.exam.toUpperCase()}
                  </span>

                  {/* Subject & Topic */}
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {q.subject} • <span className="font-normal text-slate-500">{q.topic}</span>
                  </span>

                  {/* Difficulty */}
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    q.difficulty === 'Easy'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : q.difficulty === 'Medium'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                  }`}>
                    {q.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Source Type Tag */}
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wide border ${
                    q.sourceType === 'VERIFIED PYQ'
                      ? 'bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800'
                      : q.sourceType === 'ORIGINAL'
                      ? 'bg-purple-50 text-purple-700 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800'
                      : 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800'
                  }`}>
                    {q.sourceType} {q.year ? `(${q.year})` : ''}
                  </span>

                  {/* Language Switcher for this card */}
                  {q.questionHi && (
                    <button
                      onClick={() => toggleCardLanguage(q.id)}
                      className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600"
                    >
                      {lang === 'hi' ? 'EN' : 'हिन्दी'}
                    </button>
                  )}

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      bookmarked 
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60' 
                        : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={bookmarked ? t('Remove bookmark', 'बुकमार्क हटाएं') : t('Bookmark question', 'प्रश्न सहेजें')}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                {lang === 'hi' && q.questionHi ? q.questionHi : q.question}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt, optIdx) => {
                  const optText = (lang === 'hi' && q.optionsHi && q.optionsHi[optIdx]) ? q.optionsHi[optIdx] : opt;
                  const isCorrectOption = isRevealed && optIdx === q.answer;

                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-xl border text-xs font-medium flex items-start gap-2.5 transition-all ${
                        isCorrectOption
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                          : 'bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isCorrectOption
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="leading-snug">{optText}</span>
                    </div>
                  );
                })}
              </div>

              {/* Explanation & Action Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleAnswer(q.id)}
                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{isRevealed ? t('Hide Explanation', 'व्याख्या छिपाएं') : t('Show Official Answer & Explanation', 'आधिकारिक उत्तर व व्याख्या देखें')}</span>
                  </button>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <span className="text-slate-400 text-[11px]">
                    {t('Source:', 'स्रोत:')} {q.source}
                  </span>
                </div>

                <button
                  onClick={() => addToErrorNotebook(q, (q.answer + 1) % 4, 'Conceptual')}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{t('Log to Error Notebook', 'त्रुटि नोटबुक में जोड़ें')}</span>
                </button>
              </div>

              {/* Revealed Explanation Box */}
              {isRevealed && (
                <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-indigo-900 dark:text-indigo-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {t('Correct Answer:', 'सही उत्तर:')} Option ({String.fromCharCode(65 + q.answer)})
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    {lang === 'hi' && q.explanationHi ? q.explanationHi : q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
              {t('No questions matched your filter criteria', 'चयनित फिल्टर के अनुसार कोई प्रश्न नहीं मिला')}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {t('Try broadening your exam, subject or source filters.', 'कृपया विषय अथवा परीक्षा फिल्टर में बदलाव करें।')}
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('Previous', 'पिछला')}</span>
          </button>

          <span className="font-semibold text-slate-600 dark:text-slate-400">
            {t('Page', 'पृष्ठ')} {currentPage} {t('of', 'का')} {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
          >
            <span>{t('Next', 'अगला')}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
