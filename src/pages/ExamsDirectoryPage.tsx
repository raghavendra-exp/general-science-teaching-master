import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  GraduationCap, 
  Atom, 
  Award, 
  BookOpen, 
  ExternalLink,
  CheckCircle,
  FileText
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allExams, getExamsByCategory } from '../data/exams';
import { ExamCategory, Exam } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface ExamsDirectoryPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialCategory?: ExamCategory;
}

export const ExamsDirectoryPage: React.FC<ExamsDirectoryPageProps> = ({
  onNavigate,
  initialCategory
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'all' | 'National' | 'State'>('all');

  useEffect(() => {
    setSelectedCategory(initialCategory || 'all');
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: 'All Exams', labelHi: 'सभी परीक्षाएं' },
    { id: 'general', label: 'General Competitive', labelHi: 'सामान्य प्रतियोगी (SSC)' },
    { id: 'science', label: 'Science Entrance & Eligibility', labelHi: 'विज्ञान प्रवेश (CSIR, JAM, GATE)' },
    { id: 'teaching_eligibility', label: 'Teaching Eligibility (TETs)', labelHi: 'शिक्षक पात्रता (CTET, TETs)' },
    { id: 'teaching_recruitment', label: 'Teacher Recruitment', labelHi: 'शिक्षक भर्ती (KVS, DSSSB, EMRS)' }
  ];

  const filteredExams = allExams.filter(exam => {
    if (selectedCategory !== 'all' && exam.category !== selectedCategory) {
      return false;
    }
    if (levelFilter !== 'all' && exam.level !== levelFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const match = exam.name.toLowerCase().includes(q) ||
                    exam.nameHi.includes(q) ||
                    exam.fullName.toLowerCase().includes(q) ||
                    exam.conductingBody.toLowerCase().includes(q) ||
                    exam.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const getCategoryIcon = (category: ExamCategory) => {
    switch (category) {
      case 'general': return Award;
      case 'science': return Atom;
      case 'teaching_eligibility': return GraduationCap;
      case 'teaching_recruitment': return BookOpen;
      default: return Award;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Exams Directory', labelHi: 'परीक्षा निर्देशिका', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Page Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            {t('OFFICIAL EXAM ARCHITECTURE', 'आधिकारिक परीक्षा निर्देशिका')}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('Master Examination Directory', 'अखिल भारतीय परीक्षा निर्देशिका')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('Explore comprehensive syllabus, marking schemes, negative marking rules, verified eligibility and books for 15+ premier examinations.', '15+ प्रमुख परीक्षाओं का संपूर्ण पाठ्यक्रम, अंकन प्रणाली, पात्रता मानदंड, विगत प्रश्न व प्रामाणिक पुस्तकें।')}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('Search by exam name, conducting body, or keyword...', 'परीक्षा का नाम, आयोग अथवा कीवर्ड द्वारा खोजें...')}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
            />
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium shrink-0">Level:</span>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              {(['all', 'National', 'State'] as const).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    levelFilter === lvl
                      ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {lvl === 'all' ? t('All Levels', 'सभी') : lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4 scrollbar-thin">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                onNavigate('exams-directory', cat.id === 'all' ? undefined : { category: cat.id });
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExams.map(exam => {
          const Icon = getCategoryIcon(exam.category);
          return (
            <div
              key={exam.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-900/60">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                          {language === 'hi' ? exam.nameHi : exam.name}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {exam.examMode}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {exam.conductingBody} • {exam.level} Level
                      </div>
                    </div>
                  </div>

                  <a
                    href={exam.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-emerald-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Official Website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-3">
                  {language === 'hi' ? exam.descriptionHi : exam.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 mb-4 text-center">
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Questions</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {exam.examPattern.totalQuestions} Q
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Total Marks</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {exam.examPattern.totalMarks} M
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Duration</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {exam.examPattern.durationMinutes} min
                    </div>
                  </div>
                </div>

                {/* Notification Badge */}
                <div className="flex items-center justify-between text-[11px] mb-4 text-slate-500">
                  <span>Cycle: {exam.latestNotification.year} ({exam.latestNotification.status.toUpperCase()})</span>
                  <span className="font-semibold text-emerald-600">Neg: {exam.examPattern.negativeMarking.slice(0, 15)}...</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('exam-detail', { examId: exam.id })}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t('View Syllabus & Pattern', 'पाठ्यक्रम व पैटर्न')}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onNavigate('practice-hub', { exam: exam.id })}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
                    title="Practice questions"
                  >
                    {t('Practice', 'अभ्यास')}
                  </button>
                  <button
                    onClick={() => onNavigate('mock-tests', { examId: exam.id })}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 transition-colors shadow-2xs"
                  >
                    <span>{t('Mock Test', 'मॉक')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
