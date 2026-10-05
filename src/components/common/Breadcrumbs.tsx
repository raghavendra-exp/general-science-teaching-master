import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  labelHi?: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onHomeClick: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onHomeClick }) => {
  const { language } = useLanguage();

  return (
    <nav 
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-1.5 py-2 px-3 text-xs md:text-sm text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-lg border border-slate-200/80 dark:border-slate-800 mb-4 shadow-xs"
    >
      <button
        onClick={onHomeClick}
        className="inline-flex items-center gap-1 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-hidden"
        title="Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{language === 'hi' ? 'होम' : 'Home'}</span>
      </button>

      {items.map((item, index) => {
        const label = language === 'hi' && item.labelHi ? item.labelHi : item.label;
        const isLast = index === items.length - 1 || item.active;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
            {isLast || !item.onClick ? (
              <span className="font-semibold text-emerald-700 dark:text-emerald-400 truncate max-w-[200px] md:max-w-none">
                {label}
              </span>
            ) : (
              <button
                onClick={item.onClick}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors truncate max-w-[150px] md:max-w-none focus:outline-hidden"
              >
                {label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
