import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { booksData } from '../data/books/booksData';
import { allExams } from '../data/exams';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface BookLibraryPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const BookLibraryPage: React.FC<BookLibraryPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark } = useUserData();

  const [selectedExam, setSelectedExam] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Comprehensive'];

  const filteredBooks = booksData.filter(book => {
    if (selectedExam !== 'all' && !book.exams.includes(selectedExam)) return false;
    if (selectedLevel !== 'all' && book.recommendedLevel !== selectedLevel) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = book.title.toLowerCase().includes(q);
      const inAuthor = book.author.toLowerCase().includes(q);
      const inSubject = book.subject.toLowerCase().includes(q);
      const inPub = book.publisher.toLowerCase().includes(q);
      if (!inTitle && !inAuthor && !inSubject && !inPub) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Books Library', labelHi: 'प्रमाणिक पुस्तक भंडार', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-900/40">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{t('100% LEGITIMATE PUBLISHERS & OFFICIAL SOURCES', '100% प्रमाणिक प्रकाशक व आधिकारिक स्रोत')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Curated Reference Books & PYQ Compendiums', 'अनुशंसित पुस्तकें एवं सॉल्व्ड पेपर्स संग्रह')}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {t(
            'Verified standard reference titles from Arihant, Disha, Kiran, Pathfinder, and Pearson. Strictly legitimate links to authorized publisher stores without pirated PDFs.',
            'अरिहंत, दिशा, किरण, पाथफाइंडर और मानक प्रकाशकों की आधिकारिक पुस्तकें। कॉपीराइट-सुरक्षित व प्रमाणिक पोर्टल।'
          )}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Exam Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {t('Filter by Exam', 'परीक्षा अनुसार चुनें')}
            </label>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
            >
              <option value="all">{t('All Examinations', 'सभी परीक्षाएं')}</option>
              {allExams.map(ex => (
                <option key={ex.id} value={ex.id}>{ex.name}</option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {t('Preparation Level', 'तैयारी का स्तर')}
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
            >
              {levels.map(lvl => (
                <option key={lvl} value={lvl}>{lvl === 'all' ? t('All Levels', 'सभी स्तर') : lvl}</option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {t('Search by Title / Author', 'शीर्षक या लेखक द्वारा खोजें')}
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Himanshi Singh, Arihant...', 'लेखक या पुस्तक का नाम...')}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBooks.map(book => {
          const bookmarked = isBookmarked(book.id);

          return (
            <div
              key={book.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/40">
                      {book.recommendedLevel}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {book.title}
                    </h2>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {t('By', 'द्वारा')} <span className="font-semibold text-slate-700 dark:text-slate-300">{book.author}</span> • {book.publisher} ({book.edition})
                    </div>
                  </div>

                  <button
                    onClick={() => toggleBookmark(book.id)}
                    className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                      bookmarked 
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60' 
                        : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={bookmarked ? t('Remove bookmark', 'बुकमार्क हटाएं') : t('Save bookmark', 'बुकमार्क सहेजें')}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">{t('Syllabus Coverage: ', 'पाठ्यक्रम कवरेज: ')}</strong>
                    <span className="text-slate-600 dark:text-slate-400">{book.syllabusCoverage}</span>
                  </div>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">{t('PYQ Content: ', 'विगत वर्ष प्रश्न: ')}</strong>
                    <span className="text-slate-600 dark:text-slate-400">{book.pyqCoverage}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {book.exams.map((exId, exIdx) => (
                    <span
                      key={exIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-semibold uppercase"
                    >
                      {exId}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">
                  {t('Source:', 'स्रोत:')} {book.storeType}
                </span>

                <a
                  href={book.legitimateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{t('View at Official Store', 'आधिकारिक पोर्टल पर देखें')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
