import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Search, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allExams } from '../data/exams';
import { notificationsData } from '../data/notifications/notificationsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface NotificationTrackerPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const NotificationTrackerPage: React.FC<NotificationTrackerPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'calendar' | 'bulletins'>('calendar');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredExams = allExams.filter(exam => {
    if (selectedStatus !== 'all' && exam.latestNotification.status !== selectedStatus) return false;
    if (selectedCategory !== 'all' && exam.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inName = exam.name.toLowerCase().includes(q);
      const inFull = exam.fullName.toLowerCase().includes(q);
      const inBody = exam.conductingBody.toLowerCase().includes(q);
      if (!inName && !inFull && !inBody) return false;
    }
    return true;
  });

  const filteredBulletins = notificationsData.filter(item => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inHead = item.headline.toLowerCase().includes(q);
      const inHeadHi = item.headlineHi.toLowerCase().includes(q);
      const inExam = item.examName.toLowerCase().includes(q);
      if (!inHead && !inHeadHi && !inExam) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Exam Notifications & Calendar Tracker', labelHi: 'परीक्षा अधिसूचना एवं कैलेंडर ट्रैकर', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-800/40">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-3">
          <Bell className="w-3.5 h-3.5 animate-bounce" />
          <span>{t('OFFICIAL LIFECYCLE MONITOR (2025–2026)', 'आधिकारिक परीक्षा चक्र ट्रैकर (2025-2026)')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('National Exam Notification Tracker', 'अखिल भारतीय परीक्षा अधिसूचना एवं कैलेंडर')}
        </h1>
        <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {t(
            'Never miss a crucial application deadline or admit card release. Complete stage tracking from Official Notification → Application → Admit Card → Exam Date → Result.',
            'अधिसूचना, ऑनलाइन आवेदन, प्रवेश पत्र और परीक्षा तिथियों का आधिकारिक पोर्टल लिंक्स के साथ संपूर्ण विवरण।'
          )}
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 text-xs font-bold">
        <button
          onClick={() => setActiveTab('calendar')}
          className={`pb-3 flex items-center gap-2 transition-all relative ${
            activeTab === 'calendar'
              ? 'text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>{t('Exam Lifecycle Tracker (All Exams)', 'परीक्षा चक्र कैलेंडर (सभी परीक्षाएं)')}</span>
        </button>

        <button
          onClick={() => setActiveTab('bulletins')}
          className={`pb-3 flex items-center gap-2 transition-all relative ${
            activeTab === 'bulletins'
              ? 'text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>{t('Official Press Bulletins & Advisories', 'आधिकारिक प्रेस विज्ञप्तियां व बुलेटिन')}</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
          >
            <option value="all">{t('All Statuses', 'सभी स्थितियां')}</option>
            <option value="active">🟢 Active / Open (सक्रिय)</option>
            <option value="upcoming">🟠 Upcoming (आगामी)</option>
            <option value="concluded">🔵 Concluded / Result Out (संपन्न)</option>
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
          >
            <option value="all">{t('All Categories', 'सभी संवर्ग')}</option>
            <option value="teaching_eligibility">{t('Teaching Eligibility', 'शिक्षक पात्रता')}</option>
            <option value="science">{t('Science Entrance', 'विज्ञान प्रवेश')}</option>
            <option value="teaching_recruitment">{t('Teacher Recruitment', 'शिक्षक भर्ती')}</option>
            <option value="general">{t('General (SSC, PSC)', 'सामान्य प्रतियोगी')}</option>
          </select>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search exam or notification...', 'परीक्षा या विज्ञप्ति खोजें...')}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Tab 1: Exam Lifecycle Cards */}
      {activeTab === 'calendar' && (
        <div className="space-y-4">
          {filteredExams.map(exam => {
            const notif = exam.latestNotification;
            const statusConfig = {
              active: { label: 'Application Open', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300' },
              upcoming: { label: 'Upcoming Cycle', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300' },
              concluded: { label: 'Concluded / Evaluation', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300' },
              closed: { label: 'Registration Closed', color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300' }
            }[notif.status];

            return (
              <div
                key={exam.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all space-y-4"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {exam.conductingBody}
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {language === 'hi' ? exam.fullNameHi : exam.fullName} ({notif.year})
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNavigate('exam-detail', { id: exam.id })}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 flex items-center gap-1"
                    >
                      <span>{t('View Full Exam Page', 'परीक्षा विवरण देखें')}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={exam.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      title={t('Official Portal', 'आधिकारिक पोर्टल')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Timeline Lifecycle Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('Notification Date', 'विज्ञप्ति तिथि')}</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{notif.notificationDate}</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('Apply Window', 'आवेदन अवधि')}</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{notif.applyStartDate} to {notif.applyEndDate}</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('Admit Card / City Slip', 'प्रवेश पत्र')}</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{notif.admitCardDate || 'To be notified'}</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('Exam Window', 'परीक्षा तिथि')}</div>
                    <div className="font-semibold text-emerald-800 dark:text-emerald-300 mt-0.5">{notif.examDate}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Bulletins List */}
      {activeTab === 'bulletins' && (
        <div className="space-y-4">
          {filteredBulletins.map(b => (
            <div
              key={b.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-800 dark:text-emerald-400">{b.examName}</span>
                  <span className="text-slate-400">• {b.date}</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {b.category}
                </span>
              </div>

              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {language === 'hi' ? b.headlineHi : b.headline}
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? b.summaryHi : b.summary}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">
                  {t('Verified on:', 'सत्यापन:')} {b.lastVerified}
                </span>
                <a
                  href={b.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>{t('Open Official Bulletin', 'आधिकारिक बुलेटिन देखें')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
