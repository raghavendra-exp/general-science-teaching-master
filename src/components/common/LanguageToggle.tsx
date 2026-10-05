import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all shadow-xs"
      title={language === 'en' ? 'Switch to Hindi (हिंदी में बदलें)' : 'Switch to English'}
      aria-label="Toggle Language"
    >
      <Languages className="w-3.5 h-3.5" />
      <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
    </button>
  );
};
