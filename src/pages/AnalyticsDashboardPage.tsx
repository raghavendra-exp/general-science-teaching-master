import React, { useState } from 'react';
import { 
  BarChart2, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Download, 
  Upload, 
  RotateCcw, 
  Layers, 
  Zap, 
  Bookmark, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface AnalyticsDashboardPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const AnalyticsDashboardPage: React.FC<AnalyticsDashboardPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { 
    testHistory, 
    errorNotebook, 
    flashcardProgress, 
    bookmarks, 
    exportUserData, 
    importUserData, 
    resetAllUserData,
    clearTestHistory
  } = useUserData();

  const [importJsonText, setImportJsonText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Compute aggregate stats
  const totalTests = testHistory.length;
  const totalAttemptedQuestions = testHistory.reduce((sum, t) => sum + (t.correctCount || 0) + (t.incorrectCount || 0), 0);
  const totalCorrectQuestions = testHistory.reduce((sum, t) => sum + (t.correctCount || 0), 0);
  const overallAccuracy = totalAttemptedQuestions > 0 
    ? Math.round((totalCorrectQuestions / totalAttemptedQuestions) * 100) 
    : 0;

  const totalErrors = errorNotebook.length;
  const resolvedErrors = errorNotebook.filter(e => e.isResolved).length;

  const masteredFlashcards = Object.values(flashcardProgress).filter(s => s === 'known').length;

  // Aggregate weak topics from error notebook
  const topicErrorCounts: Record<string, { count: number; subject: string }> = {};
  errorNotebook.forEach(item => {
    const key = item.question.topic;
    if (!topicErrorCounts[key]) {
      topicErrorCounts[key] = { count: 0, subject: item.question.subject };
    }
    topicErrorCounts[key].count += 1;
  });

  const sortedWeakTopics = Object.entries(topicErrorCounts)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 6);

  const handleExportDownload = () => {
    const jsonStr = exportUserData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gst-master-prep-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSubmit = () => {
    if (!importJsonText.trim()) return;
    const success = importUserData(importJsonText);
    if (success) {
      setImportStatus('success');
      setImportJsonText('');
      setTimeout(() => setImportStatus(null), 3000);
    } else {
      setImportStatus('error');
      setTimeout(() => setImportStatus(null), 4000);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Performance Analytics Dashboard', labelHi: 'प्रदर्शन विश्लेषण डैशबोर्ड', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-800">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30 mb-3">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>{t('DIAGNOSTIC SCORE & ACCURACY INTELLIGENCE', 'स्कोर एवं सटीकता विश्लेषण')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('Aspirant Performance Analytics', 'अभ्यर्थी प्रदर्शन विश्लेषण डैशबोर्ड')}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {t(
            'Track full CBT mock test history, score progression, topic accuracy heatmaps, error resolution velocity, and portable data backups.',
            'मॉक टेस्ट के प्राप्तांक, सटीकता, कमजोर अध्यायों का विश्लेषण और डेटा बैकअप की सुविधा।'
          )}
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Tests Attempted */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>{t('Mocks Attempted', 'मॉक टेस्ट संपन्न')}</span>
            <Clock className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {totalTests}
          </div>
          <div className="text-[11px] text-slate-500">
            {totalAttemptedQuestions} {t('Questions Solved', 'प्रश्न हल किए')}
          </div>
        </div>

        {/* Overall Accuracy */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>{t('Overall Accuracy', 'कुल सटीकता')}</span>
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-800 dark:text-emerald-400">
            {overallAccuracy}%
          </div>
          <div className="text-[11px] text-slate-500">
            {totalCorrectQuestions} {t('Correct Answers', 'सही उत्तर')}
          </div>
        </div>

        {/* Error Notebook Log */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>{t('Errors Tracked', 'त्रुटि नोटबुक')}</span>
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-800 dark:text-amber-400">
            {totalErrors}
          </div>
          <div className="text-[11px] text-slate-500">
            {resolvedErrors} {t('Resolved / Rectified', 'सुधार लिए गए')}
          </div>
        </div>

        {/* Flashcards & Bookmarks */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>{t('Active Memory', 'सक्रिय स्मृति')}</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-purple-800 dark:text-purple-400">
            {masteredFlashcards}
          </div>
          <div className="text-[11px] text-slate-500">
            {bookmarks.length} {t('Saved Bookmarks', 'सुरक्षित बुकमार्क')}
          </div>
        </div>
      </div>

      {/* Weak Topics Diagnostic Heatmap */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500" />
              <span>{t('Diagnostic Weak Area Priority Matrix', 'कमजोर विषयों का प्राथमिकता मैट्रिक्स')}</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {t('Topics where you made mistakes during practice or mock tests.', 'जिन विषयों में विगत टेस्ट्स में त्रुटियां हुईं।')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('error-notebook')}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>{t('Open Error Notebook', 'त्रुटि नोटबुक खोलें')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {sortedWeakTopics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sortedWeakTopics.map(([topic, data], idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-0.5 truncate">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {data.subject}
                  </span>
                  <div className="font-bold text-slate-900 dark:text-slate-100 truncate">
                    {topic}
                  </div>
                </div>
                <span className="px-2 py-1 rounded-lg text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 shrink-0">
                  {data.count} {t('Mistakes', 'त्रुटियां')}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-center text-xs text-emerald-800 dark:text-emerald-300">
            <CheckCircle className="w-6 h-6 mx-auto mb-1 text-emerald-600" />
            <span className="font-semibold">{t('Zero recurring errors logged! Keep attempting mock tests to unlock deep diagnostics.', 'कोई गंभीर त्रुटि दर्ज नहीं है! अभ्यास जारी रखें।')}</span>
          </div>
        )}
      </div>

      {/* Test History Log */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{t('Recent CBT Test Submissions', 'हाल ही में दिए गए टेस्ट का इतिहास')}</span>
          </h2>

          {testHistory.length > 0 && (
            <button
              onClick={clearTestHistory}
              className="text-xs text-slate-400 hover:text-rose-500 font-semibold"
            >
              {t('Clear Test Log', 'इतिहास मिटाएं')}
            </button>
          )}
        </div>

        {testHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="pb-2">{t('Test Title', 'टेस्ट शीर्षक')}</th>
                  <th className="pb-2">{t('Date', 'दिनांक')}</th>
                  <th className="pb-2">{t('Score', 'प्राप्तांक')}</th>
                  <th className="pb-2">{t('Accuracy', 'सटीकता')}</th>
                  <th className="pb-2">{t('Breakdown', 'विवरण (सही / गलत / अनुत्तरित)')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {testHistory.map((sess, sIdx) => (
                  <tr key={sIdx} className="hover:bg-slate-50 dark:hover:bg-slate-950/50">
                    <td className="py-3 font-bold text-slate-900 dark:text-slate-100">
                      {sess.title}
                    </td>
                    <td className="py-3 text-slate-500">
                      {sess.submittedAt ? new Date(sess.submittedAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="py-3 font-black text-indigo-600 dark:text-indigo-400">
                      {sess.score ?? 0}
                    </td>
                    <td className="py-3 font-semibold text-emerald-800 dark:text-emerald-400">
                      {sess.accuracy ?? 0}%
                    </td>
                    <td className="py-3 text-slate-500 font-mono">
                      <span className="text-emerald-800 dark:text-emerald-400 font-bold">✓{sess.correctCount ?? 0}</span> / 
                      <span className="text-rose-600 font-bold"> ✗{sess.incorrectCount ?? 0}</span> / 
                      <span className="text-slate-400"> ⏸{sess.unattemptedCount ?? 0}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-400">
            {t('No tests attempted yet. Start your first CBT mock test to view performance analytics.', 'अभी कोई टेस्ट नहीं दिया गया है।')}
          </div>
        )}
      </div>

      {/* Data Backup & Restore */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Download className="w-4 h-4 text-emerald-600" />
          <span>{t('Data Backup & Restore (JSON Export / Import)', 'डेटा बैकअप एवं रिस्टोर (JSON)')}</span>
        </h2>
        <p className="text-xs text-slate-500">
          {t(
            'All your study progress, error notebook logs, test history, and bookmarks reside safely in your browser’s local storage. Export a backup anytime to transfer across devices.',
            'आपकी सभी प्रगति, त्रुटि नोटबुक और बुकमार्क स्थानीय रूप से सुरक्षित हैं। किसी भी समय JSON बैकअप डाउनलोड कर दूसरे डिवाइस पर उपयोग करें।'
          )}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={handleExportDownload}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 flex items-center gap-1.5 shadow-2xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t('Download JSON Backup', 'बैकअप डाउनलोड करें')}</span>
          </button>

          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all test history, bookmarks, and error notebook items?')) {
                resetAllUserData();
              }
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
            <span>{t('Reset All User Data', 'सम्पूर्ण डेटा रीसेट करें')}</span>
          </button>
        </div>

        {/* Restore area */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('Restore from JSON text', 'JSON टेक्स्ट से रिस्टोर करें')}
          </label>
          <div className="flex gap-2">
            <textarea
              rows={2}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder={t('Paste JSON backup string here...', 'यहाँ JSON बैकअप पेस्ट करें...')}
              className="flex-1 p-2 text-xs font-mono rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200"
            />
            <button
              onClick={handleImportSubmit}
              disabled={!importJsonText.trim()}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 self-end flex items-center gap-1"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{t('Import', 'आयात')}</span>
            </button>
          </div>

          {importStatus === 'success' && (
            <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
              ✓ {t('Backup successfully restored!', 'डेटा सफलतापूर्वक रिस्टोर हो गया!')}
            </div>
          )}
          {importStatus === 'error' && (
            <div className="text-xs font-bold text-rose-600">
              ✗ {t('Invalid JSON format. Please verify the backup file.', 'अमान्य JSON प्रारूप।')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
