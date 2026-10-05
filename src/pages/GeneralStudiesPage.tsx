import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  Bookmark, 
  CheckCircle, 
  Award, 
  ArrowRight, 
  BookOpen, 
  MapPin, 
  Landmark, 
  Compass,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { gkAndGsData, GkItem } from '../data/gk/gkAndGsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface GeneralStudiesPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const GeneralStudiesPage: React.FC<GeneralStudiesPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark } = useUserData();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['all', 'Polity', 'History', 'Geography', 'Economy', 'Static GK'];

  const filteredItems = gkAndGsData.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inTitleHi = item.titleHi.toLowerCase().includes(q);
      const inContent = item.content.toLowerCase().includes(q);
      const inFacts = item.keyFacts.some(f => f.toLowerCase().includes(q));
      if (!inTitle && !inTitleHi && !inContent && !inFacts) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'General Studies & Static GK', labelHi: 'सामान्य अध्ययन एवं स्टैटिक जीके', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <Landmark className="w-3.5 h-3.5" />
          <span>{t('STATIC GK & GENERAL AWARENESS MASTER', 'सामान्य अध्ययन एवं स्टैटिक सामान्य ज्ञान')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('General Studies & Static GK Master', 'सामान्य अध्ययन एवं स्टैटिक जीके महामंच')}
        </h1>
        <p className="text-amber-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Master Indian Polity articles, National Movement milestones, geography, economy, and static GK topics with exam-proven bullet facts and question mapping.',
            'भारतीय संविधान के अनुच्छेद, राष्ट्रीय आंदोलन के चरण, भूगोल और अर्थव्यवस्था के प्रमुख परीक्षा-उपयोगी तथ्य।'
          )}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'all' ? t('All Subjects', 'सभी विषय') : cat}
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
            placeholder={t('Search articles, battles, parks...', 'अनुच्छेद, आंदोलन या तथ्य खोजें...')}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-5">
        {filteredItems.map(item => {
          const bookmarked = isBookmarked(item.id);

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                    {item.category}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    {language === 'hi' && item.titleHi ? item.titleHi : item.title}
                  </h2>
                </div>

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

              {/* Context Summary */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' && item.contentHi ? item.contentHi : item.content}
              </p>

              {/* Key Exam Facts */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('Key High-Yield Exam Facts:', 'प्रमुख परीक्षा उपयोगी तथ्य:')}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {item.keyFacts.map((fact, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-500 font-bold shrink-0">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer info: Exam relevance */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-400 text-[11px] font-semibold">{t('Target Exams:', 'लक्षित परीक्षाएं:')}</span>
                  {item.examRelevance.map((ex, exIdx) => (
                    <span 
                      key={exIdx} 
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium"
                    >
                      {ex}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('practice-hub')}
                  className="text-amber-600 dark:text-amber-400 font-bold hover:underline flex items-center gap-1 text-xs"
                >
                  <span>{t('Practice Questions', 'संबंधित प्रश्न हल करें')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
              {t('No topics matched your search', 'कोई विषय नहीं मिला')}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
