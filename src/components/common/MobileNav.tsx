import React from 'react';
import { Home, Layers, CheckCircle, BookOpen, BarChart2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MobileNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ currentPage, onNavigate }) => {
  const { language } = useLanguage();

  const navItems = [
    { id: 'home', label: 'Home', labelHi: 'होम', icon: Home },
    { id: 'exams-directory', label: 'Exams', labelHi: 'परीक्षाएं', icon: Layers },
    { id: 'practice-hub', label: 'Practice', labelHi: 'अभ्यास', icon: CheckCircle },
    { id: 'books-library', label: 'Books', labelHi: 'पुस्तकें', icon: BookOpen },
    { id: 'analytics-dashboard', label: 'Progress', labelHi: 'प्रगति', icon: BarChart2 }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 pb-safe shadow-lg">
      <div className="grid grid-cols-5 h-14">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          const label = language === 'hi' ? item.labelHi : item.label;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive 
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] tracking-tight">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
