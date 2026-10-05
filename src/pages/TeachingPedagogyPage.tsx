import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  HelpCircle, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { pedagogyData, getPedagogyByCategory } from '../data/pedagogy/pedagogyData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface TeachingPedagogyPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const TeachingPedagogyPage: React.FC<TeachingPedagogyPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Modules', labelHi: 'सभी मॉड्यूल' },
    { id: 'learning_theories', label: 'Learning Theories (Piaget, Vygotsky)', labelHi: 'अधिगम सिद्धांत (पियाजे, वायगोत्स्की)' },
    { id: 'inclusive_education', label: 'Inclusive Education & Disabilities', labelHi: 'समावेशी शिक्षा व दिव्यांगता' },
    { id: 'assessment', label: 'Assessment & CCE', labelHi: 'आकलन एवं CCE' },
    { id: 'language_pedagogy', label: 'Language Pedagogy (Chomsky, LAD)', labelHi: 'भाषा शिक्षणशास्त्र (चॉम्स्की)' }
  ];

  const filteredTopics = selectedCategory === 'all' 
    ? pedagogyData 
    : getPedagogyByCategory(selectedCategory);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Teaching Pedagogy Master', labelHi: 'शिक्षण शिक्षाशास्त्र महामंच', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t('TEACHER EDUCATION KNOWLEDGE CORE', 'शिक्षक शिक्षा ज्ञान केंद्र')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('Teaching Pedagogy & Educational Psychology Master', 'शिक्षण शिक्षाशास्त्र एवं बाल मनोविज्ञान महामंच')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('Child Development, Learning Theories, Inclusive Education, Assessment for Learning, and Subject Pedagogy for CTET, State TETs, KVS, and DSSSB.', 'बाल विकास, संज्ञानात्मक सिद्धांत, समावेशी शिक्षा, सीखने के लिए आकलन और भाषा शिक्षाशास्त्र का व्यवस्थित संकलन।')}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 dark:border-slate-800 scrollbar-thin">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="space-y-6">
        {filteredTopics.map(topic => (
          <div
            key={topic.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  {topic.category.replace('_', ' ').toUpperCase()}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  {language === 'hi' ? topic.titleHi : topic.title}
                </h3>
              </div>

              {topic.keyTheorists && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700 shrink-0">
                  <UserCheck className="w-4 h-4 text-purple-600" />
                  <span>Theorists: {topic.keyTheorists.join(', ')}</span>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? topic.descriptionHi : topic.description}
            </p>

            {/* Core Principles */}
            <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/60 space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-purple-900 dark:text-purple-300">
                Core Principles & Structural Tenets:
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                {topic.corePrinciples.map((pr, pIdx) => (
                  <li key={pIdx}>{pr}</li>
                ))}
              </ul>
            </div>

            {/* Classroom Application & Exam Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="font-bold text-xs uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>Classroom Application:</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {topic.classroomApplication}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="font-bold text-xs uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>High-Yield Examination Tips:</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  {topic.examTips.map((tip, tIdx) => (
                    <li key={tIdx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="text-xs text-slate-400">Target Exams: CTET, KVS, DSSSB, State TETs</span>
              <button
                onClick={() => onNavigate('practice-hub', { exam: 'teaching-pedagogy-master' })}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Practice Pedagogy Questions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
