import React, { useState } from 'react';
import { 
  Atom, 
  Layers, 
  HelpCircle, 
  Calculator, 
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { scienceConceptsData, getScienceConceptsByDiscipline } from '../data/science/scienceConceptsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface ScienceConceptsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const ScienceConceptsPage: React.FC<ScienceConceptsPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  const disciplines = [
    { id: 'all', label: 'All Disciplines', labelHi: 'सभी विज्ञान' },
    { id: 'physics', label: 'Physics', labelHi: 'भौतिक विज्ञान' },
    { id: 'chemistry', label: 'Chemistry', labelHi: 'रसायन विज्ञान' },
    { id: 'biology', label: 'Biology', labelHi: 'जीव विज्ञान' },
    { id: 'mathematics', label: 'Mathematics', labelHi: 'गणित' }
  ];

  const filteredConcepts = selectedDiscipline === 'all'
    ? scienceConceptsData
    : getScienceConceptsByDiscipline(selectedDiscipline);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Science Concepts Master', labelHi: 'विज्ञान अवधारणा महामंच', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold">
            <Atom className="w-3.5 h-3.5" />
            <span>{t('SCIENCE CONCEPTS & FORMULA FOUNDATIONS', 'वैज्ञानिक अवधारणाएं एवं सूत्र कोष')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('Science Concepts Master', 'विज्ञान अवधारणा एवं सिद्धांत महामंच')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('Core laws, derivations, formulas, and reaction mechanisms for CSIR-UGC NET, IIT JAM, GATE, and CUET-UG/PG Science.', 'भौतिकी, रसायन विज्ञान, जीवविज्ञान और गणित के मूलभूत सिद्धांतों, सूत्रों और रासायनिक नियमों का विस्तृत संग्रह।')}
          </p>
        </div>

        {/* Discipline Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 dark:border-slate-800 scrollbar-thin">
          {disciplines.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDiscipline(d.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedDiscipline === d.id
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {language === 'hi' ? d.labelHi : d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Concepts List */}
      <div className="space-y-6">
        {filteredConcepts.map(concept => (
          <div
            key={concept.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  {concept.discipline.toUpperCase()}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  {language === 'hi' ? concept.titleHi : concept.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1">
                {concept.targetExams.map((ex, exIdx) => (
                  <span key={exIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {ex}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? concept.summaryHi : concept.summary}
            </p>

            {/* Formulas Box */}
            {concept.formulas && concept.formulas.length > 0 && (
              <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/60 space-y-2.5">
                <div className="font-bold text-xs uppercase tracking-wider text-teal-900 dark:text-teal-300 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  <span>Essential Mathematical Formulas & Equations:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {concept.formulas.map((f, fIdx) => (
                    <div key={fIdx} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-teal-200/60 dark:border-teal-800/60 space-y-1">
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{f.name}</div>
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-slate-50 dark:bg-slate-800/80 p-2 rounded-lg">
                        {f.formula}
                      </div>
                      <div className="text-[11px] text-slate-500">{f.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fundamental Laws or Key Reactions */}
            {concept.keyReactionsOrLaws && concept.keyReactionsOrLaws.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Fundamental Postulates & Named Mechanisms:
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 leading-relaxed">
                  {concept.keyReactionsOrLaws.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="text-xs text-slate-500">Verified per official CSIR & IIT JAM curricula</span>
              <button
                onClick={() => onNavigate('practice-hub', { exam: 'science-exams-master' })}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Practice Science Questions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
