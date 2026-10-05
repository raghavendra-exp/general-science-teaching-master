import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle, 
  HelpCircle, 
  BookOpen, 
  Layers, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  Download, 
  Share2, 
  Bookmark,
  Award,
  ArrowRight,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { getExamById } from '../data/exams';
import { getSyllabusByExamId } from '../data/syllabus';
import { getBooksForExam } from '../data/books/booksData';
import { getNotificationsByExam } from '../data/notifications/notificationsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface ExamDetailPageProps {
  examId: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const ExamDetailPage: React.FC<ExamDetailPageProps> = ({ examId, onNavigate }) => {
  const { language, t } = useLanguage();
  const { isBookmarked, toggleBookmark } = useUserData();
  const [activeTab, setActiveTab] = useState<'overview' | 'pattern' | 'syllabus' | 'books' | 'notifications'>('overview');

  const exam = getExamById(examId) || getExamById('ctet');
  if (!exam) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">Exam not found</h2>
        <button onClick={() => onNavigate('exams-directory')} className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg">
          Back to Directory
        </button>
      </div>
    );
  }

  const syllabus = getSyllabusByExamId(exam.id);
  const books = getBooksForExam(exam.id);
  const notifications = getNotificationsByExam(exam.id);
  const bookmarked = isBookmarked(exam.id);

  const tabs = [
    { id: 'overview', label: 'Overview & Eligibility', labelHi: 'विवरण एवं पात्रता' },
    { id: 'pattern', label: 'Exam Pattern & Marking', labelHi: 'परीक्षा पैटर्न व अंकन' },
    { id: 'syllabus', label: 'Detailed Syllabus', labelHi: 'विस्तृत पाठ्यक्रम' },
    { id: 'books', label: 'Books & Resources', labelHi: 'प्रामाणिक पुस्तकें' },
    { id: 'notifications', label: 'Notifications & Dates', labelHi: 'अधिसूचनाएं व तिथियां' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Exams Directory', labelHi: 'परीक्षा निर्देशिका', onClick: () => onNavigate('exams-directory') },
          { label: exam.category.replace('_', ' ').toUpperCase(), labelHi: exam.category, onClick: () => onNavigate('exams-directory', { category: exam.category }) },
          { label: exam.name, labelHi: exam.nameHi, active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Exam Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                {exam.category.replace('_', ' ').toUpperCase()}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {exam.examMode} Mode
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {exam.frequency}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {exam.level} Level
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {language === 'hi' ? exam.fullNameHi : exam.fullName} ({language === 'hi' ? exam.nameHi : exam.name})
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? exam.descriptionHi : exam.description}
            </p>

            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500 dark:text-slate-400">
              <span><strong>{t('Conducting Authority:', 'आयोजक संस्था:')}</strong> {exam.conductingBody}</span>
              <span>•</span>
              <a 
                href={exam.officialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
              >
                {t('Official Portal', 'आधिकारिक वेबसाइट')} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => onNavigate('mock-tests', { examId: exam.id })}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
            >
              <CheckCircle className="w-4 h-4" />
              <span>{t('Launch CBT Mock Test', 'CBT मॉक टेस्ट दें')}</span>
            </button>

            <button
              onClick={() => onNavigate('practice-hub', { exam: exam.id })}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all"
            >
              <HelpCircle className="w-4 h-4 text-emerald-500" />
              <span>{t('Practice Questions', 'प्रश्न अभ्यास करें')}</span>
            </button>

            <button
              onClick={() => toggleBookmark(exam.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                bookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
              <span>{bookmarked ? t('Bookmarked', 'सुरक्षित') : t('Save Exam', 'सुरक्षित करें')}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6 scrollbar-thin">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {language === 'hi' ? tab.labelHi : tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Overview & Eligibility */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Eligibility Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                <span>{t('Eligibility Criteria & Qualification Rules', 'पात्रता मानदंड एवं शैक्षणिक योग्यता')}</span>
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{t('Educational Qualification:', 'शैक्षणिक अर्हता:')}</h4>
                  <p className="text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 leading-relaxed">
                    {language === 'hi' ? exam.eligibility.educationHi : exam.eligibility.education}
                  </p>
                </div>

                {exam.eligibility.percentageRequired && (
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{t('Minimum Percentage:', 'न्यूनतम प्रतिशत अंक:')}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{exam.eligibility.percentageRequired}</p>
                  </div>
                )}

                {/* Age Criteria */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{t('Age Criteria & Relaxations:', 'आयु सीमा एवं छूट:')}</h4>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="flex gap-4">
                      {exam.eligibility.minAge && <div><strong>Min Age:</strong> {exam.eligibility.minAge} Years</div>}
                      {exam.eligibility.maxAge && <div><strong>Max Age:</strong> {exam.eligibility.maxAge} Years (General)</div>}
                    </div>

                    {exam.eligibility.ageRelaxation && exam.eligibility.ageRelaxation.length > 0 && (
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Permissible Age Relaxations:</div>
                        <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-600 dark:text-slate-300">
                          {exam.eligibility.ageRelaxation.map((rel, rIdx) => (
                            <li key={rIdx}><strong>{rel.category}:</strong> {rel.relaxation}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Selection Process */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span>{t('Selection Process Stages', 'चयन प्रक्रिया के चरण')}</span>
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm">
                {(language === 'hi' ? exam.selectionProcessHi : exam.selectionProcess).map((stage, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {sIdx + 1}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{stage}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Column: Vacancy & Cutoffs */}
          <div className="space-y-6">
            {/* Vacancy Card */}
            {exam.vacancies && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  {t(`Vacancies Reference (${exam.vacancies.year})`, `रिक्तियों का विवरण (${exam.vacancies.year})`)}
                </h3>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900/60 text-center">
                  <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400">
                    {exam.vacancies.total.toLocaleString()}
                  </div>
                  <div className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">Total Notified Vacancies</div>
                </div>

                {exam.vacancies.breakdown && (
                  <div className="space-y-1.5 pt-1">
                    {exam.vacancies.breakdown.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <span className="text-slate-600 dark:text-slate-300 truncate mr-2">{item.post}</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100 shrink-0">{item.count.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Cutoff Trends Card */}
            {exam.cutoffTrends && exam.cutoffTrends.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  {t('Historical Cutoff Benchmark', 'विगत कटऑफ संदर्भ')}
                </h3>
                {exam.cutoffTrends.map((cut, cIdx) => (
                  <div key={cIdx} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                    <div className="font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-1">
                      Year {cut.year} Cutoff
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                      <div><strong>UR / Gen:</strong> {cut.general}</div>
                      {cut.obc && <div><strong>OBC:</strong> {cut.obc}</div>}
                      {cut.ews && <div><strong>EWS:</strong> {cut.ews}</div>}
                      {cut.sc && <div><strong>SC:</strong> {cut.sc}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Pattern & Marking Scheme */}
      {activeTab === 'pattern' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {t('Official Examination Pattern & Marking Scheme', 'आधिकारिक परीक्षा पैटर्न व अंकन योजना')}
              </h2>
              <p className="text-xs text-slate-500">
                {t('Duration, section questions, marks, and negative marking rules', 'समय अवधि, प्रश्नों की संख्या, कुल अंक और नकारात्मक अंकन')}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>{exam.examPattern.negativeMarking}</span>
            </div>
          </div>

          {/* Pattern summary chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-xs text-slate-400 font-medium">Total Questions</div>
              <div className="text-xl font-black text-slate-900 dark:text-slate-100">{exam.examPattern.totalQuestions}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-xs text-slate-400 font-medium">Total Marks</div>
              <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">{exam.examPattern.totalMarks}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-xs text-slate-400 font-medium">Duration</div>
              <div className="text-xl font-black text-blue-600 dark:text-blue-400">{exam.examPattern.durationMinutes} min</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-xs text-slate-400 font-medium">Exam Mode</div>
              <div className="text-xl font-black text-purple-600 dark:text-purple-400">{exam.examMode}</div>
            </div>
          </div>

          {/* Sections Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="p-3.5">Section Name</th>
                  <th className="p-3.5 text-center">Questions</th>
                  <th className="p-3.5 text-center">Total Marks</th>
                  <th className="p-3.5 text-center">Negative Marking</th>
                  <th className="p-3.5">Remarks / Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {exam.examPattern.sections.map(sec => (
                  <tr key={sec.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100">
                      {language === 'hi' ? sec.nameHi : sec.name}
                    </td>
                    <td className="p-3.5 text-center font-semibold">{sec.questions}</td>
                    <td className="p-3.5 text-center font-bold text-emerald-600 dark:text-emerald-400">{sec.marks}</td>
                    <td className="p-3.5 text-center text-amber-600 dark:text-amber-400 font-medium">{sec.negativeMarking}</td>
                    <td className="p-3.5 text-xs text-slate-500">{sec.description || 'Core compulsory section'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Detailed Syllabus */}
      {activeTab === 'syllabus' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {t('Complete Subject-wise Syllabus', 'विस्तृत विषय-वार पाठ्यक्रम')}
              </h2>
              <p className="text-xs text-slate-500">
                {t('Every topic mapped with NCERT textbook chapters & PYQ repetition frequency', 'प्रत्येक विषय एनसीईआरटी पाठ्यपुस्तकों व विगत प्रश्नों की आवृत्ति से संबद्ध')}
              </p>
            </div>
            <a
              href={exam.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Official Syllabus PDF</span>
            </a>
          </div>

          {syllabus ? (
            <div className="space-y-6">
              {syllabus.subjects.map(subj => (
                <div key={subj.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                      {language === 'hi' ? subj.nameHi : subj.name}
                    </h3>
                    {subj.weightage && (
                      <span className="text-xs font-bold text-emerald-600 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60">
                        {subj.weightage}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {subj.topics.map(topic => (
                      <div key={topic.id} className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                            {language === 'hi' ? topic.nameHi : topic.name}
                          </h4>
                          {topic.pyqFrequency && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 shrink-0">
                              {topic.pyqFrequency} PYQs
                            </span>
                          )}
                        </div>

                        <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 leading-relaxed">
                          {topic.subtopics.map((sub, sIdx) => (
                            <li key={sIdx}>{sub}</li>
                          ))}
                        </ul>

                        {topic.ncertMapping && topic.ncertMapping.length > 0 && (
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 font-medium">
                            <BookOpen className="w-3 h-3 shrink-0" />
                            <span>NCERT: {topic.ncertMapping.map(m => `Class ${m.classLevel}`).join(', ')}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-slate-500">
              Syllabus module is being synchronized with the latest official gazette.
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Books & Legitimate Resources */}
      {activeTab === 'books' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {t('Verified Books & Legitimate Resources', 'प्रमाणिक पुस्तकें एवं सरकारी पोर्टल')}
              </h2>
              <p className="text-xs text-slate-500">
                {t('All recommended books from legitimate established publishers with official purchase links (No pirated PDFs).', 'प्रतिष्ठित प्रकाशकों की प्रामाणिक पुस्तकें व सरकारी ई-लर्निंग पोर्टल।')}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Authorized & Copyright-Safe</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {books.map(book => (
              <div key={book.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {book.recommendedLevel}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Edition: {book.edition}</span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
                    {book.title}
                  </h3>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    By <strong>{book.author}</strong> • {book.publisher} ({book.year})
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    {book.syllabusCoverage}
                  </p>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                    ✓ {book.pyqCoverage}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Store: {book.storeType}</span>
                  <a
                    href={book.legitimateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Book</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Notifications & Dates */}
      {activeTab === 'notifications' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            {t('Official Notifications & Exam Dates Tracker', 'आधिकारिक अधिसूचनाएं एवं परीक्षा तिथियां')}
          </h2>

          <div className="space-y-3">
            {notifications.length > 0 ? (
              notifications.map(notif => (
                <div key={notif.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-rose-600">{notif.category}</span>
                      <span className="text-xs text-slate-400">• {notif.date}</span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {language === 'hi' ? notif.headlineHi : notif.headline}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {language === 'hi' ? notif.summaryHi : notif.summary}
                    </p>
                  </div>
                  <a
                    href={notif.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-emerald-600 hover:text-white text-xs font-semibold inline-flex items-center gap-1 transition-colors shrink-0"
                  >
                    <span>Official Notice</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-slate-500">
                Latest notification dates will appear as soon as the official gazette is released.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
