import React, { useState } from 'react';
import { 
  Sliders, 
  Search, 
  Zap, 
  Clock, 
  CheckCircle, 
  Bookmark, 
  ArrowRight, 
  Lightbulb, 
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { shortcutData } from '../data/shortcuts/shortcutData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface ShortcutLabPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const ShortcutLabPage: React.FC<ShortcutLabPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark } = useUserData();

  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const subjects = ['all', ...Array.from(new Set(shortcutData.map(s => s.subject)))];

  const filteredShortcuts = shortcutData.filter(item => {
    if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchTopic = item.topic.toLowerCase().includes(q);
      const matchConcept = item.concept.toLowerCase().includes(q);
      if (!matchTitle && !matchTopic && !matchConcept) return false;
    }
    return true;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Shortcut Lab', labelHi: 'शॉर्टकट लैब', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>{t('RAPID CALCULATION & SPEED HACKS', 'फास्ट कैलकुलेशन व तीव्र समाधान तकनीकें')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Competitive Exam Shortcut Lab', 'प्रतियोगी परीक्षा शॉर्टकट लैब')}
        </h1>
        <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Master exam-proven tricks that eliminate tedious multi-line algebra. Standard 60-second problems solved in 5 to 10 seconds with verified logic.',
            'लंबे समीकरणों को छोड़कर 60 सेकंड के प्रश्नों को मात्र 5 से 10 सेकंड में हल करने वाली सत्यापित शॉर्टकट विधियां।'
          )}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Subject Pills */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {subjects.map(subj => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedSubject === subj
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {subj === 'all' ? t('All Subjects', 'सभी विषय') : subj}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search tricks, topics...', 'शॉर्टकट या विषय खोजें...')}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Shortcuts List */}
      <div className="space-y-5">
        {filteredShortcuts.map((item) => {
          const bookmarked = isBookmarked(item.id);
          const isCopied = copiedId === item.id;

          return (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                      {item.subject}
                    </span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      • {item.topic}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(item.id, `${item.title}\n\nShortcut: ${item.shortcutMethod}\n\nExample: ${item.exampleQuestion}\nSolution: ${item.exampleSolution}`)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title={t('Copy shortcut details', 'शॉर्टकट कॉपी करें')}
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className={`p-2 rounded-xl transition-colors ${
                      bookmarked 
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60' 
                        : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={bookmarked ? t('Remove bookmark', 'बुकमार्क हटाएं') : t('Save bookmark', 'बुकमार्क सहेजें')}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Core Concept */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {item.concept}
              </p>

              {/* Comparison: Standard vs Shortcut Method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* Standard Method */}
                <div className="p-3.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-red-800 dark:text-red-400 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t('Standard Traditional Method (Slow)', 'पारंपरिक विस्तृत विधि (धीमी)')}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    {item.standardMethod}
                  </p>
                </div>

                {/* Shortcut Method */}
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{t('Exam Shortcut Formula (Fast)', 'परीक्षा शॉर्टकट फॉर्मूला (तीव्र)')}</span>
                  </div>
                  <p className="text-xs text-emerald-950 dark:text-emerald-100 font-semibold leading-relaxed font-mono">
                    {item.shortcutMethod}
                  </p>
                </div>
              </div>

              {/* Worked Example */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    {t('Worked Exam Question', 'हल सहित उदाहरण प्रश्न')}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                    ⚡ {item.timeSaved}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-800 dark:text-slate-200">
                  {item.exampleQuestion}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="text-emerald-800 dark:text-emerald-300 font-bold">Solution: </span>
                  {item.exampleSolution}
                </div>
              </div>
            </div>
          );
        })}

        {filteredShortcuts.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Sliders className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
              {t('No shortcuts matched your query', 'कोई शॉर्टकट नहीं मिला')}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {t('Try searching with different keywords or switch subjects.', 'कृपया अन्य विषय या कीवर्ड चुनें।')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
