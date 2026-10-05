import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  CheckCircle, 
  GraduationCap, 
  Search, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ncertCurriculum } from '../data/ncert/ncertCurriculum';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface NcertMasterPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialSubject?: string;
}

export const NcertMasterPage: React.FC<NcertMasterPageProps> = ({ onNavigate, initialSubject }) => {
  const { language, t } = useLanguage();
  const [selectedClass, setSelectedClass] = useState<number | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const classLevels = [6, 7, 8, 9, 10, 11, 12];
  const subjects = ['all', 'Science', 'Physics', 'Chemistry', 'Biology'];

  const filteredChapters = ncertCurriculum.filter(ch => {
    if (selectedClass !== 'all' && ch.classLevel !== selectedClass) return false;
    if (selectedSubject !== 'all' && ch.subject.toLowerCase() !== selectedSubject.toLowerCase()) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const match = ch.chapterName.toLowerCase().includes(q) ||
                    ch.chapterNameHi.includes(q) ||
                    ch.keyConcepts.some(c => c.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'NCERT Knowledge Base', labelHi: 'एनसीईआरटी महामंच', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('NCERT FOUNDATIONAL KNOWLEDGE BASE', 'एनसीईआरटी आधारभूत ज्ञान कोष')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('NCERT Curriculum & Chapter Concept Mapping', 'एनसीईआरटी पाठ्यक्रम एवं अध्याय अवधारणा मैपिंग')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('Classes 6 to 12 Science, Physics, Chemistry, and Biology mapped directly to CTET, CSIR-NET, CUET-UG, and Teaching examinations.', 'कक्षा 6 से 12 तक के विज्ञान विषयों के अध्यायों की परीक्षा-वार अवधारणाएं, विगत प्रश्नों की संख्या व आधिकारिक पाठ्यपुस्तक लिंक।')}
          </p>
        </div>

        {/* Search & Filters */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('Search NCERT chapter or concept (e.g. Photosynthesis, Acids, Cell)...', 'अध्याय अथवा संकल्पना खोजें (जैसे प्रकाश संश्लेषण, अम्ल)...')}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-slate-100"
            />
          </div>

          {/* Class Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedClass('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedClass === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              All Classes
            </button>
            {classLevels.map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedClass(lvl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedClass === lvl
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Class {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-thin">
          {subjects.map(s => (
            <button
              key={s}
              onClick={() => setSelectedSubject(s)}
              className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-colors ${
                selectedSubject === s
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {s === 'all' ? 'All Subjects' : s}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredChapters.map((ch, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-500/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Class {ch.classLevel} • {ch.subject}
                </span>
                <span className="text-[11px] font-semibold text-emerald-600">
                  {ch.linkedPyqCount} Linked PYQs
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-1">
                Ch {ch.chapterNumber}: {language === 'hi' ? ch.chapterNameHi : ch.chapterName}
              </h3>

              {/* Key concepts */}
              <div className="my-3 space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Core Concepts:</div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  {ch.keyConcepts.map((c, cIdx) => (
                    <li key={cIdx}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Exam Relevance */}
              <div className="flex flex-wrap gap-1 mb-4">
                {ch.examRelevance.map((ex, exIdx) => (
                  <span key={exIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {ex}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <a
                href={ch.officialPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read NCERT Chapter</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onNavigate('practice-hub', { subject: ch.subject })}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold inline-flex items-center gap-1 transition-colors"
              >
                <span>Practice PYQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
