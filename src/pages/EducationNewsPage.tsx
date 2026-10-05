import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Search, 
  ShieldCheck, 
  Bookmark, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { educationNews } from '../data/currentAffairs/educationNews';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface EducationNewsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const EducationNewsPage: React.FC<EducationNewsPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark } = useUserData();

  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tags = ['all', 'NEP 2020', 'NCTE / ITEP', 'NCERT NCF', 'CBSE', 'UGC Regulations'];

  const filteredNews = educationNews.filter(item => {
    if (selectedTag !== 'all') {
      const tagLower = selectedTag.toLowerCase();
      const inHead = item.headline.toLowerCase().includes(tagLower);
      const inSum = item.summary.toLowerCase().includes(tagLower);
      if (!inHead && !inSum) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inHead = item.headline.toLowerCase().includes(q);
      const inHeadHi = item.headlineHi.toLowerCase().includes(q);
      const inSum = item.summary.toLowerCase().includes(q);
      const inSumHi = item.summaryHi.toLowerCase().includes(q);
      if (!inHead && !inHeadHi && !inSum && !inSumHi) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Education News Lab', labelHi: 'शिक्षा समाचार लैब', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{t('DEDICATED POLICY & REGULATORY INTELLIGENCE', 'समर्पित शिक्षा नीति व विनियामक समाचार')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Education News Lab', 'शिक्षा समाचार व नीति शोधशाला')}
        </h1>
        <p className="text-blue-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Tracking continuous reforms from NEP 2020, NCTE ITEP regulations, UGC Ph.D. criteria, NCERT curriculum revisions, and teacher recruitment policy notifications.',
            'एनईपी 2020, एनसीटीई आईटीईपी, यूजीसी, एनसीईआरटी और शिक्षक भर्ती नीतियों में होने वाले नवीनतम बदलावों का प्रमाणिक विश्लेषण।'
          )}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {tag === 'all' ? t('All Reforms', 'सभी नीतियां') : tag}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search reforms, ITEP, UGC...', 'नीति या विनियमन खोजें...')}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Policy News Cards */}
      <div className="space-y-4">
        {filteredNews.map(item => {
          const bookmarked = isBookmarked(item.id);

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md font-bold text-[11px] bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
                    🏛️ {t('Policy & Regulatory', 'नीतिगत एवं विनियामक')}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-emerald-800 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {t('Official Release', 'आधिकारिक विज्ञप्ति')}
                  </span>
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
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

              {/* Title */}
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {language === 'hi' ? item.headlineHi : item.headline}
              </h2>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? item.summaryHi : item.summary}
              </p>

              {/* Exam Relevance & Source */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-400 font-semibold text-[11px]">
                    {t('Exam Impact:', 'परीक्षा पर प्रभाव:')}
                  </span>
                  {item.examRelevance.map((ex, exIdx) => (
                    <span
                      key={exIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium"
                    >
                      {ex}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] text-slate-400 italic">
                  {t('Source:', 'स्रोत:')} {item.source}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
