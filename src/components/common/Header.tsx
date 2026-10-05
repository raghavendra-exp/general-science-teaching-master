import React from 'react';
import { 
  GraduationCap, 
  Search, 
  Bookmark, 
  AlertCircle, 
  Menu, 
  X,
  Compass
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useUserData } from '../../context/UserDataContext';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  currentPage: string;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onNavigate,
  currentPage,
  isSidebarOpen,
  onToggleSidebar
}) => {
  const { language, t } = useLanguage();
  const { bookmarks, errorNotebook } = useUserData();

  const unresolvedErrorCount = errorNotebook.filter(e => !e.isResolved).length;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-2xs">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-6 h-16 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Left: Mobile Toggle & Brand */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Toggle Navigation Sidebar"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-hidden min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-500 p-0.5 shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[9px] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-xs sm:text-base tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                  {language === 'hi' ? 'परीक्षा भारत' : 'EXAMS INDIA'}
                </span>
                <span className="hidden sm:inline-block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-sm bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 shrink-0">
                  Master
                </span>
              </div>
              <span className="hidden md:inline-block text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                {language === 'hi' 
                  ? 'सामान्य • विज्ञान • शिक्षण परीक्षा महामंच'
                  : 'General • Science • Teaching Master Platform'}
              </span>
            </div>
          </button>
        </div>

        {/* Center: Search Button (Desktop & Tablet) */}
        <div className="flex-1 max-w-md mx-2 hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs group"
          >
            <span className="flex items-center gap-2 truncate">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" />
              <span className="truncate">{t('Search exams, syllabus, books, pyqs...', 'परीक्षा, पाठ्यक्रम, पुस्तकें या प्रश्न खोजें...')}</span>
            </span>
            <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md shrink-0">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Mobile search button */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Quick Eligibility Checker button (Desktop/Tablet) */}
          <button
            onClick={() => onNavigate('eligibility-checker')}
            className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
              currentPage === 'eligibility-checker'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
            }`}
            title="Check exam eligibility"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t('Eligibility', 'पात्रता जांच')}</span>
          </button>

          {/* Error Notebook Icon with Badge */}
          <button
            onClick={() => onNavigate('error-notebook')}
            className="relative p-1.5 sm:p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={t('Error Notebook', 'त्रुटि नोटबुक')}
            aria-label="Error Notebook"
          >
            <AlertCircle className="w-4 h-4 text-amber-500" />
            {unresolvedErrorCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[14px] h-[14px] px-0.5 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center animate-pulse">
                {unresolvedErrorCount}
              </span>
            )}
          </button>

          {/* Bookmarks Icon (Visible on sm and up) */}
          <button
            onClick={() => onNavigate('bookmarks')}
            className="hidden sm:inline-flex relative p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={t('Saved Bookmarks', 'सुरक्षित प्रश्न व नोट्स')}
            aria-label="Bookmarks"
          >
            <Bookmark className="w-4 h-4 text-blue-500" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[14px] h-[14px] px-0.5 rounded-full bg-blue-600 text-white text-[8px] font-bold flex items-center justify-center">
                {bookmarks.length}
              </span>
            )}
          </button>

          {/* Language Toggle */}
          <LanguageToggle />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
