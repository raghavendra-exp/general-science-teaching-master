import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  ExternalLink, 
  CheckCircle, 
  Heart,
  Globe,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface AboutDisclaimerPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const AboutDisclaimerPage: React.FC<AboutDisclaimerPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'About & Source Transparency', labelHi: 'परिचय एवं स्रोत पारदर्शिता', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-700">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{t('ETHICAL PREPARATION & SOURCE TRANSPARENCY', 'नैतिक तैयारी एवं स्रोत पारदर्शिता')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('About General • Science • Teaching Master', 'प्लेटफ़ॉर्म परिचय एवं कानूनी अस्वीकरण')}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {t(
            'India’s unified, bilingual, copyright-safe examination ecosystem designed for aspirants of SSC, CSIR-NET, IIT JAM, GATE, CUET, CTET, State TETs, KVS, and Teacher Recruitment examinations.',
            'प्रतियोगी परीक्षाओं की प्रामाणिक, द्विभाषी और पूर्णतः कॉपीराइट-सुरक्षित संपूर्ण तैयारी का खुला मंच।'
          )}
        </p>
      </div>

      {/* Statutory Legal Disclaimer Alert */}
      <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/80 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>{t('Statutory Non-Affiliation Disclaimer', 'वैधानिक गैर-संबद्धता अस्वीकरण')}</span>
        </div>
        <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
          {t(
            'GENERAL • SCIENCE • TEACHING MASTER is an independent open-access educational study and practice portal. This platform is NOT affiliated with, sponsored by, or officially endorsed by the Government of India, the National Testing Agency (NTA), the Central Board of Secondary Education (CBSE), the Kendriya Vidyalaya Sangathan (KVS), the Staff Selection Commission (SSC), or any State Public Service Commission.',
            'यह प्लेटफ़ॉर्म एक स्वतंत्र, खुला शैक्षणिक पोर्टल है। यह भारत सरकार, राष्ट्रीय परीक्षा एजेंसी (NTA), केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE), केंद्रीय विद्यालय संगठन (KVS), या कर्मचारी चयन आयोग (SSC) से किसी भी प्रकार से संबद्ध अथवा अधिकृत नहीं है।'
          )}
        </p>
        <p className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed font-medium">
          {t(
            'All examination names, trademarks, conducting body acronyms, and official symbols belong exclusively to their respective statutory owners. Candidates must always verify dates, eligibility norms, and official notifications directly on the designated governmental portals.',
            'सभी परीक्षा नाम, ट्रेडमार्क एवं लोगो उनके संबंधित विधिक स्वामियों के हैं। परीक्षा तिथियों व पात्रता हेतु आधिकारिक सरकारी वेबसाइट पर अवलोकन अनिवार्य है।'
          )}
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Copyright Safety */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            {t('100% Copyright-Safe Commitment', '100% कॉपीराइट-सुरक्षित प्रतिबद्धता')}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {t(
              'We strictly reject pirated PDFs, leaked question papers, or unauthorized scans. Recommended books link exclusively to authorized publisher stores (Arihant, Disha, Kiran, Pathfinder, McGraw Hill). NCERT textbook references link directly to official public repositories at ncert.nic.in.',
              'हम किसी भी प्रकार की पायरेटेड पीडीएफ या अनधिकृत सामग्री का पूर्ण बहिष्कार करते हैं। पुस्तकों के लिंक केवल प्रकाशकों के आधिकारिक स्टोर्स से जोड़े गए हैं।'
            )}
          </p>
        </div>

        {/* Question Labelling Integrity */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
            <CheckCircle className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            {t('Question Source Transparency', 'प्रश्न स्रोत सत्यनिष्ठा एवं पारदर्शिता')}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {t(
              'Every single question in our 10,000+ question bank is explicitly tagged with its pedigree: VERIFIED PYQ (authentic previous years paper), ORIGINAL (indigenously created curriculum-aligned question), or PYQ-STYLE (modeled on official patterns). We never present AI-generated questions as actual PYQs.',
              'प्रत्येक प्रश्न को VERIFIED PYQ, ORIGINAL अथवा PYQ-STYLE के रूप में स्पष्ट रूप से चिह्नित किया गया है ताकि अभ्यर्थी को प्रश्न की प्रमाणिकता का पूर्ण ज्ञान रहे।'
            )}
          </p>
        </div>
      </div>

      {/* Official Government Gateways */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Globe className="w-4 h-4 text-emerald-600" />
          <span>{t('Primary Official Examination Portals', 'प्राथमिक आधिकारिक सरकारी पोर्टल')}</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {[
            { name: 'CTET Official Portal', url: 'https://ctet.nic.in' },
            { name: 'NTA CSIR-UGC NET', url: 'https://csirnet.nta.ac.in' },
            { name: 'IIT JAM Official', url: 'https://jam.iitm.ac.in' },
            { name: 'NCERT Textbook Portal', url: 'https://ncert.nic.in' },
            { name: 'KVS Official Portal', url: 'https://kvsangathan.nic.in' },
            { name: 'NCTE Government of India', url: 'https://ncte.gov.in' },
            { name: 'SSC Official Portal', url: 'https://ssc.gov.in' },
            { name: 'UGC Official Portal', url: 'https://ugc.gov.in' }
          ].map((portal, pIdx) => (
            <a
              key={pIdx}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 flex items-center justify-between"
            >
              <span className="truncate">{portal.name}</span>
              <ExternalLink className="w-3 h-3 shrink-0 ml-1 opacity-60" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
