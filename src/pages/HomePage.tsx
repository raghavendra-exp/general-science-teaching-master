import React from 'react';
import { 
  GraduationCap, 
  Atom, 
  Award, 
  BookOpen, 
  Compass, 
  CheckCircle, 
  Zap, 
  Sliders, 
  Calculator, 
  ArrowRight, 
  Bell, 
  Sparkles,
  Search,
  Layers,
  HelpCircle,
  BarChart2,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allExams } from '../data/exams';
import { notificationsData } from '../data/notifications/notificationsData';
import { educationNews } from '../data/currentAffairs/educationNews';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSearch }) => {
  const { language, t } = useLanguage();

  const examCategories = [
    {
      id: 'general',
      title: 'General Competitive Exams',
      titleHi: 'सामान्य प्रतियोगी परीक्षाएं',
      subtitle: 'SSC CGL • SSC CHSL • State PSCs • Subordinate Services',
      subtitleHi: 'एसएससी सीजीएल • सीएचएसएल • राज्य पीसीएस • अधीनस्थ सेवाएं',
      icon: Award,
      badge: 'SSC & PSC',
      color: 'from-blue-600 to-indigo-700',
      count: '3+ Major National Exams'
    },
    {
      id: 'science',
      title: 'Science Entrance & Eligibility Exams',
      titleHi: 'विज्ञान प्रवेश एवं पात्रता परीक्षाएं',
      subtitle: 'CSIR-UGC NET • IIT JAM • GATE • CUET Science • IAT • NEST • JEST',
      subtitleHi: 'सीएसआईआर नेट • आईआईटी जैम • गेट • सीयूईटी साइंस • आईआईएसईआर',
      icon: Atom,
      badge: 'Science Master',
      color: 'from-emerald-600 to-teal-700',
      count: '8+ Premier Science Exams'
    },
    {
      id: 'teaching_eligibility',
      title: 'Teaching Eligibility Exams (TETs)',
      titleHi: 'शिक्षक पात्रता परीक्षाएं (TETs)',
      subtitle: 'CTET (Paper I & II) • UPTET • REET • HTET • All State TETs',
      subtitleHi: 'सीटीईटी (पेपर 1 व 2) • यूपीटीईटी • रीट • एचटेट • राज्य टीईटी',
      icon: GraduationCap,
      badge: 'CTET & TETs',
      color: 'from-amber-600 to-orange-700',
      count: '10+ State & Central TETs'
    },
    {
      id: 'teaching_recruitment',
      title: 'Teacher Recruitment Exams',
      titleHi: 'शिक्षक भर्ती परीक्षाएं (Recruitment)',
      subtitle: 'KVS (PRT/TGT/PGT) • NVS • DSSSB • EMRS • State Recruitment',
      subtitleHi: 'केवीएस (पीआरटी/टीजीटी/पीजीटी) • एनवीएस • डीएसएसएसबी • ईएमआरएस',
      icon: BookOpen,
      badge: 'PRT • TGT • PGT',
      color: 'from-purple-600 to-fuchsia-700',
      count: 'PRT, TGT & PGT Cadres'
    }
  ];

  const zeroToMasterLevels = [
    { lvl: '0', title: 'Choose Exam', titleHi: 'परीक्षा चुनें' },
    { lvl: '1', title: 'Check Eligibility', titleHi: 'पात्रता जांचें' },
    { lvl: '2', title: 'Notification', titleHi: 'अधिसूचना' },
    { lvl: '3', title: 'Syllabus', titleHi: 'पाठ्यक्रम' },
    { lvl: '4', title: 'Foundation', titleHi: 'बुनियाद' },
    { lvl: '5', title: 'Concepts', titleHi: 'अवधारणाएं' },
    { lvl: '6', title: 'NCERT / Books', titleHi: 'एनसीईआरटी / बुक्स' },
    { lvl: '7', title: 'PYQs', titleHi: 'विगत प्रश्न' },
    { lvl: '8', title: 'Practice', titleHi: 'अभ्यास' },
    { lvl: '9', title: 'Mock Tests', titleHi: 'मॉक टेस्ट' },
    { lvl: '10', title: 'Revision', titleHi: 'रिवीजन' },
    { lvl: '11', title: 'Final Mastery', titleHi: 'सफलता' }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('ALL-IN-ONE INDIAN EXAMINATION ECOSYSTEM', 'अखिल भारतीय परीक्षा महामंच')}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            {language === 'hi' ? (
              <>
                सामान्य <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">•</span> विज्ञान <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">•</span> शिक्षण परीक्षाएं भारत
              </>
            ) : (
              <>
                GENERAL <span className="text-emerald-400">•</span> SCIENCE <span className="text-emerald-400">•</span> TEACHING EXAMS INDIA
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'एसएससी, राज्य सेवा, सीएसआईआर नेट, आईआईटी जैम, गेट, सीयूईटी, सीटीईटी, राज्य टीईटी, केवीएस, डीएसएसएसबी और ईएमआरएस की संपूर्ण, आधिकारिक एवं वैज्ञानिक तैयारी।'
              : 'Complete preparation platform covering SSC, State PSC, CSIR-NET, IIT JAM, GATE, CUET-UG/PG, CTET, State TETs, KVS, DSSSB, and EMRS with authentic syllabi, NCERT mapping, verified PYQs, and CBT mock tests.'}
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('eligibility-checker')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-102"
            >
              <Compass className="w-4 h-4" />
              <span>{t('Which Exam Can I Apply For?', 'मेरी पात्रता जांचें (Eligibility)')}</span>
            </button>

            <button
              onClick={() => onNavigate('mock-tests')}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-xs flex items-center gap-2 transition-all"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{t('Launch CBT Mock Test', 'CBT मॉक टेस्ट प्रारंभ करें')}</span>
            </button>

            <button
              onClick={onOpenSearch}
              className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 font-medium text-xs sm:text-sm border border-slate-700 flex items-center gap-2 transition-colors"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span>{t('Search Platform (Ctrl+K)', 'खोजें (Ctrl+K)')}</span>
            </button>
          </div>
        </div>

        {/* Live notification ticker */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-300 overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-1.5 font-bold text-amber-400 shrink-0 uppercase tracking-wider text-[11px]">
            <Bell className="w-3.5 h-3.5 animate-bounce" />
            <span>{t('Latest Update:', 'ताज़ा अपडेट:')}</span>
          </div>
          <div className="truncate text-slate-200">
            {notificationsData[0]?.headline} • {notificationsData[0]?.date}
          </div>
          <button
            onClick={() => onNavigate('notifications-tracker')}
            className="ml-auto text-emerald-400 hover:underline shrink-0 font-semibold text-[11px]"
          >
            {t('View All (6+)', 'सभी देखें')} →
          </button>
        </div>
      </section>

      {/* 4 Major Exam Categories */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {t('Explore by Examination Category', 'परीक्षा संवर्ग के अनुसार खोजें')}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t('Select your preparation category for specific syllabus, patterns, PYQs & mock tests', 'विशिष्ट पाठ्यक्रम, पैटर्न, विगत प्रश्न व मॉक टेस्ट हेतु श्रेणी चुनें')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('exams-directory')}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>{t('View All Exams', 'सभी परीक्षाएं')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {examCategories.map(cat => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onNavigate('exams-directory', { category: cat.id })}
                className="group relative cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {language === 'hi' ? cat.titleHi : cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                    {language === 'hi' ? cat.subtitleHi : cat.subtitle}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>{cat.count}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Zero to Master 11-Level Roadmap */}
      <section className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-emerald-950/40 dark:to-slate-900 rounded-3xl p-6 sm:p-8 border border-emerald-200 dark:border-emerald-900/60 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('Systematic Preparation Architecture', 'वैज्ञानिक तैयारी रूपरेखा')}</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {t('Zero-to-Master 11-Stage Examination Journey', 'शून्य से शिखर: 11-स्तरीय तैयारी रोडमैप')}
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
            {t('Follow this structured sequence for guaranteed conceptual mastery and top ranks.', 'शीर्ष रैंक प्राप्त करने हेतु इस क्रमबद्ध तैयारी प्रणाली का पालन करें।')}
          </span>
        </div>

        {/* Level steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
          {zeroToMasterLevels.map(item => (
            <div
              key={item.lvl}
              className="bg-white dark:bg-slate-900/80 rounded-xl p-3 border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs hover:border-emerald-500 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                {item.lvl}
              </div>
              <div className="truncate">
                <div className="text-[10px] uppercase font-bold text-slate-400">Level {item.lvl}</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  {language === 'hi' ? item.titleHi : item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Tool Hubs (Grid of Essential Engines) */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('Specialized Preparation Engines & Labs', 'विशिष्ट तैयारी इंजन एवं लैब्स')}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t('Interactive modules built strictly per latest competitive patterns', 'नवीनतम प्रतियोगी प्रारूप पर आधारित संवादात्मक मॉड्यूल')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Tool 1: Eligibility Checker */}
          <div
            onClick={() => onNavigate('eligibility-checker')}
            className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              {t('Which Exam Can I Apply For?', 'पात्रता कैलकुलेटर (Eligibility)')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {t('Input your DoB, degree, percentage, and teaching qualifications to instantly calculate matching exams with category age relaxations.', 'जन्म तिथि, डिग्री और शिक्षण योग्यता दर्ज कर तुरंत अपनी योग्य परीक्षाएं जांचें।')}
            </p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              {t('Check Eligibility Now', 'अभी पात्रता जांचें')} →
            </span>
          </div>

          {/* Tool 2: Teaching Pedagogy Master */}
          <div
            onClick={() => onNavigate('teaching-pedagogy')}
            className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400">
              {t('Teaching Pedagogy Master', 'शिक्षण शिक्षाशास्त्र महामंच')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {t('Child Development, Piaget, Vygotsky, Kohlberg, Bruner, Inclusive Education, RPwD Act 2016, and CCE evaluation.', 'बाल विकास, पियाजे, वायगोत्स्की, समावेशी शिक्षा, और मूल्यांकन का गहन विश्लेषण।')}
            </p>
            <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1">
              {t('Explore Pedagogy Topics', 'शिक्षाशास्त्र पढ़ें')} →
            </span>
          </div>

          {/* Tool 3: NCERT Knowledge Base */}
          <div
            onClick={() => onNavigate('ncert-master')}
            className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {t('NCERT Master (Classes 1–12)', 'एनसीईआरटी महामंच (1-12)')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {t('Chapter-by-chapter mapping for Science, Mathematics, Physics, Chemistry, Biology, and Social Studies linked to real PYQs.', 'कक्षा 1 से 12 तक विज्ञान, गणित और सामाजिक विज्ञान के अध्यायों की परीक्षा-वार मैपिंग।')}
            </p>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
              {t('Browse NCERT Chapters', 'एनसीईआरटी अध्याय देखें')} →
            </span>
          </div>

          {/* Tool 4: CBT Mock Test Simulator */}
          <div
            onClick={() => onNavigate('mock-tests')}
            className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center mb-3">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400">
              {t('CBT Mock Test Simulator', 'CBT मॉक टेस्ट सिम्युलेटर')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {t('Authentic NTA/CBSE test interface with real countdown timer, question palette colors, section navigation, and negative marking.', 'वास्तविक परीक्षा जैसा माहौल, उलटी गिनती टाइमर, प्रश्न पैलेट और नकारात्मक अंकन गणना।')}
            </p>
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
              {t('Start Full Mock Test', 'मॉक टेस्ट शुरू करें')} →
            </span>
          </div>

          {/* Tool 5: Error Notebook */}
          <div
            onClick={() => onNavigate('error-notebook')}
            className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-400">
              {t('Error Notebook & Mistake Tracker', 'त्रुटि नोटबुक (गलती ट्रैकर)')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {t('Classify mistakes into Conceptual, Calculation, Memory, Misread, Guess, or Time Pressure with spaced repetition schedules.', 'अपनी गलतियों को वैचारिक, गणना, स्मृति या जल्दबाजी में वर्गीकृत कर सुधारें।')}
            </p>
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-1">
              {t('Open Error Notebook', 'त्रुटि नोटबुक खोलें')} →
            </span>
          </div>

          {/* Tool 6: Speed Lab & Shortcut Lab */}
          <div
            onClick={() => onNavigate('speed-trainer')}
            className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              {t('Speed Lab & Shortcut Trainer', 'स्पीड लैब एवं शॉर्टकट ट्रेनर')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {t('Mental math trainers, Alligation shortcuts, percentage tricks, and formula recall drills to maximize speed.', 'मानसिक गणना, अनुपात-मिश्रण ट्रिक्स और त्वरित फॉर्मूला रिकॉल से गति में सुधार करें।')}
            </p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              {t('Train Your Speed', 'गति सुधारें')} →
            </span>
          </div>
        </div>
      </section>

      {/* Education News Lab Section */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              NEP
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {t('Education News Lab', 'शिक्षा समाचार लैब')}
              </h2>
              <p className="text-xs text-slate-500">
                {t('Tracking NEP 2020, NCTE Regulations, UGC Reforms, NCERT & Teacher Eligibility', 'एनईपी 2020, एनसीटीई, यूजीसी और शिक्षक भर्ती अद्यतन')}
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('education-news')}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            {t('View All News', 'सभी समाचार')} →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationNews.slice(0, 2).map(news => (
            <div
              key={news.id}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <span className="font-semibold text-teal-600 dark:text-teal-400">{news.source}</span>
                  <span>{news.date}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-2">
                  {language === 'hi' ? news.headlineHi : news.headline}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {language === 'hi' ? news.summaryHi : news.summary}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Relevance: {news.examRelevance.slice(0, 2).join(', ')}</span>
                <span className="text-emerald-600 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">10,000+</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('Curriculum Questions', 'पाठ्यक्रम प्रश्न')}</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400">15+</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('Major Examinations', 'प्रमुख राष्ट्रीय परीक्षाएं')}</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl font-black text-purple-600 dark:text-purple-400">1–12</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('NCERT Class Chapters', 'एनसीईआरटी कक्षाएं')}</div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400">100%</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('Official Verified Data', 'आधिकारिक सत्यापित डेटा')}</div>
        </div>
      </section>
    </div>
  );
};
