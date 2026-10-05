import { Exam } from '../../types';

export const generalExams: Exam[] = [
  {
    id: 'ssc-cgl',
    name: 'SSC CGL',
    nameHi: 'एसएससी सीजीएल',
    fullName: 'Staff Selection Commission - Combined Graduate Level Examination',
    fullNameHi: 'कर्मचारी चयन आयोग - संयुक्त स्नातक स्तरीय परीक्षा',
    conductingBody: 'Staff Selection Commission (SSC)',
    conductingBodyHi: 'कर्मचारी चयन आयोग',
    officialUrl: 'https://ssc.gov.in',
    category: 'general',
    subCategory: 'Graduate Level Competitive',
    frequency: 'Annual',
    examMode: 'CBT',
    level: 'National',
    description: 'Premier national level competitive exam for recruitment to Group B and Group C non-technical gazetted and non-gazetted posts in various Ministries and Departments of the Government of India.',
    descriptionHi: 'भारत सरकार के विभिन्न मंत्रालयों और विभागों में ग्रुप बी और ग्रुप सी पदों पर भर्ती के लिए प्रमुख राष्ट्रीय स्तर की प्रतियोगी परीक्षा।',
    eligibility: {
      minAge: 18,
      maxAge: 32,
      ageRelaxation: [
        { category: 'OBC', relaxation: '3 Years' },
        { category: 'SC/ST', relaxation: '5 Years' },
        { category: 'PwBD', relaxation: '10 Years' }
      ],
      education: "Bachelor's Degree in any discipline from a recognized University.",
      educationHi: 'किसी मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक की डिग्री।',
      subjectRequirements: ['Any Degree for Assistant Section Officer / Inspector; Statistics for JSO.'],
      percentageRequired: 'Passing marks required in graduation degree.'
    },
    selectionProcess: [
      'Tier-I Computer Based Examination (Qualifying)',
      'Tier-II Computer Based Examination (Merit Calculation)',
      'Data Entry Speed Test (DEST) & Document Verification'
    ],
    selectionProcessHi: [
      'टियर-I कंप्यूटर आधारित परीक्षा (अर्हक)',
      'टियर-II कंप्यूटर आधारित परीक्षा (मेरिट निर्धारण)',
      'डाटा एंट्री स्पीड टेस्ट (DEST) व दस्तावेज़ सत्यापन'
    ],
    examPattern: {
      totalQuestions: 130, // Tier II Paper 1 Section 1 & 2
      totalMarks: 390,
      durationMinutes: 135,
      negativeMarking: '1 mark deducted per wrong answer in Tier II',
      sections: [
        {
          id: 'sec1-math',
          name: 'Mathematical Abilities',
          nameHi: 'गणितीय योग्यता',
          questions: 30,
          marks: 90,
          negativeMarking: '-1 mark'
        },
        {
          id: 'sec1-reasoning',
          name: 'Reasoning and General Intelligence',
          nameHi: 'तर्कशक्ति एवं सामान्य बुद्धिमत्ता',
          questions: 30,
          marks: 90,
          negativeMarking: '-1 mark'
        },
        {
          id: 'sec2-english',
          name: 'English Language and Comprehension',
          nameHi: 'अंग्रेजी भाषा एवं बोधगम्यता',
          questions: 45,
          marks: 135,
          negativeMarking: '-1 mark'
        },
        {
          id: 'sec2-ga',
          name: 'General Awareness',
          nameHi: 'सामान्य जागरूकता',
          questions: 25,
          marks: 75,
          negativeMarking: '-1 mark'
        },
        {
          id: 'sec3-computer',
          name: 'Computer Knowledge Module (Qualifying)',
          nameHi: 'कंप्यूटर ज्ञान मॉड्यूल (अर्हक)',
          questions: 20,
          marks: 60,
          negativeMarking: '-1 mark'
        }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-06-10',
      applyStartDate: '2026-06-11',
      applyEndDate: '2026-07-10',
      admitCardDate: '2026-09-01',
      examDate: '2026-09-15',
      status: 'active',
      notificationPdfUrl: 'https://ssc.gov.in'
    },
    vacancies: {
      year: 2025,
      total: 17727,
      breakdown: [
        { post: 'Assistant Section Officer (CSS/MEA/AFHQ)', count: 2450 },
        { post: 'Inspector of Central Tax (GST)', count: 3200 },
        { post: 'Tax Assistant & Auditor', count: 5800 },
        { post: 'Other Group B & C Posts', count: 6277 }
      ]
    },
    cutoffTrends: [
      { year: 2024, general: 153.2, obc: 148.5, ews: 145.8, sc: 132.4, st: 122.6 },
      { year: 2023, general: 150.04, obc: 145.93, ews: 143.44, sc: 126.68, st: 118.16 }
    ],
    popularBooks: ['book-ssc-kiran-math', 'book-ssc-blackbook-english', 'book-ssc-pinnacle-ga'],
    syllabusRef: 'ssc-cgl-syllabus'
  },
  {
    id: 'ssc-chsl',
    name: 'SSC CHSL',
    nameHi: 'एसएससी सीएचएसएल',
    fullName: 'Combined Higher Secondary Level (10+2) Examination',
    fullNameHi: 'संयुक्त उच्चतर माध्यमिक स्तर (10+2) परीक्षा',
    conductingBody: 'Staff Selection Commission (SSC)',
    conductingBodyHi: 'कर्मचारी चयन आयोग',
    officialUrl: 'https://ssc.gov.in',
    category: 'general',
    subCategory: '10+2 Level Competitive',
    frequency: 'Annual',
    examMode: 'CBT',
    level: 'National',
    description: 'National recruitment for Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO) in central government ministries.',
    descriptionHi: 'केंद्र सरकार के मंत्रालयों में लोअर डिविजन क्लर्क (LDC), कनिष्ठ सचिवालय सहायक (JSA), तथा डाटा एंट्री ऑपरेटर (DEO) पदों पर भर्ती।',
    eligibility: {
      minAge: 18,
      maxAge: 27,
      ageRelaxation: [
        { category: 'OBC', relaxation: '3 Years' },
        { category: 'SC/ST', relaxation: '5 Years' }
      ],
      education: 'Passed 12th Standard or equivalent examination from a recognized Board or University.',
      educationHi: 'मान्यता प्राप्त बोर्ड या विश्वविद्यालय से 12वीं कक्षा उत्तीर्ण।',
      percentageRequired: 'Passing grade in 12th standard.'
    },
    selectionProcess: [
      'Tier-I Computer Based Test (Objective MCQ, Qualifying)',
      'Tier-II Computer Based Examination (Session I + Session II Typing/Skill Test)',
      'Document Verification'
    ],
    selectionProcessHi: [
      'टियर-I कंप्यूटर आधारित परीक्षा (अर्हक)',
      'टियर-II मुख्य कंप्यूटर परीक्षा व टाइपिंग टेस्ट',
      'दस्तावेज़ सत्यापन'
    ],
    examPattern: {
      totalQuestions: 100,
      totalMarks: 200,
      durationMinutes: 60,
      negativeMarking: '0.50 marks per incorrect response in Tier I',
      sections: [
        { id: 'chsl-reasoning', name: 'General Intelligence', nameHi: 'सामान्य बुद्धिमत्ता', questions: 25, marks: 50, negativeMarking: '-0.50' },
        { id: 'chsl-ga', name: 'General Awareness', nameHi: 'सामान्य जागरूकता', questions: 25, marks: 50, negativeMarking: '-0.50' },
        { id: 'chsl-quant', name: 'Quantitative Aptitude', nameHi: 'संख्यात्मक अभियोग्यता', questions: 25, marks: 50, negativeMarking: '-0.50' },
        { id: 'chsl-english', name: 'English Language', nameHi: 'अंग्रेजी भाषा', questions: 25, marks: 50, negativeMarking: '-0.50' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-04-02',
      applyStartDate: '2026-04-03',
      applyEndDate: '2026-05-02',
      admitCardDate: '2026-06-15',
      examDate: '2026-07-01',
      status: 'active',
      notificationPdfUrl: 'https://ssc.gov.in'
    },
    vacancies: {
      year: 2025,
      total: 3712
    },
    cutoffTrends: [
      { year: 2024, general: 157.7, obc: 156.3, ews: 152.4, sc: 141.2, st: 130.5 }
    ],
    popularBooks: ['book-ssc-kiran-math', 'book-ssc-blackbook-english'],
    syllabusRef: 'ssc-chsl-syllabus'
  },
  {
    id: 'uppsc-pcs',
    name: 'UPPSC PCS',
    nameHi: 'यूपीपीएससी पीसीएस',
    fullName: 'Uttar Pradesh Combined State / Upper Subordinate Services Examination',
    fullNameHi: 'उत्तर प्रदेश सम्मिलित राज्य / प्रवर अधीनस्थ सेवा परीक्षा',
    conductingBody: 'Uttar Pradesh Public Service Commission (UPPSC)',
    conductingBodyHi: 'उत्तर प्रदेश लोक सेवा आयोग',
    officialUrl: 'https://uppsc.up.nic.in',
    category: 'general',
    subCategory: 'State Civil Services',
    frequency: 'Annual',
    examMode: 'Pen & Paper (OMR)',
    level: 'State',
    description: 'Premier state civil service examination for appointment to Deputy Collector (SDM), Deputy Superintendent of Police (DSP), Block Development Officer (BDO), and other administrative posts in UP.',
    descriptionHi: 'उत्तर प्रदेश में उपजिलाधिकारी (SDM), पुलिस उपाधीक्षक (DSP), खंड विकास अधिकारी आदि प्रतिष्ठित पदों हेतु संयुक्त राज्य सेवा परीक्षा।',
    eligibility: {
      minAge: 21,
      maxAge: 40,
      ageRelaxation: [
        { category: 'OBC (UP Domicile)', relaxation: '5 Years' },
        { category: 'SC/ST (UP Domicile)', relaxation: '5 Years' }
      ],
      education: "Bachelor's Degree in any discipline from a recognized University.",
      educationHi: 'किसी मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक उपाधि।',
      percentageRequired: 'Graduate degree passing marks.'
    },
    selectionProcess: [
      'Preliminary Examination (Paper 1 General Studies + Paper 2 CSAT)',
      'Main Written Examination (Conventional 8 Papers)',
      'Personality Test / Interview'
    ],
    selectionProcessHi: [
      'प्रारंभिक परीक्षा (जीएस पेपर-1 एवं सीसैट पेपर-2)',
      'मुख्य लिखित परीक्षा (8 वर्णनात्मक प्रश्नपत्र)',
      'साक्षात्कार (व्यक्तित्व परीक्षण)'
    ],
    examPattern: {
      totalQuestions: 150,
      totalMarks: 200,
      durationMinutes: 120,
      negativeMarking: '0.33 (1/3rd) marks per wrong response',
      sections: [
        { id: 'uppsc-gs1', name: 'General Studies I', nameHi: 'सामान्य अध्ययन-1', questions: 150, marks: 200, negativeMarking: '-0.33 (1/3)' },
        { id: 'uppsc-csat', name: 'General Studies II (CSAT - 33% Qualifying)', nameHi: 'सीसैट (33% अर्हक)', questions: 100, marks: 200, negativeMarking: '-0.33 (1/3)' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-01-15',
      applyStartDate: '2026-01-16',
      applyEndDate: '2026-02-15',
      admitCardDate: '2026-06-25',
      examDate: '2026-07-12',
      status: 'active',
      notificationPdfUrl: 'https://uppsc.up.nic.in'
    },
    popularBooks: ['book-gs-drishti-uppsc', 'book-polity-laxmikanth'],
    syllabusRef: 'uppsc-pcs-syllabus'
  }
];
