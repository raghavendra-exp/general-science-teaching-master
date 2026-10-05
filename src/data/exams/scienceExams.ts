import { Exam } from '../../types';

export const scienceExams: Exam[] = [
  {
    id: 'csir-net',
    name: 'CSIR-UGC NET',
    nameHi: 'सीएसआईआर-यूजीसी नेट',
    fullName: 'Council of Scientific & Industrial Research - National Eligibility Test',
    fullNameHi: 'वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद - राष्ट्रीय पात्रता परीक्षा',
    conductingBody: 'National Testing Agency (NTA)',
    conductingBodyHi: 'राष्ट्रीय परीक्षा एजेंसी',
    officialUrl: 'https://csirnet.nta.ac.in',
    category: 'science',
    subCategory: 'Junior Research Fellowship (JRF) & Lectureship / Assistant Professor',
    frequency: 'Biannual (June & December)',
    examMode: 'CBT',
    level: 'National',
    description: 'Premier national eligibility examination determining eligibility of Indian nationals for Junior Research Fellowship (JRF) and for Lectureship (LS) / Assistant Professor across Chemical, Earth, Life, Mathematical, and Physical Sciences.',
    descriptionHi: 'रासायनिक, पृथ्वी, जीव, गणितीय और भौतिक विज्ञानों में जेआरएफ (JRF) एवं सहायक आचार्य (Lectureship) की पात्रता हेतु प्रमुख राष्ट्रीय परीक्षा।',
    eligibility: {
      maxAge: 30, // For JRF (relaxed for SC/ST/PwD/Women by 5 years, OBC-NCL by 3 years); No age limit for Lectureship
      ageRelaxation: [
        { category: 'OBC-NCL', relaxation: '3 Years (JRF)' },
        { category: 'SC/ST/PwD/Third Gender/Women', relaxation: '5 Years (JRF)' },
        { category: 'Lectureship (LS)', relaxation: 'No Upper Age Limit' }
      ],
      education: 'M.Sc. or equivalent degree / Integrated BS-MS / BS-4 Years / B.E./B.Tech / B.Pharma / MBBS with at least 55% marks (50% for SC/ST/PwD).',
      educationHi: 'संबंधित विज्ञान विषय में न्यूनतम 55% अंकों सहित स्नातकोत्तर (M.Sc.) या समकक्ष डिग्री (आरक्षित वर्गों हेतु 50%)।',
      subjectRequirements: ['Postgraduate in relevant scientific discipline.'],
      percentageRequired: '55% for General/General-EWS; 50% for SC/ST/PwD/OBC-NCL.'
    },
    selectionProcess: [
      'Single Paper Computer Based Test (CBT) of 3 hours duration',
      'Evaluation of Part A (General Science/Research Aptitude), Part B (Core Subject Knowledge), and Part C (Higher Analytical Scientific Questions)',
      'Direct award of CSIR/UGC JRF and Lectureship Eligibility based on cutoffs'
    ],
    selectionProcessHi: [
      'तीन घंटे की एकल कंप्यूटर आधारित परीक्षा (भाग क, ख, ग)',
      'विषय-विशिष्ट विश्लेषणात्मक मूल्यांकन',
      'कटऑफ के आधार पर जेआरएफ एवं सहायक प्राध्यापक पात्रता का आवंटन'
    ],
    examPattern: {
      totalQuestions: 145, // Total given across parts (e.g. Life Sciences: 20 in A, 50 in B, 75 in C, to attempt 15+35+25=75)
      totalMarks: 200,
      durationMinutes: 180,
      negativeMarking: '25% of question weightage deducted for wrong answers',
      sections: [
        {
          id: 'csir-part-a',
          name: 'Part A: General Science, Quantitative Reasoning & Research Aptitude',
          nameHi: 'भाग क: सामान्य विज्ञान, मात्रात्मक तर्क व शोध अभिवृत्ति',
          questions: 20, // attempt 15 max
          marks: 30,
          negativeMarking: '-0.50 (25%)',
          description: 'Common to all disciplines; testing scientific reasoning, graphical analysis, and numerical ability.'
        },
        {
          id: 'csir-part-b',
          name: 'Part B: Subject-Specific Core Scientific Concepts',
          nameHi: 'भाग ख: विषय-विशिष्ट मूल वैज्ञानिक संकल्पनाएं',
          questions: 50, // attempt 35 max in Life/Physical sciences
          marks: 70,
          negativeMarking: '-0.50 (25%)',
          description: 'Conventional MCQs covering fundamental concepts of the specific science discipline.'
        },
        {
          id: 'csir-part-c',
          name: 'Part C: Higher Order Scientific Thinking, Analytics & Synthesis',
          nameHi: 'भाग ग: उच्च स्तरीय वैज्ञानिक विश्लेषण व प्रायोगिक समस्या समाधान',
          questions: 75, // attempt 25 max in Life Sciences
          marks: 100,
          negativeMarking: '-1.00 (25% in 4-mark questions)',
          description: 'Advanced experimental and analytical questions testing hypothesis testing and laboratory reasoning.'
        }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-04-10',
      applyStartDate: '2026-04-12',
      applyEndDate: '2026-05-15',
      admitCardDate: '2026-06-18',
      examDate: '2026-06-25',
      status: 'active',
      notificationPdfUrl: 'https://csirnet.nta.ac.in'
    },
    cutoffTrends: [
      { year: 2024, general: '98.8 Percentile (Life Sci JRF) / 54.5% (Chemical)', obc: '96.2 Percentile / 47.8%', ews: '95.9 Percentile / 48.2%', sc: '89.5 Percentile / 39.5%', st: '84.0 Percentile / 32.1%' }
    ],
    popularBooks: ['book-csir-life-pathfinder', 'book-csir-physical-arihant', 'book-csir-chemical-disha'],
    syllabusRef: 'csir-net-syllabus'
  },
  {
    id: 'iit-jam',
    name: 'IIT JAM',
    nameHi: 'आईआईटी जैम',
    fullName: 'Joint Admission test for Masters (IIT JAM)',
    fullNameHi: 'मास्टर्स हेतु संयुक्त प्रवेश परीक्षा (IIT JAM)',
    conductingBody: 'Organizing IIT (Rotational across IITs)',
    conductingBodyHi: 'आयोजक भारतीय प्रौद्योगिकी संस्थान (IIT)',
    officialUrl: 'https://jam.iitm.ac.in',
    category: 'science',
    subCategory: 'Postgraduate Science Entrance (M.Sc., M.Sc.-Ph.D. Dual Degree)',
    frequency: 'Annual (February)',
    examMode: 'CBT',
    level: 'National',
    description: 'National entrance test for admission into M.Sc. (Two-Year), Joint M.Sc.-Ph.D., M.Sc.-Ph.D. Dual Degree, and other Post-Bachelor degree programmes at the IITs and IISc Bangalore across 7 test papers.',
    descriptionHi: 'भारतीय प्रौद्योगिकी संस्थानों (IITs) एवं आईआईएससी बैंगलोर में एम.एससी. तथा स्नातकोत्तर पाठ्यक्रमों में प्रवेश हेतु राष्ट्रीय प्रवेश परीक्षा।',
    eligibility: {
      education: "Undergraduate degree (B.Sc. or equivalent) in relevant disciplines. Candidates appearing in their final examination are also eligible.",
      educationHi: 'मान्यता प्राप्त विश्वविद्यालय से संबंधित विषय में स्नातक (B.Sc.) डिग्री। अंतिम वर्ष के अभ्यर्थी भी पात्र हैं।',
      subjectRequirements: [
        'Physics (PH): Physics for at least 2 years/4 semesters and Mathematics for at least 1 year/2 semesters.',
        'Chemistry (CY): Chemistry for 3 years/6 semesters and Mathematics at 10+2 level.',
        'Mathematics (MA): Mathematics for at least 2 years/4 semesters.',
        'Biotechnology (BT): Any Bachelor degree with Biology/Chemistry/Physics/Math.',
        'Mathematical Statistics (MS): Mathematics or Statistics for at least 2 years.',
        'Geology (GG): Geology for 3 years and any 2 of Physics, Chemistry, Math.',
        'Economics (EN): Any Bachelor degree.'
      ],
      percentageRequired: 'Proof of having passed the qualifying degree examination (no minimum aggregate requirement as per updated norms).'
    },
    selectionProcess: [
      'Computer Based Test of 3 hours duration consisting of 60 questions for 100 marks',
      'JAM All India Rank (AIR) generation',
      'Centralized Online Admission Portal for seat allocation across IITs and IISc'
    ],
    selectionProcessHi: [
      '3 घंटे की कंप्यूटर आधारित परीक्षा (60 प्रश्न, 100 अंक)',
      'ऑल इंडिया रैंक (AIR) जारी होना',
      'केंद्रीयकृत ऑनलाइन काउंसलिंग पोर्टल'
    ],
    examPattern: {
      totalQuestions: 60,
      totalMarks: 100,
      durationMinutes: 180,
      negativeMarking: 'Section A has negative marking (-1/3 for 1-mark, -2/3 for 2-mark); Section B (MSQ) and Section C (NAT) have NO negative marking.',
      sections: [
        {
          id: 'jam-sec-a',
          name: 'Section A: Multiple Choice Questions (MCQ)',
          nameHi: 'खंड क: बहुविकल्पीय प्रश्न (MCQ)',
          questions: 30, // 10 Q of 1 mark + 20 Q of 2 marks
          marks: 50,
          negativeMarking: '-1/3 for 1-mark Q, -2/3 for 2-mark Q',
          description: 'Single correct option questions.'
        },
        {
          id: 'jam-sec-b',
          name: 'Section B: Multiple Select Questions (MSQ)',
          nameHi: 'खंड ख: बहु-चयन प्रश्न (MSQ)',
          questions: 10, // 10 Q of 2 marks each
          marks: 20,
          negativeMarking: '0 (No negative marks and no partial marking)',
          description: 'One or more than one option out of four may be correct.'
        },
        {
          id: 'jam-sec-c',
          name: 'Section C: Numerical Answer Type (NAT)',
          nameHi: 'खंड ग: संख्यात्मक उत्तर प्रकार (NAT)',
          questions: 20, // 10 Q of 1 mark + 10 Q of 2 marks
          marks: 30,
          negativeMarking: '0 (No negative marking)',
          description: 'Answer is a signed real number entered via on-screen virtual keyboard.'
        }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2025-08-20',
      applyStartDate: '2025-09-03',
      applyEndDate: '2025-10-18',
      admitCardDate: '2026-01-08',
      examDate: '2026-02-08',
      status: 'active',
      notificationPdfUrl: 'https://jam.iitm.ac.in'
    },
    cutoffTrends: [
      { year: 2024, general: '25.68 (PH) / 28.50 (CY) / 22.86 (MA) / 38.25 (BT)', obc: '23.11 / 25.65 / 20.57 / 34.42', sc: '12.84 / 14.25 / 11.43 / 19.12' }
    ],
    popularBooks: ['book-jam-physics-arihant', 'book-jam-chemistry-mtg', 'book-jam-math-samvedna'],
    syllabusRef: 'iit-jam-syllabus'
  },
  {
    id: 'gate-science',
    name: 'GATE Science & Engineering',
    nameHi: 'गेट विज्ञान एवं अभियांत्रिकी',
    fullName: 'Graduate Aptitude Test in Engineering (GATE)',
    fullNameHi: 'इंजीनियरिंग में स्नातक योग्यता परीक्षा (गेट)',
    conductingBody: 'IISc & 7 IITs (on behalf of National Coordination Board - GATE)',
    conductingBodyHi: 'आईआईएससी एवं आईआईटी',
    officialUrl: 'https://gate2026.iisc.ac.in',
    category: 'science',
    subCategory: 'National PG Entrance & PSU Recruitment',
    frequency: 'Annual (February)',
    examMode: 'CBT',
    level: 'National',
    description: 'National examination testing comprehensive understanding in undergraduate subjects in Engineering, Technology, Architecture, and Science (Physics PH, Chemistry CY, Mathematics MA, Life Sciences XL, Biotechnology BT, Statistics ST, Computer Science CS, Data Science & AI DA).',
    descriptionHi: 'इंजीनियरिंग और विज्ञान विषयों (भौतिकी, रसायन विज्ञान, गणित, जीवन विज्ञान, जैव प्रौद्योगिकी आदि) में परास्नातक एवं पीएसयू भर्ती हेतु राष्ट्रीय परीक्षा।',
    eligibility: {
      education: 'Candidates currently studying in 3rd or higher years of any undergraduate degree or already completed Bachelor degree in Engineering / Technology / Science.',
      educationHi: 'स्नातक के तृतीय या अंतिम वर्ष में अध्ययनरत अथवा बीई/बीटेक/बीएससी/एमएससी उत्तीर्ण अभ्यर्थी।',
      percentageRequired: 'Passing grades in qualifying degree.'
    },
    selectionProcess: [
      'Single paper CBT exam of 3 hours duration',
      'GATE Score calculation (valid for 3 years for M.Tech/Ph.D. admissions and PSU recruitment)'
    ],
    selectionProcessHi: [
      '3 घंटे की एकल कंप्यूटर आधारित परीक्षा',
      'गेट स्कोर कार्ड (3 वर्ष तक वैध)'
    ],
    examPattern: {
      totalQuestions: 65,
      totalMarks: 100,
      durationMinutes: 180,
      negativeMarking: '1/3 mark for 1-mark MCQ, 2/3 mark for 2-mark MCQ; Zero negative marking for MSQ and NAT questions.',
      sections: [
        {
          id: 'gate-ga',
          name: 'General Aptitude (GA)',
          nameHi: 'सामान्य अभिरुचि',
          questions: 10,
          marks: 15,
          negativeMarking: '-1/3 (1-mark) / -2/3 (2-mark) on MCQs'
        },
        {
          id: 'gate-subject',
          name: 'Core Subject Engineering / Science',
          nameHi: 'मूल विज्ञान / इंजीनियरिंग विषय',
          questions: 55,
          marks: 85,
          negativeMarking: '-1/3 (1-mark) / -2/3 (2-mark) on MCQs'
        }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2025-08-15',
      applyStartDate: '2025-08-25',
      applyEndDate: '2025-10-05',
      admitCardDate: '2026-01-02',
      examDate: '2026-02-07',
      status: 'active',
      notificationPdfUrl: 'https://gate2026.iisc.ac.in'
    },
    cutoffTrends: [
      { year: 2024, general: '32.5 (PH) / 29.8 (CY) / 25.0 (MA) / 35.4 (XL)', obc: '29.2 / 26.8 / 22.5 / 31.8', sc: '21.6 / 19.8 / 16.6 / 23.6' }
    ],
    popularBooks: ['book-gate-physics-madeeasy', 'book-gate-chemistry-careerendeavour'],
    syllabusRef: 'gate-science-syllabus'
  },
  {
    id: 'cuet-ug-science',
    name: 'CUET-UG Science',
    nameHi: 'सीयूईटी-यूजी विज्ञान',
    fullName: 'Common University Entrance Test (UG) - Science Domain',
    fullNameHi: 'विश्वविद्यालय सामान्य प्रवेश परीक्षा (यूजी) - विज्ञान संकाय',
    conductingBody: 'National Testing Agency (NTA)',
    conductingBodyHi: 'राष्ट्रीय परीक्षा एजेंसी',
    officialUrl: 'https://exams.nta.ac.in/CUET-UG',
    category: 'science',
    subCategory: 'Undergraduate Science Entrance (B.Sc., B.Tech, Integrated M.Sc.)',
    frequency: 'Annual (May)',
    examMode: 'Hybrid',
    level: 'National',
    description: 'Mandatory single-window national entrance exam for admission into undergraduate Science and Mathematics programs across Central Universities (DU, BHU, JNU, AMU, Allahabad Univ, Hyderabad Univ, etc.) and participating state/private universities.',
    descriptionHi: 'दिल्ली विश्वविद्यालय, बीएचयू, जेएनयू सहित समस्त केंद्रीय विश्वविद्यालयों में स्नातक विज्ञान पाठ्यक्रमों में प्रवेश हेतु संयुक्त परीक्षा।',
    eligibility: {
      education: 'Candidates must have passed Class 12 or equivalent with Science subjects (Physics, Chemistry, Mathematics, Biology). Candidates appearing in 12th board exams are eligible.',
      educationHi: '12वीं कक्षा में भौतिक विज्ञान, रसायन विज्ञान, गणित अथवा जीव विज्ञान विषयों सहित उत्तीर्ण अथवा अपीयरिंग।',
      percentageRequired: 'Passing marks in 10+2 / Senior Secondary.'
    },
    selectionProcess: [
      'Domain Subject Tests (Physics, Chemistry, Biology, Mathematics, Computer Science)',
      'General Test & Language Test (English/Hindi)',
      'University-wise Counselling and Seat Allotment based on Normalized NTA Score'
    ],
    selectionProcessHi: [
      'डोमेन विषय परीक्षण (भौतिकी, रसायन, गणित, जीवविज्ञान)',
      'भाषा एवं सामान्य परीक्षण',
      'विश्वविद्यालय वार मेरिट सूची एवं काउंसलिंग'
    ],
    examPattern: {
      totalQuestions: 50, // 40 to be attempted out of 50
      totalMarks: 200,
      durationMinutes: 45, // 60 minutes for Math/Physics/Chem/Computer Science
      negativeMarking: '-1 mark for each incorrect response (+5 for correct)',
      sections: [
        {
          id: 'cuet-domain-science',
          name: 'Domain Specific Science Subject',
          nameHi: 'डोमेन विशिष्ट विज्ञान विषय',
          questions: 50,
          marks: 200,
          negativeMarking: '-1 mark'
        }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-02-27',
      applyStartDate: '2026-02-28',
      applyEndDate: '2026-04-05',
      admitCardDate: '2026-05-10',
      examDate: '2026-05-18',
      status: 'active',
      notificationPdfUrl: 'https://exams.nta.ac.in/CUET-UG'
    },
    popularBooks: ['book-cuet-arihant-science', 'book-cuet-disha-domain', 'book-ncert-science-exemplar'],
    syllabusRef: 'cuet-ug-science-syllabus'
  },
  {
    id: 'cuet-pg-science',
    name: 'CUET-PG Science',
    nameHi: 'सीयूईटी-पीजी विज्ञान',
    fullName: 'Common University Entrance Test (PG) - Science Disciplines',
    fullNameHi: 'विश्वविद्यालय सामान्य प्रवेश परीक्षा (पीजी) - विज्ञान संकाय',
    conductingBody: 'National Testing Agency (NTA)',
    conductingBodyHi: 'राष्ट्रीय परीक्षा एजेंसी',
    officialUrl: 'https://pgcuet.samarth.ac.in',
    category: 'science',
    subCategory: 'Postgraduate Science Entrance (M.Sc., MCA, M.Tech)',
    frequency: 'Annual (March)',
    examMode: 'CBT',
    level: 'National',
    description: 'National entrance examination for admission into Post Graduate Science programs (Physics SCQP24, Chemistry SCQP08, Mathematics SCQP19, Life Science SCQP17, Computer Science SCQP09, Environmental Science SCQP11) across Central and participating universities.',
    descriptionHi: 'केंद्रीय और सहभागी विश्वविद्यालयों में एम.एससी. विज्ञान पाठ्यक्रमों में प्रवेश हेतु राष्ट्रीय स्तर की परीक्षा।',
    eligibility: {
      education: "Bachelor's Degree in relevant Science discipline or equivalent from a recognized university.",
      educationHi: 'मान्यता प्राप्त विश्वविद्यालय से संबंधित विज्ञान विषय में स्नातक (B.Sc.) डिग्री।',
      percentageRequired: '50% to 55% aggregate marks in Bachelor degree (as per target university regulations).'
    },
    selectionProcess: [
      'Single Paper Computer Based Test of 75 core domain questions (300 Marks)',
      'Centralized NTA Score Card',
      'University-specific counseling and admission'
    ],
    selectionProcessHi: [
      '75 डोमेन प्रश्नों की कंप्यूटर आधारित परीक्षा (300 अंक)',
      'एनटीए स्कोर कार्ड',
      'विश्वविद्यालय स्तर पर प्रवेश प्रक्रिया'
    ],
    examPattern: {
      totalQuestions: 75,
      totalMarks: 300,
      durationMinutes: 105,
      negativeMarking: '-1 mark for each incorrect response (+4 for correct)',
      sections: [
        {
          id: 'cuet-pg-domain',
          name: 'Core Science Domain Discipline Knowledge',
          nameHi: 'मूल विज्ञान विषय ज्ञान',
          questions: 75,
          marks: 300,
          negativeMarking: '-1 mark'
        }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2025-12-24',
      applyStartDate: '2025-12-26',
      applyEndDate: '2026-02-07',
      admitCardDate: '2026-03-05',
      examDate: '2026-03-13',
      status: 'active',
      notificationPdfUrl: 'https://pgcuet.samarth.ac.in'
    },
    popularBooks: ['book-cuet-pg-physics-arihant', 'book-cuet-pg-chemistry-disha'],
    syllabusRef: 'cuet-pg-science-syllabus'
  },
  {
    id: 'iat-iiser',
    name: 'IISER Aptitude Test (IAT)',
    nameHi: 'आईआईएसईआर एप्टीट्यूड टेस्ट',
    fullName: 'IISER Aptitude Test for BS-MS Dual Degree & BS Programs',
    fullNameHi: 'आईआईएसईआर एप्टीट्यूड टेस्ट - बीएस-एमएस दोहरी उपाधि',
    conductingBody: 'Joint Admissions Committee (IISERs)',
    conductingBodyHi: 'संयुक्त प्रवेश समिति (आईआईएसईआर)',
    officialUrl: 'https://iiseradmission.ac.in',
    category: 'science',
    subCategory: 'Science Research Undergraduate Entrance (IISERs, IISc, IITM)',
    frequency: 'Annual (June)',
    examMode: 'CBT',
    level: 'National',
    description: 'Premier national aptitude test for admission into the 5-year BS-MS dual degree programs across 7 IISERs (Berhampur, Bhopal, Kolkata, Mohali, Pune, Thiruvananthapuram, Tirupati), IISc Bangalore BS program, and IIT Madras BS Medical Sciences.',
    descriptionHi: 'आईआईएसईआर (7 संस्थान), आईआईएससी बैंगलोर एवं आईआईटी मद्रास में उच्च स्तरीय वैज्ञानिक शोध एवं बीएस-एमएस पाठ्यक्रमों में प्रवेश हेतु परीक्षा।',
    eligibility: {
      education: 'Candidates who have passed 10+2 with Science stream (Physics, Chemistry, Mathematics, and/or Biology) with at least 60% marks (55% for SC/ST/PwD).',
      educationHi: '12वीं कक्षा में विज्ञान संकाय में न्यूनतम 60% अंकों के साथ उत्तीर्ण (आरक्षित वर्ग हेतु 55%)।',
      percentageRequired: '60% aggregate in 10+2.'
    },
    selectionProcess: [
      'Computer Based Test of 3 hours with 60 questions (15 each from Physics, Chemistry, Math, Biology)',
      'IAT Rank Generation',
      'Central Joint Admissions Committee (JAC) Counseling & Seat Allocation'
    ],
    selectionProcessHi: [
      '3 घंटे की सीबीटी परीक्षा (भौतिकी, रसायन, गणित, जीवविज्ञान प्रत्येक से 15 प्रश्न)',
      'आईआईटी रैंक निर्धारण एवं काउंसलिंग'
    ],
    examPattern: {
      totalQuestions: 60,
      totalMarks: 240,
      durationMinutes: 180,
      negativeMarking: '-1 mark for each incorrect response (+4 for correct)',
      sections: [
        { id: 'iat-phy', name: 'Physics', nameHi: 'भौतिकी', questions: 15, marks: 60, negativeMarking: '-1 mark' },
        { id: 'iat-chem', name: 'Chemistry', nameHi: 'रसायन विज्ञान', questions: 15, marks: 60, negativeMarking: '-1 mark' },
        { id: 'iat-math', name: 'Mathematics', nameHi: 'गणित', questions: 15, marks: 60, negativeMarking: '-1 mark' },
        { id: 'iat-bio', name: 'Biology', nameHi: 'जीव विज्ञान', questions: 15, marks: 60, negativeMarking: '-1 mark' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-03-01',
      applyStartDate: '2026-03-05',
      applyEndDate: '2026-05-10',
      admitCardDate: '2026-05-30',
      examDate: '2026-06-08',
      status: 'active',
      notificationPdfUrl: 'https://iiseradmission.ac.in'
    },
    popularBooks: ['book-iat-prep-guide', 'book-ncert-exemplar-science'],
    syllabusRef: 'iat-science-syllabus'
  },
  {
    id: 'nest-exam',
    name: 'NEST',
    nameHi: 'नेस्ट (NEST)',
    fullName: 'National Entrance Screening Test for NISER & UM-DAE CEBS',
    fullNameHi: 'राष्ट्रीय प्रवेश स्क्रीनिंग परीक्षा (एनआईएसईआर व सीईबीएस)',
    conductingBody: 'NISER Bhubaneswar and UM-DAE CEBS Mumbai',
    conductingBodyHi: 'एनआईएसईआर भुवनेश्वर एवं मुंबई विश्वविद्यालय परमाणु ऊर्जा विभाग',
    officialUrl: 'https://nestexam.in',
    category: 'science',
    subCategory: 'Integrated M.Sc. in Basic Sciences',
    frequency: 'Annual (June)',
    examMode: 'CBT',
    level: 'National',
    description: 'Screening test for admission into the 5-year Integrated M.Sc. programme in basic sciences (Biology, Chemistry, Mathematics, and Physics) at NISER Bhubaneswar and University of Mumbai - Department of Atomic Energy Centre for Excellence in Basic Sciences (UM-DAE CEBS).',
    descriptionHi: 'परमाणु ऊर्जा विभाग से संबद्ध प्रतिष्ठित संस्थानों (NISER एवं CEBS) में 5-वर्षीय एकीकृत एम.एससी. पाठ्यक्रम में प्रवेश हेतु स्क्रीनिंग परीक्षा।',
    eligibility: {
      education: 'Candidates who have passed 10+2 with regular science stream with at least 60% aggregate marks (55% for SC/ST/PwD). Born on or after August 01, 2005 (with relaxation for reserved categories).',
      educationHi: '12वीं कक्षा में विज्ञान संकाय में न्यूनतम 60% कुल अंकों सहित उत्तीर्ण।',
      percentageRequired: '60% in Class 12.'
    },
    selectionProcess: [
      'Computer Based Test of 3.5 hours',
      'Merit list based on the best three scores out of four subject sections (Biology, Chemistry, Mathematics, Physics)',
      'Admission counselling and DISHA scholarship grant'
    ],
    selectionProcessHi: [
      '3.5 घंटे की कंप्यूटर आधारित परीक्षा (चार में से सर्वश्रेष्ठ 3 विषय स्कोर मान्य)',
      'संस्थान वार मेरिट व दिशा छात्रवृत्ति आवंटन'
    ],
    examPattern: {
      totalQuestions: 68, // 17 questions in each of 4 subjects
      totalMarks: 180, // Best 3 of 4 subjects (60 marks each)
      durationMinutes: 210,
      negativeMarking: '-1 mark for wrong MCQ, 0 for unanswered',
      sections: [
        { id: 'nest-bio', name: 'Biology', nameHi: 'जीव विज्ञान', questions: 17, marks: 60, negativeMarking: '-1 mark' },
        { id: 'nest-chem', name: 'Chemistry', nameHi: 'रसायन विज्ञान', questions: 17, marks: 60, negativeMarking: '-1 mark' },
        { id: 'nest-math', name: 'Mathematics', nameHi: 'गणित', questions: 17, marks: 60, negativeMarking: '-1 mark' },
        { id: 'nest-phy', name: 'Physics', nameHi: 'भौतिकी', questions: 17, marks: 60, negativeMarking: '-1 mark' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-03-10',
      applyStartDate: '2026-03-20',
      applyEndDate: '2026-05-25',
      admitCardDate: '2026-06-12',
      examDate: '2026-06-28',
      status: 'active',
      notificationPdfUrl: 'https://nestexam.in'
    },
    popularBooks: ['book-nest-guide-arihant', 'book-ncert-physics-chemistry-biology'],
    syllabusRef: 'nest-science-syllabus'
  },
  {
    id: 'jest-exam',
    name: 'JEST',
    nameHi: 'जेस्ट (JEST)',
    fullName: 'Joint Entrance Screening Test (Physics & Theoretical Computer Science)',
    fullNameHi: 'संयुक्त प्रवेश स्क्रीनिंग टेस्ट (भौतिक विज्ञान व सैद्धांतिक कंप्यूटर विज्ञान)',
    conductingBody: 'Participating Premier Research Institutes (IISc, TIFR, IUCAA, RRI, BARC, HRI, SINP, IMSc, etc.)',
    conductingBodyHi: 'प्रमुख राष्ट्रीय शोध संस्थान',
    officialUrl: 'https://jest.org.in',
    category: 'science',
    subCategory: 'Ph.D. & Integrated Ph.D. Entrance',
    frequency: 'Annual (March)',
    examMode: 'Hybrid',
    level: 'National',
    description: 'National screening test for admission to Ph.D. and Integrated Ph.D. programmes in Physics, Theoretical Computer Science, Neuroscience, and Computational Biology across over 30 premier autonomous research institutes in India recognized by SERB.',
    descriptionHi: 'टीआईएफआर, आईआईएससी, आयुका, भाभा परमाणु अनुसंधान केंद्र सहित 30+ अग्रणी शोध संस्थानों में पीएचडी एवं एकीकृत पीएचडी हेतु परीक्षा।',
    eligibility: {
      education: 'M.Sc. in Physics/Applied Physics for Ph.D. Physics; B.Sc./B.E./B.Tech in relevant disciplines for Integrated Ph.D.',
      educationHi: 'एम.एससी. (भौतिकी/गणित/इंजीनियरिंग) अथवा संबंधित विषय में स्नातक।',
      percentageRequired: 'First class or high second class in qualifying degree.'
    },
    selectionProcess: [
      'Screening Written Examination in Physics or Theoretical Computer Science',
      'Direct interview calls by individual premier research institutions (IUCAA, TIFR, RRI, etc.)'
    ],
    selectionProcessHi: [
      'स्क्रीनिंग लिखित परीक्षा',
      'शोध संस्थानों द्वारा प्रत्यक्ष साक्षात्कार'
    ],
    examPattern: {
      totalQuestions: 50,
      totalMarks: 100,
      durationMinutes: 180,
      negativeMarking: 'Part A (-1 mark for 3-mark questions), Part B (-0.33 for 1-mark questions), Part C (No negative)',
      sections: [
        { id: 'jest-part-a', name: 'Part A (Advanced Problems)', nameHi: 'भाग क (उन्नत प्रश्न)', questions: 15, marks: 45, negativeMarking: '-1 mark' },
        { id: 'jest-part-b', name: 'Part B (Fundamental Concepts)', nameHi: 'भाग ख (मूलभूत प्रश्न)', questions: 10, marks: 10, negativeMarking: '-0.33 mark' },
        { id: 'jest-part-c', name: 'Part C (Numerical/Analytical)', nameHi: 'भाग ग (संख्यात्मक)', questions: 25, marks: 45, negativeMarking: '0 (None)' }
      ]
    },
    latestNotification: {
      year: 2026,
      notificationDate: '2026-01-05',
      applyStartDate: '2026-01-08',
      applyEndDate: '2026-02-12',
      admitCardDate: '2026-02-24',
      examDate: '2026-03-08',
      status: 'active',
      notificationPdfUrl: 'https://jest.org.in'
    },
    popularBooks: ['book-jest-physics-tifr', 'book-classical-quantum-physics'],
    syllabusRef: 'jest-science-syllabus'
  }
];
