import { FlashcardItem } from '../../types';

export const flashcardsData: FlashcardItem[] = [
  // Pedagogy & Psychology
  {
    id: 'fc-ped-01',
    category: 'Pedagogy',
    front: 'What is the "Zone of Proximal Development" (ZPD) according to Lev Vygotsky?',
    frontHi: 'लेव वायगोत्स्की के अनुसार "समीपस्थ विकास का क्षेत्र" (ZPD) क्या है?',
    back: 'The distance between the actual developmental level determined by independent problem solving and the level of potential development determined through problem-solving under adult guidance or in collaboration with more capable peers.',
    backHi: 'स्वतंत्र रूप से समस्या समाधान करने की वास्तविक क्षमता और किसी वयस्क अथवा सक्षम साथी के मार्गदर्शन में समस्या समाधान करने की संभावित क्षमता के बीच का अंतराल।',
    examRelevance: 'CTET, KVS, DSSSB, State TETs'
  },
  {
    id: 'fc-ped-02',
    category: 'Pedagogy',
    front: 'What is the difference between "Assimilation" and "Accommodation" in Piaget’s theory?',
    frontHi: 'पियाजे के सिद्धांत में आत्मसातीकरण (Assimilation) और समायोजन (Accommodation) में क्या अंतर है?',
    back: 'Assimilation incorporates new information into existing cognitive schemas without altering them. Accommodation modifies existing schemas or creates brand new schemas when new information contradicts existing understanding.',
    backHi: 'आत्मसातीकरण में नई सूचना को बिना बदलाव किए पूर्व ज्ञान में शामिल किया जाता है; समायोजन में नई सूचना के अनुसार पुरानी अवधारणाओं या स्कीमा में संशोधन किया जाता है।',
    examRelevance: 'CTET, REET, UPTET, KVS'
  },
  {
    id: 'fc-ped-03',
    category: 'Pedagogy',
    front: 'What does the term "Cephalocaudal Trend" mean in child motor development?',
    frontHi: 'बाल विकास में "मस्तकाधोमुखी प्रवृत्ति" (Cephalocaudal Trend) का क्या अर्थ है?',
    back: 'Motor and physical development progresses from the head downwards toward the feet (head control -> sitting -> crawling -> standing -> walking).',
    backHi: 'शारीरिक व गामक विकास सिर से पैर की दिशा में होता है (पहले सिर पर नियंत्रण, फिर धड़, और अंत में पैरों पर नियंत्रण)।',
    examRelevance: 'CTET Paper I & II CDP'
  },

  // Science Flashcards
  {
    id: 'fc-sci-01',
    category: 'Science',
    front: 'What is the De Broglie wavelength formula for a matter particle?',
    frontHi: 'द्रव्य तरंगों के लिए डी ब्रोग्ली तरंगदैर्घ्य का सूत्र क्या है?',
    back: 'lambda = h / p = h / (m · v) = h / sqrt(2 · m · E), where h is Planck’s constant and p is linear momentum.',
    backHi: 'lambda = h / p = h / (m · v) = h / sqrt(2 · m · E), जहाँ h प्लांक नियतांक और p संवेग है।',
    examRelevance: 'CSIR NET Physical Sciences, IIT JAM Physics, GATE'
  },
  {
    id: 'fc-sci-02',
    category: 'Science',
    front: 'What are the products of the light-dependent reactions of photosynthesis used in the Calvin cycle?',
    frontHi: 'प्रकाश संश्लेषण की प्रकाश अभिक्रिया के वे कौन से उत्पाद हैं जिनका उपयोग केल्विन चक्र में होता है?',
    back: 'ATP (Adenosine Triphosphate) and NADPH (Nicotinamide Adenine Dinucleotide Phosphate), which provide energy and reducing power to fix CO2 into glucose.',
    backHi: 'एटीपी (ATP) और एनएडीपीएच (NADPH), जो ऊर्जा और अपचायक शक्ति देकर CO2 को शर्करा में बदलते हैं।',
    examRelevance: 'CSIR NET Life Sciences, CUET-UG Biology, NEET'
  },
  {
    id: 'fc-sci-03',
    category: 'Science',
    front: 'What is the 18-Electron Rule in Organometallic Chemistry?',
    frontHi: 'धात्विक कार्बनिक रसायन (Organometallic Chemistry) में 18-इलेक्ट्रॉन नियम क्या है?',
    back: 'Thermodynamically stable transition metal organometallic complexes possess 18 valence electrons (sum of metal d-electrons and ligand-donated electrons), achieving noble gas valence electron configuration.',
    backHi: 'स्थायी संक्रमण धातु संकुलों में धातु के संयोजी d-इलेक्ट्रॉनों और लिगैंड द्वारा दिए गए इलेक्ट्रॉनों का कुल योग 18 होता है (अक्रिय गैस विन्यास)।',
    examRelevance: 'CSIR NET Chemical Sciences, IIT JAM Chemistry, GATE CY'
  },

  // GK & Polity Flashcards
  {
    id: 'fc-gk-01',
    category: 'GK',
    front: 'Which Constitutional Amendment Act made the Right to Education (Article 21A) a Fundamental Right for children aged 6 to 14?',
    frontHi: 'किस संविधान संशोधन अधिनियम द्वारा 6 से 14 वर्ष के बच्चों हेतु शिक्षा के अधिकार (अनुच्छेद 21A) को मौलिक अधिकार बनाया गया?',
    back: 'The 86th Constitutional Amendment Act of 2002, enacted via the Right of Children to Free and Compulsory Education (RTE) Act 2009.',
    backHi: '86वां संविधान संशोधन अधिनियम, 2002 (जिसके तहत 2009 में आरटीई अधिनियम लागू हुआ)।',
    examRelevance: 'CTET, KVS, SSC CGL, State PSC'
  },
  {
    id: 'fc-gk-02',
    category: 'GK',
    front: 'Which schedule of the Constitution of India contains the list of 22 officially recognized languages?',
    frontHi: 'भारतीय संविधान की किस अनुसूची में 22 आधिकारिक भाषाओं का उल्लेख है?',
    back: 'Eighth Schedule (8th Schedule) of the Constitution of India.',
    backHi: 'भारतीय संविधान की आठवीं अनुसूची (8th Schedule)।',
    examRelevance: 'SSC CGL, Teaching Exams, CTET Language Pedagogy'
  }
];

export const getFlashcardsByCategory = (cat: string): FlashcardItem[] => {
  if (cat === 'all') return flashcardsData;
  return flashcardsData.filter(f => f.category.toLowerCase() === cat.toLowerCase());
};
