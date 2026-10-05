import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, GraduationCap, Bell, HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { allExams } from '../../data/exams';
import { allQuestions } from '../../data/questions';
import { ncertCurriculum } from '../../data/ncert/ncertCurriculum';
import { booksData } from '../../data/books/booksData';
import { notificationsData } from '../../data/notifications/notificationsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled externally if listener is global
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const qClean = query.toLowerCase().trim();

  // Search Results
  const matchedExams = qClean 
    ? allExams.filter(e => 
        e.name.toLowerCase().includes(qClean) || 
        e.nameHi.includes(qClean) || 
        e.fullName.toLowerCase().includes(qClean)
      ).slice(0, 4)
    : [];

  const matchedQuestions = qClean
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(qClean) || 
        (q.questionHi && q.questionHi.includes(qClean)) ||
        q.topic.toLowerCase().includes(qClean) ||
        q.subject.toLowerCase().includes(qClean)
      ).slice(0, 4)
    : [];

  const matchedNcert = qClean
    ? ncertCurriculum.filter(n =>
        n.chapterName.toLowerCase().includes(qClean) ||
        n.chapterNameHi.includes(qClean) ||
        n.keyConcepts.some(c => c.toLowerCase().includes(qClean))
      ).slice(0, 3)
    : [];

  const matchedBooks = qClean
    ? booksData.filter(b =>
        b.title.toLowerCase().includes(qClean) ||
        b.author.toLowerCase().includes(qClean)
      ).slice(0, 3)
    : [];

  const matchedNotifs = qClean
    ? notificationsData.filter(n =>
        n.headline.toLowerCase().includes(qClean) ||
        n.headlineHi.includes(qClean) ||
        n.examName.toLowerCase().includes(qClean)
      ).slice(0, 3)
    : [];

  const hasResults = matchedExams.length > 0 || matchedQuestions.length > 0 || matchedNcert.length > 0 || matchedBooks.length > 0 || matchedNotifs.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh] mt-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={language === 'hi' ? 'परीक्षा, विषय, एनसीईआरटी, पुस्तकें या प्रश्न खोजें...' : 'Search exams, subjects, NCERT, books, questions...'}
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-base focus:outline-hidden"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-4 scrollbar-thin">
          {!qClean && (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400">
              <Search className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700" />
              <p className="text-sm font-medium">
                {language === 'hi' ? 'त्वरित खोज हेतु टाइप करना प्रारंभ करें' : 'Type to search across exams, questions, NCERT and books'}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {['CTET', 'CSIR NET', 'IIT JAM', 'NEP 2020', 'Piaget', 'Photosynthesis', 'SSC CGL'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {qClean && !hasResults && (
            <div className="text-center py-8 text-slate-500">
              <p>{language === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No matching results found.'}</p>
            </div>
          )}

          {/* Exams Category */}
          {matchedExams.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                {language === 'hi' ? 'परीक्षाएं (Exams)' : 'Examinations'}
              </div>
              <div className="space-y-1">
                {matchedExams.map(exam => (
                  <button
                    key={exam.id}
                    onClick={() => {
                      onNavigate('exam-detail', { examId: exam.id });
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                        {exam.name.substring(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                          {language === 'hi' ? exam.nameHi : exam.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {exam.conductingBody} • {exam.category.replace('_', ' ').toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Questions Category */}
          {matchedQuestions.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                {language === 'hi' ? 'प्रश्न बैंक (Questions)' : 'Question Bank'}
              </div>
              <div className="space-y-1">
                {matchedQuestions.map(q => (
                  <button
                    key={q.id}
                    onClick={() => {
                      onNavigate('question-bank', { query: q.topic });
                      onClose();
                    }}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                  >
                    <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {language === 'hi' && q.questionHi ? q.questionHi : q.question}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {q.subject} • {q.topic} • <span className="font-semibold text-emerald-600">{q.sourceType}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* NCERT Chapters Category */}
          {matchedNcert.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                {language === 'hi' ? 'एनसीईआरटी अध्याय (NCERT)' : 'NCERT Knowledge Base'}
              </div>
              <div className="space-y-1">
                {matchedNcert.map((nc, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onNavigate('ncert-master', { subject: nc.subject });
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          Class {nc.classLevel} {nc.subject} Ch {nc.chapterNumber}: {language === 'hi' ? nc.chapterNameHi : nc.chapterName}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {nc.keyConcepts.join(', ')}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-600 font-medium shrink-0">
                      {nc.linkedPyqCount} PYQs
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Books Category */}
          {matchedBooks.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                {language === 'hi' ? 'प्रमाणिक पुस्तकें (Books)' : 'Book Library'}
              </div>
              <div className="space-y-1">
                {matchedBooks.map(b => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onNavigate('books-library');
                      onClose();
                    }}
                    className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-purple-500 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                        {b.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {b.author} • {b.publisher} ({b.edition})
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Notifications Category */}
          {matchedNotifs.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-1">
                {language === 'hi' ? 'नवीनतम सूचनाएं (Notifications)' : 'Live Notifications'}
              </div>
              <div className="space-y-1">
                {matchedNotifs.map(n => (
                  <button
                    key={n.id}
                    onClick={() => {
                      onNavigate('notifications-tracker');
                      onClose();
                    }}
                    className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
                  >
                    <Bell className="w-4 h-4 text-rose-500 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                        {language === 'hi' ? n.headlineHi : n.headline}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {n.examName} • {n.date}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
          <span>Search verified syllabus, books, pyqs & official notifications</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
