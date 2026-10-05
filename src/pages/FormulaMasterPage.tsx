import React, { useState } from 'react';
import { 
  Calculator, 
  Search, 
  Bookmark, 
  Copy, 
  Check, 
  Sparkles, 
  HelpCircle,
  Atom,
  Layers,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { formulaData } from '../data/formulas/formulaData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface FormulaMasterPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const FormulaMasterPage: React.FC<FormulaMasterPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark } = useUserData();

  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const subjects = ['all', ...Array.from(new Set(formulaData.map(f => f.subject)))];

  const filteredFormulas = formulaData.filter(item => {
    if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchTopic = item.topic.toLowerCase().includes(q);
      const matchFormula = item.formula.toLowerCase().includes(q);
      if (!matchName && !matchTopic && !matchFormula) return false;
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
          { label: 'Formula Master', labelHi: 'फॉर्मूला महामंच', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t('RAPID FORMULA REFERENCE & REVISION SHEET', 'त्वरित सूत्र संदर्भ व संपूर्ण रिवीजन शीट')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Science & Aptitude Formula Master', 'विज्ञान एवं योग्यता सूत्र महामंच')}
        </h1>
        <p className="text-blue-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Comprehensive verified equations and identities across Mathematics, Physics, and Chemistry for CSIR NET, GATE, IIT JAM, SSC CGL, and Teaching Recruitment.',
            'सीएसआईआर नेट, गेट, आईआईटी जैम और प्रतियोगी परीक्षाओं हेतु गणित, भौतिकी और रसायन के सभी प्रामाणिक सूत्रों का संग्रह।'
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
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {subj === 'all' ? t('All Disciplines', 'सभी विषय') : subj}
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
            placeholder={t('Search formula, law, topic...', 'सूत्र या विषय खोजें...')}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Formulas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((item) => {
          const bookmarked = isBookmarked(item.id);
          const isCopied = copiedId === item.id;

          return (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40">
                        {item.subject}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                        {item.topic}
                      </span>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-1">
                      {item.name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleCopy(item.id, `${item.name}\n${item.formula}\n${item.whereClause || ''}`)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title={t('Copy formula', 'सूत्र कॉपी करें')}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        bookmarked 
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60' 
                          : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={bookmarked ? t('Remove bookmark', 'बुकमार्क हटाएं') : t('Save bookmark', 'बुकमार्क सहेजें')}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Formula Box */}
                <div className="my-3 p-3.5 rounded-xl bg-slate-900 text-blue-300 font-mono text-xs sm:text-sm tracking-wide overflow-x-auto shadow-inner border border-slate-800">
                  {item.formula}
                </div>

                {/* Where clause */}
                {item.whereClause && (
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                    <strong className="text-slate-700 dark:text-slate-300">{t('Variables:', 'चर विवरण:')} </strong>
                    {item.whereClause}
                  </div>
                )}
              </div>

              {/* Application Tip */}
              <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-[11px] text-blue-900 dark:text-blue-300 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">{t('Exam Tip: ', 'परीक्षा सूत्र टिप: ')}</strong>
                  {item.applicationTip}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Calculator className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
            {t('No formulas matched your search', 'कोई सूत्र नहीं मिला')}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {t('Try adjusting your keywords or category filters.', 'कृपया अन्य शब्द या विषय चुनकर पुनः प्रयास करें।')}
          </p>
        </div>
      )}
    </div>
  );
};
