import React from 'react';
import { ShieldCheck, ExternalLink, GraduationCap, Code } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-24 lg:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Platform Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-sm">
                EXAMS INDIA MASTER
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              {language === 'hi' 
                ? 'सामान्य प्रतियोगी, विज्ञान प्रवेश और शिक्षण परीक्षाओं की एकीकृत तैयारी हेतु भारत का संपूर्ण, द्विभाषी एवं प्रमाणिक परीक्षा मंच।'
                : 'India’s integrated preparation ecosystem covering General Competitive, Science Entrance & Teaching examinations with verified official sources.'}
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Copyright-Safe & Official Data</span>
            </div>
          </div>

          {/* Col 2: Exam Sectors */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {t('Exam Categories', 'परीक्षा संवर्ग')}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => handleNav('exams-directory')} className="hover:text-emerald-400 transition-colors">
                  {t('CTET & State TETs', 'सीटीईटी व राज्य टीईटी')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('exams-directory')} className="hover:text-emerald-400 transition-colors">
                  {t('CSIR-UGC NET & GATE Science', 'सीएसआईआर नेट व गेट साइंस')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('exams-directory')} className="hover:text-emerald-400 transition-colors">
                  {t('IIT JAM & CUET-PG Science', 'आईआईटी जैम व सीयूईटी साइंस')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('exams-directory')} className="hover:text-emerald-400 transition-colors">
                  {t('KVS, NVS & DSSSB Teacher Recruitment', 'केवीएस, एनवीएस व डीएसएसएसबी भर्ती')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('exams-directory')} className="hover:text-emerald-400 transition-colors">
                  {t('SSC CGL & CHSL General Aptitude', 'एसएससी सामान्य प्रतियोगी')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge & Practice */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {t('Study & Practice Engine', 'अध्ययन व अभ्यास')}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => handleNav('teaching-pedagogy')} className="hover:text-emerald-400 transition-colors">
                  {t('Pedagogy Master (Piaget, Vygotsky)', 'शिक्षाशास्त्र महामंच')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('ncert-master')} className="hover:text-emerald-400 transition-colors">
                  {t('NCERT Master (Classes 6–12)', 'एनसीईआरटी महामंच')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('mock-tests')} className="hover:text-emerald-400 transition-colors">
                  {t('CBT Mock Test Simulator', 'CBT मॉक टेस्ट सिम्युलेटर')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('question-bank')} className="hover:text-emerald-400 transition-colors">
                  {t('Verified PYQ Database', 'सत्यापित विगत वर्ष प्रश्न')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shortcut-lab')} className="hover:text-emerald-400 transition-colors">
                  {t('Shortcut Lab & Speed Trainer', 'शॉर्टकट लैब व स्पीड ट्रेनर')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Transparency */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {t('Transparency & Compliance', 'पारदर्शिता एवं अनुपालन')}
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              {language === 'hi' 
                ? 'यह पोर्टल किसी भी प्रकार की पायरेटेड पीडीएफ या अनधिकृत सामग्री का समर्थन नहीं करता है। सभी सामग्री केवल खुले शैक्षणिक स्रोतों पर आधारित है।'
                : 'No copyrighted paid materials or pirated PDFs are hosted on this platform. All concepts, questions, and book references are strictly educational and link only to legitimate publishers.'}
            </p>
            <a 
              href="https://github.com/raghavendra-exp/general-science-teaching-master"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
            >
              <Code className="w-4 h-4 text-emerald-400" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-[11px]">
          <div>
            © 2026 GENERAL • SCIENCE • TEACHING EXAMS INDIA. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-500 font-semibold">Bilingual (English + हिंदी)</span>
            <span>•</span>
            <span>PWA Ready</span>
            <span>•</span>
            <span>GitHub Pages Compatible</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
