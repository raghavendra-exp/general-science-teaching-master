import { Question } from '../../types';

export const teachingRecruitmentQuestions: Question[] = [
  {
    id: 'kvs-ped-001',
    exam: 'kvs-prt-tgt-pgt',
    paper: 'Part III Perspectives on Education',
    subject: 'Perspectives on Education and Leadership',
    topic: 'NEP 2020 Curricular Structure',
    difficulty: 'Easy',
    question: 'According to the National Education Policy (NEP) 2020, what is the new pedagogical and curricular structure replacing the 10+2 system in Indian school education?',
    questionHi: 'राष्ट्रीय शिक्षा नीति (NEP) 2020 के अनुसार, भारतीय स्कूली शिक्षा में 10+2 प्रणाली के स्थान पर कौन सी नई शैक्षणिक व पाठ्यचर्या संरचना अपनाई गई है?',
    options: [
      '5+3+3+4 (Foundational, Preparatory, Middle, Secondary)',
      '5+3+2+4',
      '3+3+4+5',
      '5+4+3+3'
    ],
    optionsHi: [
      '5+3+3+4 (बुनियादी, प्रारंभिक, मध्य, माध्यमिक)',
      '5+3+2+4',
      '3+3+4+5',
      '5+4+3+3'
    ],
    answer: 0,
    explanation: 'NEP 2020 restructures school education into 5+3+3+4: Foundational Stage (5 yrs: ages 3-8, including 3 yrs Balvatika/Anganwadi + Classes 1-2), Preparatory Stage (3 yrs: ages 8-11, Classes 3-5), Middle Stage (3 yrs: ages 11-14, Classes 6-8), and Secondary Stage (4 yrs: ages 14-18, Classes 9-12).',
    explanationHi: 'एनईपी 2020 के तहत स्कूली शिक्षा को 5+3+3+4 के नए ढांचे में विभाजित किया गया है: बुनियादी (5 वर्ष), प्रारंभिक (3 वर्ष), मध्य (3 वर्ष) और माध्यमिक (4 वर्ष)।',
    sourceType: 'VERIFIED PYQ',
    source: 'KVS PRT Feb 2023 Shift 1 Q71',
    year: 2023,
    tags: ['KVS', 'NEP 2020', 'Curriculum', 'Pedagogy']
  },
  {
    id: 'dsssb-prt-001',
    exam: 'dsssb-teacher',
    paper: 'Section B (Discipline Concern)',
    subject: 'Educational Psychology & Pedagogy',
    topic: 'Bruner Discovery Learning',
    difficulty: 'Medium',
    question: 'In Jerome Bruner’s theory of cognitive representation, which mode of representation involves encoding and storing knowledge primarily through physical muscle actions and motor movements?',
    questionHi: 'जेरोम ब्रूनर के संज्ञानात्मक प्रतिनिधित्व के सिद्धांत में, ज्ञान को मुख्य रूप से शारीरिक गामक क्रियाओं एवं गतिविधियों के माध्यम से संचित करने वाली विधा कौन सी है?',
    options: [
      'Iconic representation (प्रतिमापरक)',
      'Enactive representation (सक्रिय / क्रियात्मक)',
      'Symbolic representation (प्रतीकात्मक)',
      'Operational representation'
    ],
    optionsHi: [
      'प्रतिमापरक प्रतिनिधित्व (Iconic)',
      'क्रियात्मक / संक्रियात्मक प्रतिनिधित्व (Enactive)',
      'प्रतीकात्मक प्रतिनिधित्व (Symbolic)',
      'संक्रियात्मक प्रतिनिधित्व'
    ],
    answer: 1,
    explanation: 'Bruner identified three modes: Enactive (action-based representation, learning by doing/movement), Iconic (image-based representation through pictures and sensory icons), and Symbolic (language, mathematical symbols, and abstract codes).',
    explanationHi: 'ब्रूनर के अनुसार क्रियात्मक विधा (Enactive Mode) में ज्ञान का निरूपण शारीरिक क्रियाओं और मांसपेशियों के संचालन द्वारा होता है (जैसे साइकिल चलाना, टाइपिंग)।',
    sourceType: 'VERIFIED PYQ',
    source: 'DSSSB Assistant Teacher Primary 2022 Q143',
    year: 2022,
    tags: ['DSSSB', 'Bruner', 'Cognitive Development', 'Section B']
  },
  {
    id: 'emrs-tgt-001',
    exam: 'emrs-recruitment',
    paper: 'Teaching Aptitude',
    subject: 'Teaching Aptitude',
    topic: 'Inclusive Classroom & Experiential Learning',
    difficulty: 'Medium',
    question: 'Which teaching strategy is most effective in promoting experiential learning and conceptual retention in science classrooms in tribal residential schools (EMRS)?',
    questionHi: 'जनजातीय आवासीय विद्यालयों (EMRS) में विज्ञान कक्षा में अनुभवात्मक अधिगम और दीर्घकालिक समझ को बढ़ावा देने हेतु सबसे प्रभावी शिक्षण रणनीति कौन सी है?',
    options: [
      'Extensive rote memorization of textbook definitions and formulas.',
      'Hands-on field observations, local indigenous environmental exploration, and interactive inquiry-based experimentation.',
      'Passive listening to one-way lecture delivery without visual or practical aids.',
      'Conducting weekly pen-and-paper speed tests.'
    ],
    optionsHi: [
      'पाठ्यपुस्तक की परिभाषाओं और सूत्रों का रटना।',
      'स्थानीय पर्यावरणीय अन्वेषण, प्रत्यक्ष प्रयोग और पूछताछ-आधारित गतिविधियां।',
      'बिना किसी सहायक सामग्री के केवल एकतरफा व्याख्यान सुनना।',
      'साप्ताहिक गति-परीक्षण आयोजित करना।'
    ],
    answer: 1,
    explanation: 'Experiential learning rooted in the local cultural and environmental context of tribal students fosters deeper cognitive connections and long-term retention through active discovery and inquiry.',
    explanationHi: 'स्थानीय परिवेश से जुड़ा प्रत्यक्ष अनुभव एवं प्रयोग आधारित शिक्षण छात्रों में वैज्ञानिक दृष्टिकोण और सक्रिय सहभागिता का विकास करता है।',
    sourceType: 'ORIGINAL',
    source: 'EMRS Pedagogical Architecture Specification',
    year: 2024,
    tags: ['EMRS', 'Experiential Learning', 'Pedagogy']
  }
];
