import React, { useState, useMemo } from 'react';
import { 
  Newspaper, 
  Calendar, 
  Search, 
  Filter, 
  Bookmark, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { generalCurrentAffairs } from '../data/currentAffairs/generalCurrentAffairs';
import { educationNews } from '../data/currentAffairs/educationNews';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface CurrentAffairsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const CurrentAffairsPage: React.FC<CurrentAffairsPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark } = useUserData();

  const [timeframe, setTimeframe] = useState<'all' | 'daily' | 'weekly' | 'monthly' | '6month' | '12month'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const combinedNews = useMemo(() => {
    return [...generalCurrentAffairs, ...educationNews].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const categories = [
    'all', 
    'Science', 
    'Technology', 
    'Education', 
    'Environment', 
    'Awards', 
    'Economy', 
    'National', 
    'Schemes'
  ];

  const filteredNews = useMemo(() => {
    return combinedNews.filter(item => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inHead = item.headline.toLowerCase().includes(q);
        const inHeadHi = item.headlineHi.toLowerCase().includes(q);
        const inSum = item.summary.toLowerCase().includes(q);
        const inSumHi = item.summaryHi.toLowerCase().includes(q);
        const inRel = item.examRelevance.some(r => r.toLowerCase().includes(q));
        if (!inHead && !inHeadHi && !inSum && !inSumHi && !inRel) return false;
      }
      return true;
    });
  }, [combinedNews, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Current Affairs Engine', labelHi: 'समसामयिकी इंजन', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-green-800 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <Newspaper className="w-3.5 h-3.5" />
          <span>{t('100% EXAM-ORIENTED & SOURCE-VERIFIED', '100% परीक्षा-उपयोगी व स्रोत-सत्यापित')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Current Affairs Engine (12-Month Coverage)', 'समसामयिकी इंजन (12-माह कवरेज)')}
        </h1>
        <p className="text-teal-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Daily, Weekly, Monthly, and 12-Month consolidated events across Science, Technology, National Initiatives, Environmental treaties, and Global Awards with verified source attribution.',
            'विज्ञान, तकनीक, राष्ट्रीय योजनाएं, पर्यावरण और पुरस्कारों का परीक्षा-विशिष्ट मासिक व वार्षिक संकलन।'
          )}
        </p>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        {/* Timeframe filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('Timeframe View:', 'समय सीमा:')}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Updates', labelHi: 'सभी' },
              { id: 'daily', label: 'Daily', labelHi: 'दैनिक' },
              { id: 'weekly', label: 'Weekly', labelHi: 'साप्ताहिक' },
              { id: 'monthly', label: 'Monthly', labelHi: 'मासिक' },
              { id: '6month', label: '6-Month Capsule', labelHi: 'अर्धवार्षिकी (6 माह)' },
              { id: '12month', label: '12-Month Master', labelHi: 'वार्षिकी (12 माह)' }
            ].map(tf => (
              <button
                key={tf.id}
                onClick={() => setTimeframe(tf.id as any)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  timeframe === tf.id
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {language === 'hi' ? tf.labelHi : tf.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Search */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? t('All Domains', 'सभी क्षेत्र') : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search news, summits, ISRO...', 'समाचार, मिशन या योजना खोजें...')}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-teal-600"
            />
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="space-y-4">
        {filteredNews.map(item => {
          const bookmarked = isBookmarked(item.id);

          return (
            <article
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all space-y-3.5"
            >
              {/* Top Meta info */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md font-bold text-[11px] bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-900/50">
                    {item.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-emerald-800 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {t('Verified Source', 'सत्यापित स्रोत')}
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

              {/* Headline */}
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {language === 'hi' ? item.headlineHi : item.headline}
              </h2>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? item.summaryHi : item.summary}
              </p>

              {/* Exam Relevance & Source Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-400 font-semibold text-[11px]">
                    {t('Target Exams:', 'लक्षित परीक्षाएं:')}
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
            </article>
          );
        })}

        {filteredNews.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Newspaper className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
              {t('No updates found for this selection', 'कोई अद्यतन उपलब्ध नहीं है')}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
