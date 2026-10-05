import React, { useState } from 'react';
import { 
  Bookmark, 
  HelpCircle, 
  Calculator, 
  Sliders, 
  BookOpen, 
  Trash2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { allQuestions } from '../data/questions';
import { formulaData } from '../data/formulas/formulaData';
import { shortcutData } from '../data/shortcuts/shortcutData';
import { booksData } from '../data/books/booksData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface BookmarksPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const BookmarksPage: React.FC<BookmarksPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { bookmarks, toggleBookmark } = useUserData();
  const [filterType, setFilterType] = useState<'all' | 'question' | 'formula' | 'shortcut' | 'book'>('all');

  // Match bookmarked items
  const bookmarkedQuestions = allQuestions.filter(q => bookmarks.includes(q.id));
  const bookmarkedFormulas = formulaData.filter(f => bookmarks.includes(f.id));
  const bookmarkedShortcuts = shortcutData.filter(s => bookmarks.includes(s.id));
  const bookmarkedBooks = booksData.filter(b => bookmarks.includes(b.id));

  const totalCount = bookmarks.length;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Saved Bookmarks', labelHi: 'सुरक्षित बुकमार्क', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <Bookmark className="w-3.5 h-3.5 fill-current" />
          <span>{t('PERSONAL REVISION COLLECTION', 'व्यक्तिगत रिवीजन संग्रह')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Saved Items & Quick Bookmarks', 'सुरक्षित प्रश्न, सूत्र एवं शॉर्टकट्स')}
        </h1>
        <p className="text-amber-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Rapid access to all your starred questions, high-yield formulas, rapid shortcut tricks, and standard reference titles.',
            'आपके द्वारा तारांकित किए गए महत्वपूर्ण प्रश्न, सूत्र और शॉर्टकट्स का त्वरित संकलन।'
          )}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 rounded-xl transition-all ${
            filterType === 'all'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          {t('All Items', 'सभी सामग्री')} ({totalCount})
        </button>

        <button
          onClick={() => setFilterType('question')}
          className={`px-3 py-1.5 rounded-xl transition-all ${
            filterType === 'question'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          {t('Questions', 'प्रश्न')} ({bookmarkedQuestions.length})
        </button>

        <button
          onClick={() => setFilterType('formula')}
          className={`px-3 py-1.5 rounded-xl transition-all ${
            filterType === 'formula'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          {t('Formulas', 'सूत्र')} ({bookmarkedFormulas.length})
        </button>

        <button
          onClick={() => setFilterType('shortcut')}
          className={`px-3 py-1.5 rounded-xl transition-all ${
            filterType === 'shortcut'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          {t('Shortcuts', 'शॉर्टकट्स')} ({bookmarkedShortcuts.length})
        </button>
      </div>

      {/* Bookmarks List */}
      <div className="space-y-4">
        {/* Bookmarked Questions */}
        {(filterType === 'all' || filterType === 'question') && bookmarkedQuestions.map(q => (
          <div
            key={q.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded-md font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                Question • {q.exam.toUpperCase()} • {q.subject}
              </span>
              <button
                onClick={() => toggleBookmark(q.id)}
                className="text-slate-400 hover:text-rose-500 p-1"
                title={t('Remove from bookmarks', 'बुकमार्क से हटाएं')}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {language === 'hi' && q.questionHi ? q.questionHi : q.question}
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">{q.source}</span>
              <button
                onClick={() => onNavigate('question-bank')}
                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>{t('View in Question Bank', 'प्रश्न बैंक में देखें')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}

        {/* Bookmarked Formulas */}
        {(filterType === 'all' || filterType === 'formula') && bookmarkedFormulas.map(f => (
          <div
            key={f.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded-md font-bold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Formula • {f.subject} • {f.topic}
              </span>
              <button
                onClick={() => toggleBookmark(f.id)}
                className="text-slate-400 hover:text-rose-500 p-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{f.name}</h3>
            <div className="p-3 rounded-xl bg-slate-900 text-blue-300 font-mono text-xs">
              {f.formula}
            </div>
          </div>
        ))}

        {/* Bookmarked Shortcuts */}
        {(filterType === 'all' || filterType === 'shortcut') && bookmarkedShortcuts.map(s => (
          <div
            key={s.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded-md font-bold bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Shortcut • {s.subject} • {s.topic}
              </span>
              <button
                onClick={() => toggleBookmark(s.id)}
                className="text-slate-400 hover:text-rose-500 p-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{s.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
              {s.shortcutMethod}
            </p>
          </div>
        ))}

        {totalCount === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <Bookmark className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
              {t('No items bookmarked yet', 'अभी तक कोई सामग्री बुकमार्क नहीं की गई है')}
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              {t(
                'Click the bookmark icon on any question, formula, or shortcut across the platform to save it here for rapid last-minute revision.',
                'रिवीजन हेतु किसी भी प्रश्न या सूत्र पर बुकमार्क आइकन दबाकर सहेजें।'
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
