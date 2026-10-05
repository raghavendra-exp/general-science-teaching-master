import React from 'react';
import { 
  Home, 
  Compass, 
  Layers, 
  Atom, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  HelpCircle, 
  Award, 
  BarChart2, 
  AlertCircle, 
  Zap, 
  Sliders, 
  Calculator, 
  Calendar, 
  Bell, 
  Newspaper, 
  Sparkles,
  ChevronRight,
  Bookmark,
  Info
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  id: string;
  label: string;
  labelHi: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  page?: string;
  params?: Record<string, string>;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  isOpen,
  onClose
}) => {
  const { language, t } = useLanguage();

  const handleNav = (page: string, params?: Record<string, string>) => {
    onNavigate(page, params);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const navSections: NavSection[] = [
    {
      title: t('Core Navigation', 'मुख्य नेविगेशन'),
      items: [
        { id: 'home', label: 'Home Dashboard', labelHi: 'होम डैशबोर्ड', icon: Home },
        { id: 'eligibility-checker', label: 'Which Exam Can I Apply For?', labelHi: 'मैं किस परीक्षा हेतु पात्र हूँ?', icon: Compass, badge: 'Popular' },
        { id: 'exams-directory', label: 'All Exams Directory', labelHi: 'सभी परीक्षा निर्देशिका', icon: Layers }
      ]
    },
    {
      title: t('Exam Categories', 'परीक्षा संवर्ग'),
      items: [
        { id: 'general-exams', label: 'General Competitive (SSC, PSC)', labelHi: 'सामान्य प्रतियोगी (SSC, राज्य PSC)', icon: Award, page: 'exams-directory', params: { category: 'general' } },
        { id: 'science-exams', label: 'Science Entrance (CSIR, JAM, GATE, CUET)', labelHi: 'विज्ञान प्रवेश (CSIR, जैम, गेट, CUET)', icon: Atom, page: 'exams-directory', params: { category: 'science' } },
        { id: 'teaching-eligibility', label: 'Teaching Eligibility (CTET, State TETs)', labelHi: 'शिक्षक पात्रता (CTET, राज्य TETs)', icon: GraduationCap, page: 'exams-directory', params: { category: 'teaching_eligibility' } },
        { id: 'teacher-recruitment', label: 'Teacher Recruitment (KVS, DSSSB, NVS, EMRS)', labelHi: 'शिक्षक भर्ती (KVS, DSSSB, EMRS)', icon: BookOpen, page: 'exams-directory', params: { category: 'teaching_recruitment' } }
      ]
    },
    {
      title: t('Knowledge Bases', 'ज्ञान भंडार (Knowledge Bases)'),
      items: [
        { id: 'teaching-pedagogy', label: 'Teaching Pedagogy Master', labelHi: 'शिक्षण शिक्षाशास्त्र महामंच', icon: GraduationCap },
        { id: 'science-concepts', label: 'Science Concepts Master', labelHi: 'विज्ञान अवधारणा महामंच', icon: Atom },
        { id: 'ncert-master', label: 'NCERT Master (Classes 1–12)', labelHi: 'एनसीईआरटी महामंच (कक्षा 1-12)', icon: BookOpen },
        { id: 'gk-master', label: 'General Studies & Static GK', labelHi: 'सामान्य अध्ययन व स्टैटिक जीके', icon: Layers },
        { id: 'books-library', label: 'Complete Book Library', labelHi: 'प्रमाणिक पुस्तक पुस्तकालय', icon: BookOpen }
      ]
    },
    {
      title: t('Practice & Testing', 'अभ्यास एवं मॉक टेस्ट'),
      items: [
        { id: 'practice-hub', label: 'Practice Engine', labelHi: 'अभ्यास इंजन', icon: CheckCircle },
        { id: 'mock-tests', label: 'Mock Test Simulator (CBT)', labelHi: 'मॉक टेस्ट सिम्युलेटर (CBT)', icon: Award, badge: 'Live CBT' },
        { id: 'pyq-bank', label: 'PYQ Database (Verified)', labelHi: 'विगत वर्ष प्रश्न (PYQ डेटाबेस)', icon: FileTextIcon },
        { id: 'question-bank', label: '10,000+ Question Bank', labelHi: '10,000+ प्रश्न बैंक', icon: HelpCircle }
      ]
    },
    {
      title: t('Revision & Productivity', 'रिवीजन एवं गति सुधार'),
      items: [
        { id: 'analytics-dashboard', label: 'Performance Analytics', labelHi: 'प्रदर्शन विश्लेषण (Analytics)', icon: BarChart2 },
        { id: 'error-notebook', label: 'Error Notebook & Mistake Tracker', labelHi: 'त्रुटि नोटबुक (गलतियों का विश्लेषण)', icon: AlertCircle },
        { id: 'speed-trainer', label: 'Speed Lab (Speed Trainer)', labelHi: 'स्पीड लैब (गति सुधार ट्रेनर)', icon: Zap },
        { id: 'shortcut-lab', label: 'Shortcut Lab', labelHi: 'शॉर्टकट लैब (फास्ट मेथड्स)', icon: Sliders },
        { id: 'formula-master', label: 'Formula Master', labelHi: 'फॉर्मूला महामंच (सूत्र पुस्तिका)', icon: Calculator },
        { id: 'flashcards', label: 'Flashcards (Spaced Repetition)', labelHi: 'फ्लैशकार्ड्स (स्मरण तंत्र)', icon: Sparkles },
        { id: 'study-planner', label: 'Study Planner & Timetable', labelHi: 'अध्ययन योजनाकार (Study Planner)', icon: Calendar },
        { id: 'career-explorer', label: 'Career Explorer Pathways', labelHi: 'करियर मार्गदर्शक (Career Explorer)', icon: Compass }
      ]
    },
    {
      title: t('Updates & Intelligence', 'अद्यतन एवं समाचार'),
      items: [
        { id: 'notifications-tracker', label: 'Latest Exam Notifications Tracker', labelHi: 'नवीनतम परीक्षा सूचनाएं व कैलेंडर', icon: Bell, badge: 'Live' },
        { id: 'education-news', label: 'Education News Lab (NEP, NCTE, UGC)', labelHi: 'शिक्षा समाचार लैब (NEP, UGC)', icon: Newspaper },
        { id: 'current-affairs', label: 'Current Affairs Engine (12-Month)', labelHi: 'समसामयिकी इंजन (12 माह)', icon: Newspaper },
        { id: 'bookmarks', label: 'Saved Bookmarks', labelHi: 'सुरक्षित प्रश्न व नोट्स', icon: Bookmark },
        { id: 'about-disclaimer', label: 'About & Source Transparency', labelHi: 'स्रोत पारदर्शिता व अस्वीकरण', icon: Info }
      ]
    }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs lg:hidden animate-in fade-in"
          aria-hidden="true"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6 scrollbar-thin">
          {navSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2.5 mb-1.5">
                {section.title}
              </h3>
              <div className="space-y-0.5">
                {section.items.map(item => {
                  const Icon = item.icon;
                  const label = language === 'hi' ? item.labelHi : item.label;
                  const targetPage = item.page || item.id;
                  const isActive = currentPage === targetPage;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(targetPage, item.params)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all group ${
                        isActive
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold shadow-2xs border border-emerald-200/80 dark:border-emerald-800/60'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                          isActive 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : 'text-slate-400 dark:text-slate-500 group-hover:text-emerald-500'
                        }`} />
                        <span className="truncate">{label}</span>
                      </div>
                      {item.badge ? (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500 text-white shrink-0">
                          {item.badge}
                        </span>
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[11px] leading-tight">
            <div className="font-semibold mb-0.5">🇮🇳 100% Legitimate & Copyright-Safe</div>
            <div className="text-[10px] text-slate-600 dark:text-slate-400">
              {language === 'hi' 
                ? 'सरकारी पोर्टलों व प्रमाणिक स्रोतों पर आधारित।'
                : 'Direct official notifications, syllabi & verified sources.'}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const FileTextIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);
