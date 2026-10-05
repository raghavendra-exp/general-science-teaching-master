import { Exam } from '../../types';

export const teacherRecruitmentExams: Exam[] = [
  {
    id: 'kvs-prt-tgt-pgt',
    name: 'KVS Recruitment',
    nameHi: 'केवीएस शिक्षक भर्ती (KVS)',
    fullName: 'Kendriya Vidyalaya Sangathan Direct Recruitment (PRT, TGT, PGT)',
    fullNameHi: 'केंद्रीय विद्यालय संगठन प्रत्यक्ष शिक्षक भर्ती',
    conductingBody: 'Kendriya Vidyalaya Sangathan (KVS) / CBSE',
    conductingBodyHi: 'केंद्रीय विद्यालय संगठन',
    officialUrl: 'https://kvsangathan.nic.in',
    category: 'teaching_recruitment',
    subCategory: 'Central Government Autonomous Schools',
    frequency: 'As Vacancies Occur',
    examMode: 'CBT',
    level: 'National',
    description: 'Premier central recruitment for teaching posts (Primary Teacher PRT, Trained Graduate Teacher TGT, Post Graduate Teacher PGT) across 1,250+ Kendriya Vidyalayas in India and abroad.',
    descriptionHi: 'देशभर के 1250+ केंद्रीय विद्यालयों में प्राथमिक (PRT), प्रशिक्षित स्नातक (TGT) एवं स्नातकोत्तर (PGT) शिक्षकों के पदों पर प्रतिष्ठित भर्ती।',
    eligibility: {
      minAge: 18,
      maxAge: 40, // PRT: 30 yrs, TGT: 35 yrs, PGT: 40 yrs (Women candidate relaxation: 10 years across KVS teaching posts)
      ageRelaxation: [
        { category: 'Women (All categories for PRT/TGT/PGT)', relaxation: '10 Years' },
        { category: 'SC/ST', relaxation: '5 Years' },
        { category: 'OBC', relaxation: '3 Years' }
      ],
      education: 'PRT: 12th (50%) + 2-year D.El.Ed + CTET Paper I qualified. TGT: Bachelor Degree in relevant subject (50%) + B.Ed + CTET Paper II qualified. PGT: Master Degree in relevant subject (50%) + B.Ed.',
      educationHi: 'पीआरटी: 12वीं (50%) + डीएलएड + सीटीईटी पेपर-1। टीजीटी: संबंधित विषय में स्नातक (50%) + बीएड + सीटीईटी पेपर-2। पीजीटी: परास्नातक (50%) + बीएड।',
      teachingQualification: ['D.El.Ed (for PRT)', 'B.Ed (for TGT/PGT)', 'CTET Paper I/II Qualified'],
      percentageRequired: '50% in qualifying degree.'
    },
    selectionProcess: [
      'Computer Based Written Examination (180 Questions, 180 Marks)',
      'Professional Competency Test (Demo Teaching 30 Marks + Interview 30 Marks = 60 Marks)',
      'Final Merit weightage: 70% Written Exam + 30% Demo & Interview'
    ],
    selectionProcessHi: [
      '180 अंकों की कंप्यूटर आधारित लिखित परीक्षा (70% वेटेज)',
      'डेमो टीचिंग (30 अंक) व साक्षात्कार (30 अंक) (30% वेटेज)',
      'अखिल भारतीय मेरिट सूची व विद्यालय पदस्थापन'
    ],
    examPattern: {
      totalQuestions: 180,
      totalMarks: 180,
      durationMinutes: 180,
      negativeMarking: 'No negative marking',
      sections: [
        { id: 'kvs-p1', name: 'Part I: Proficiency in Languages (General English 10 Q + General Hindi 10 Q)', nameHi: 'भाग 1: भाषा प्रवीणता (हिंदी 10 + अंग्रेजी 10)', questions: 20, marks: 20, negativeMarking: '0' },
        { id: 'kvs-p2', name: 'Part II: General Awareness, Reasoning & Proficiency in Computers (GA & CA 10 Q, Reasoning 5 Q, Computer 5 Q)', nameHi: 'भाग 2: सामान्य जागरूकता, रीजनिंग एवं कंप्यूटर', questions: 20, marks: 20, negativeMarking: '0' },
        { id: 'kvs-p3', name: 'Part III: Perspectives on Education and Leadership (CDP & School Management)', nameHi: 'भाग 3: शिक्षा एवं नेतृत्व पर दृष्टिकोण (पेडागोजी व प्रबंधन)', questions: 40, marks: 40, negativeMarking: '0' },
        { id: 'kvs-p4', name: 'Part IV: Subject Specific Syllabus (Core Subject Knowledge)', nameHi: 'भाग 4: विषय विशिष्ट पाठ्यक्रम', questions: 100, marks: 100, negativeMarking: '0' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-05-18',
      applyStartDate: '2026-05-20',
      applyEndDate: '2026-06-25',
      admitCardDate: '2026-08-10',
      examDate: '2026-08-25',
      status: 'active',
      notificationPdfUrl: 'https://kvsangathan.nic.in'
    },
    vacancies: {
      year: 2025,
      total: 13404,
      breakdown: [
        { post: 'Primary Teacher (PRT)', count: 6414 },
        { post: 'Trained Graduate Teacher (TGT)', count: 3176 },
        { post: 'Post Graduate Teacher (PGT)', count: 1409 },
        { post: 'PRT Music & Non-Teaching Staff', count: 2405 }
      ]
    },
    cutoffTrends: [
      { year: 2023, general: '135.09 (PRT) / 130-142 (TGT) / 134-149 (PGT)', obc: '127.24 (PRT)', ews: '127.46 (PRT)', sc: '121.66 (PRT)', st: '103.31 (PRT)' }
    ],
    popularBooks: ['book-kvs-pedagogy-rohit-vaidwan', 'book-kvs-prt-arihant', 'book-kvs-disha-tgt-pgt'],
    syllabusRef: 'kvs-syllabus'
  },
  {
    id: 'dsssb-teacher',
    name: 'DSSSB PRT / TGT / PGT',
    nameHi: 'डीएसएसएसबी शिक्षक भर्ती (DSSSB)',
    fullName: 'Delhi Subordinate Services Selection Board Teacher Recruitment',
    fullNameHi: 'दिल्ली अधीनस्थ सेवा चयन बोर्ड शिक्षक भर्ती',
    conductingBody: 'Delhi Subordinate Services Selection Board (DSSSB)',
    conductingBodyHi: 'दिल्ली अधीनस्थ सेवा चयन बोर्ड',
    officialUrl: 'https://dsssb.delhi.gov.in',
    category: 'teaching_recruitment',
    subCategory: 'NCT of Delhi Directorate of Education & MCD Schools',
    frequency: 'Annual / Post-wise Notification',
    examMode: 'CBT',
    level: 'State',
    description: 'Prestigious recruitment for government school teachers under Directorate of Education (DoE) and Municipal Corporation of Delhi (MCD) for PRT (Assistant Teacher Primary), TGT, and PGT cadres.',
    descriptionHi: 'दिल्ली सरकार के शिक्षा निदेशालय (DoE) एवं एमसीडी विद्यालयों में सहायक अध्यापक (प्राथमिक), टीजीटी और पीजीटी पदों हेतु भर्ती परीक्षा।',
    eligibility: {
      minAge: 18,
      maxAge: 32, // PRT: 30 yrs, TGT: 30/32 yrs (relaxation for women in TGT up to 40 yrs as per GNCTD notification)
      ageRelaxation: [
        { category: 'Female Candidates (for TGT posts in DoE)', relaxation: 'Relaxable up to 40 Years' },
        { category: 'OBC (Delhi only)', relaxation: '3 Years' },
        { category: 'SC/ST', relaxation: '5 Years' }
      ],
      education: 'PRT: 12th (50%) + 2-year D.El.Ed / B.El.Ed + CTET Paper 1. TGT: Bachelor Degree in concerned subject (45%) + B.Ed + CTET Paper 2. PGT: Master Degree in relevant subject + B.Ed.',
      educationHi: 'पीआरटी: 12वीं + 2 वर्षीय डिप्लोमा + सीटीईटी-1। टीजीटी: संबंधित विषय में स्नातक + बीएड + सीटीईटी-2। पीजीटी: परास्नातक + बीएड।',
      teachingQualification: ['D.El.Ed', 'B.Ed', 'CTET Paper I/II'],
      percentageRequired: '45% to 50% in qualifying graduation.'
    },
    selectionProcess: [
      'One Tier Computer Based Examination (CBT)',
      'Section A (General 100 Marks) + Section B (Subject/Pedagogy 100 Marks for PRT/TGT; 200 Marks for PGT)',
      'Direct selection based solely on written CBT merit (No Interview for Group B & C non-gazetted posts)'
    ],
    selectionProcessHi: [
      'एकल टियर कंप्यूटर आधारित परीक्षा (खंड अ: सामान्य 100 अंक + खंड ब: विषय/शिक्षाशास्त्र 100 अंक)',
      'लिखित परीक्षा मेरिट के आधार पर सीधा चयन (कोई साक्षात्कार नहीं)'
    ],
    examPattern: {
      totalQuestions: 200, // For PRT & TGT (300 Q for PGT)
      totalMarks: 200,
      durationMinutes: 120, // 180 min for PGT
      negativeMarking: '0.25 marks deducted for each wrong response',
      sections: [
        { id: 'dsssb-sec-a-ga', name: 'General Awareness', nameHi: 'सामान्य जागरूकता', questions: 20, marks: 20, negativeMarking: '-0.25' },
        { id: 'dsssb-sec-a-reasoning', name: 'General Intelligence & Reasoning Ability', nameHi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति', questions: 20, marks: 20, negativeMarking: '-0.25' },
        { id: 'dsssb-sec-a-quant', name: 'Arithmetical & Numerical Ability', nameHi: 'संख्यात्मक एवं अंकगणितीय योग्यता', questions: 20, marks: 20, negativeMarking: '-0.25' },
        { id: 'dsssb-sec-a-hindi', name: 'Hindi Language & Comprehension', nameHi: 'हिंदी भाषा एवं बोधगम्यता', questions: 20, marks: 20, negativeMarking: '-0.25' },
        { id: 'dsssb-sec-a-english', name: 'English Language & Comprehension', nameHi: 'अंग्रेजी भाषा एवं बोधगम्यता', questions: 20, marks: 20, negativeMarking: '-0.25' },
        { id: 'dsssb-sec-b-subject', name: 'Subject Concern / Educational Psychology & Pedagogy (Section B)', nameHi: 'विषय विशिष्ट एवं शिक्षा मनोविज्ञान / पेडागोजी (खंड ब)', questions: 100, marks: 100, negativeMarking: '-0.25' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-01-20',
      applyStartDate: '2026-01-25',
      applyEndDate: '2026-02-28',
      admitCardDate: '2026-06-15',
      examDate: '2026-07-05',
      status: 'active',
      notificationPdfUrl: 'https://dsssb.delhi.gov.in'
    },
    cutoffTrends: [
      { year: 2024, general: '132.8 (PRT) / 115-130 (TGT)', obc: '118.5 (Delhi)', ews: '124.0', sc: '109.2', st: '92.4' }
    ],
    popularBooks: ['book-dsssb-prt-prateek-shivalik', 'book-dsssb-tgt-arihant', 'book-yct-dsssb-pyq'],
    syllabusRef: 'dsssb-syllabus'
  },
  {
    id: 'nvs-recruitment',
    name: 'NVS Recruitment',
    nameHi: 'एनवीएस शिक्षक भर्ती (NVS)',
    fullName: 'Navodaya Vidyalaya Samiti Direct & Special Recruitment (TGT, PGT, Miscellaneous)',
    fullNameHi: 'नवोदय विद्यालय समिति शिक्षक भर्ती',
    conductingBody: 'Navodaya Vidyalaya Samiti (NVS)',
    conductingBodyHi: 'नवोदय विद्यालय समिति',
    officialUrl: 'https://navodaya.gov.in',
    category: 'teaching_recruitment',
    subCategory: 'Residential Central Schools',
    frequency: 'Periodic',
    examMode: 'CBT',
    level: 'National',
    description: 'Recruitment for residential central Jawahar Navodaya Vidyalayas across India for Trained Graduate Teachers (TGTs), Post Graduate Teachers (PGTs), and Creative Teachers (Art, Music, PET, Librarian).',
    descriptionHi: 'देशभर के आवासीय जवाहर नवोदय विद्यालयों में टीजीटी, पीजीटी एवं विशेष शिक्षकों की भर्ती परीक्षा।',
    eligibility: {
      minAge: 18,
      maxAge: 40,
      ageRelaxation: [
        { category: 'Women (all categories for TGT/PGT)', relaxation: '10 Years' },
        { category: 'SC/ST', relaxation: '5 Years' },
        { category: 'OBC-NCL', relaxation: '3 Years' }
      ],
      education: 'TGT: 4-year integrated degree (50%) or Bachelor degree with 50% in subject + B.Ed + CTET Paper 2. PGT: Master degree (50%) + B.Ed.',
      educationHi: 'टीजीटी: संबंधित विषय में स्नातक (50%) + बीएड + सीटीईटी-2। पीजीटी: परास्नातक (50%) + बीएड।',
      teachingQualification: ['B.Ed', 'CTET Paper II (for TGT)'],
      percentageRequired: '50% in relevant degrees.'
    },
    selectionProcess: [
      'Computer Based Test (CBT)',
      'Language Competency Test in General Hindi, General English and Regional Language (Qualifying with min 40% marks in each language)',
      'Personal Interview and Document Verification'
    ],
    selectionProcessHi: [
      'कंप्यूटर आधारित लिखित परीक्षा (CBT)',
      'भाषा अर्हक परीक्षा (हिंदी, अंग्रेजी, क्षेत्रीय भाषा में प्रत्येक में न्यूनतम 40% अनिवार्य)',
      'साक्षात्कार व अंतिम मेरिट'
    ],
    examPattern: {
      totalQuestions: 150, // 120 marks for merit + 30 marks qualifying language
      totalMarks: 150,
      durationMinutes: 180,
      negativeMarking: '0.25 (1/4th) marks deducted for wrong response',
      sections: [
        { id: 'nvs-reasoning', name: 'Reasoning Ability', nameHi: 'तर्कशक्ति', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'nvs-ga', name: 'General Awareness', nameHi: 'सामान्य जागरूकता', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'nvs-ict', name: 'Knowledge of ICT', nameHi: 'कंप्यूटर ज्ञान (ICT)', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'nvs-aptitude', name: 'Teaching Aptitude', nameHi: 'शिक्षण अभिवृत्ति', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'nvs-subject', name: 'Domain Subject Knowledge & NEP 2020/Pedagogy', nameHi: 'डोमेन विषय ज्ञान व एनईपी 2020', questions: 80, marks: 80, negativeMarking: '-0.25' },
        { id: 'nvs-languages', name: 'Language Competency (General Hindi 10, General English 10, Regional Lang 10 - Qualifying min 40%)', nameHi: 'भाषा प्रवीणता (अर्हक न्यूनतम 40%)', questions: 30, marks: 30, negativeMarking: '-0.25' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-06-01',
      applyStartDate: '2026-06-05',
      applyEndDate: '2026-07-08',
      admitCardDate: '2026-09-10',
      examDate: '2026-09-24',
      status: 'upcoming',
      notificationPdfUrl: 'https://navodaya.gov.in'
    },
    popularBooks: ['book-nvs-tgt-arihant', 'book-nvs-pgt-disha'],
    syllabusRef: 'nvs-syllabus'
  },
  {
    id: 'emrs-recruitment',
    name: 'EMRS Recruitment',
    nameHi: 'ईएमआरएस शिक्षक भर्ती (EMRS)',
    fullName: 'Eklavya Model Residential Schools Staff Selection Exam (ESSE)',
    fullNameHi: 'एकलव्य मॉडल आवासीय विद्यालय चयन परीक्षा',
    conductingBody: 'National Education Society for Tribal Students (NESTS) / Ministry of Tribal Affairs',
    conductingBodyHi: 'जनजातीय कार्य मंत्रालय / नेस्ट्स',
    officialUrl: 'https://emrs.tribal.gov.in',
    category: 'teaching_recruitment',
    subCategory: 'Tribal Welfare Residential Schools',
    frequency: 'Annual / Phase-wise',
    examMode: 'Pen & Paper (OMR)',
    level: 'National',
    description: 'National recruitment by NESTS for Principals, PGTs, TGTs, Hostel Wardens, and Non-Teaching Staff in Eklavya Model Residential Schools across tribal areas of India.',
    descriptionHi: 'जनजातीय विद्यार्थियों हेतु संचालित एकलव्य मॉडल आवासीय विद्यालयों में टीजीटी, पीजीटी व अन्य शैक्षणिक पदों पर भर्ती।',
    eligibility: {
      minAge: 18,
      maxAge: 40, // 35 for TGT, 40 for PGT; EMRS employees up to 55 yrs; SC/ST 5 yrs, OBC 3 yrs
      ageRelaxation: [
        { category: 'Women candidates (TGT posts)', relaxation: '10 Years' },
        { category: 'SC/ST', relaxation: '5 Years' },
        { category: 'OBC', relaxation: '3 Years' }
      ],
      education: 'TGT: 4-year integrated degree or Bachelor degree (50%) + B.Ed + CTET Paper II. PGT: Post Graduate degree (50%) in relevant subject + B.Ed.',
      educationHi: 'टीजीटी: संबंधित विषय में स्नातक (50%) + बीएड + सीटीईटी-2। पीजीटी: परास्नातक (50%) + बीएड।',
      teachingQualification: ['B.Ed', 'CTET Paper II (for TGT)'],
      percentageRequired: '50% marks in qualifying degree.'
    },
    selectionProcess: [
      'OMR Based Written Examination',
      'Evaluation of Subject Knowledge and Teaching Pedagogy',
      'Merit List generation and State-wise school allocation'
    ],
    selectionProcessHi: [
      'ओएमआर आधारित लिखित परीक्षा',
      'विषय ज्ञान व पेडागोजी का मूल्यांकन',
      'अखिल भारतीय मेरिट व विद्यालय आवंटन'
    ],
    examPattern: {
      totalQuestions: 150, // 120 marks for merit + 30 marks qualifying language
      totalMarks: 150,
      durationMinutes: 180,
      negativeMarking: '0.25 (1/4th) marks deducted for wrong response',
      sections: [
        { id: 'emrs-ga', name: 'General Awareness', nameHi: 'सामान्य जागरूकता', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'emrs-reasoning', name: 'Reasoning Ability', nameHi: 'तर्कशक्ति', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'emrs-ict', name: 'Knowledge of ICT', nameHi: 'आईसीटी ज्ञान', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'emrs-pedagogy', name: 'Teaching Aptitude', nameHi: 'शिक्षण अभिवृत्ति', questions: 10, marks: 10, negativeMarking: '-0.25' },
        { id: 'emrs-subject', name: 'Domain Subject Knowledge (incl. Experiential Pedagogy & NEP 2020)', nameHi: 'डोमेन विषय ज्ञान एवं एनईपी 2020', questions: 80, marks: 80, negativeMarking: '-0.25' },
        { id: 'emrs-lang', name: 'Language Competency Test (General Hindi 10, General English 10, Regional Lang 10 - min 40% in each)', nameHi: 'भाषा अर्हता परीक्षण (प्रत्येक में 40% अंक अनिवार्य)', questions: 30, marks: 30, negativeMarking: '-0.25' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-04-15',
      applyStartDate: '2026-04-20',
      applyEndDate: '2026-05-30',
      admitCardDate: '2026-07-25',
      examDate: '2026-08-14',
      status: 'active',
      notificationPdfUrl: 'https://emrs.tribal.gov.in'
    },
    popularBooks: ['book-emrs-tgt-pgt-arihant', 'book-emrs-disha-solved'],
    syllabusRef: 'emrs-syllabus'
  }
];
