import { Book } from '../../types';

export const booksData: Book[] = [
  // Teaching Exams Books
  {
    id: 'book-ctet-arihant-success-master',
    title: 'CTET Success Master Paper-II Mathematics & Science (Classes VI-VIII)',
    author: 'Arihant Experts',
    publisher: 'Arihant Publications',
    edition: '2026 Latest Revised Edition',
    year: 2026,
    exams: ['ctet', 'uptet', 'reet', 'htet'],
    subject: 'Child Development, Math & Science',
    syllabusCoverage: 'Complete coverage of CDP (30 Marks), Mathematics Content & Pedagogy (30 Marks), and Science (30 Marks) as per CBSE pattern.',
    pyqCoverage: 'Includes 10+ previous years solved papers (2018-2024) with detailed explanations.',
    recommendedLevel: 'Comprehensive',
    legitimateLink: 'https://www.arihantbooks.com',
    storeType: 'Publisher'
  },
  {
    id: 'book-cdp-himanshi-singh',
    title: 'Child Development & Pedagogy (CDP Master Guide for CTET & TETs)',
    author: 'Himanshi Singh',
    publisher: 'Disha Publication',
    edition: '5th Edition',
    year: 2025,
    exams: ['ctet', 'kvs-prt-tgt-pgt', 'dsssb-teacher', 'uptet', 'reet'],
    subject: 'Child Development and Pedagogy',
    syllabusCoverage: 'Full theoretical foundations of Piaget, Vygotsky, Kohlberg, Inclusive Education, and NCF/NEP 2020.',
    pyqCoverage: 'Over 2,500+ chapter-wise CTET and State TET previous questions with analytical solutions.',
    recommendedLevel: 'Beginner',
    legitimateLink: 'https://www.dishapublication.com',
    storeType: 'Publisher'
  },
  {
    id: 'book-kvs-pedagogy-rohit-vaidwan',
    title: 'Perspectives on Education and Leadership for KVS, NVS & DSSSB',
    author: 'Rohit Vaidwan',
    publisher: 'Adhyayan Mantra Publications',
    edition: '3rd Edition',
    year: 2025,
    exams: ['kvs-prt-tgt-pgt', 'nvs-recruitment', 'dsssb-teacher', 'emrs-recruitment'],
    subject: 'Perspectives on Education & School Leadership',
    syllabusCoverage: 'Aligned with KVS 40/60 Marks syllabus: Understanding Learner, Teaching-Learning, Conducive Environment, and NEP 2020.',
    pyqCoverage: 'Includes solved mock papers and genuine PYQs from KVS CBT and DSSSB exams.',
    recommendedLevel: 'Comprehensive',
    legitimateLink: 'https://www.amazon.in',
    storeType: 'Amazon'
  },
  {
    id: 'book-yct-ctet-all-shifts',
    title: 'CTET Paper I & II Bilingual Chapterwise Solved Papers Bank',
    author: 'Youth Competition Times Editorial Board',
    publisher: 'Youth Competition Times (YCT)',
    edition: '2026 Edition',
    year: 2026,
    exams: ['ctet', 'uptet', 'mptet'],
    subject: 'All Subjects (Bilingual Hindi & English)',
    syllabusCoverage: 'Exhaustive question bank covering all CBSE CBT and OMR examination shifts.',
    pyqCoverage: 'Over 12,000+ authentic shift-wise questions with official answer keys verified.',
    recommendedLevel: 'Advanced',
    legitimateLink: 'https://www.yctbooks.com',
    storeType: 'Publisher'
  },

  // Science Exams Books
  {
    id: 'book-csir-life-pathfinder',
    title: 'Life Sciences: Fundamentals and Practice (Parts I & II)',
    author: 'Pranav Kumar & Usha Mina',
    publisher: 'Pathfinder Publication',
    edition: '10th Edition',
    year: 2025,
    exams: ['csir-net', 'gate-science', 'iit-jam'],
    subject: 'Life Sciences (Molecular Bio, Biochemistry, Cell Bio, Genetics)',
    syllabusCoverage: 'Standard national textbook covering all 13 modules of the CSIR-UGC NET Life Sciences syllabus.',
    pyqCoverage: 'Chapter-wise MCQ and analytical Part C problem sets from past 15 years.',
    recommendedLevel: 'Comprehensive',
    legitimateLink: 'https://pathfinderpublication.com',
    storeType: 'Publisher'
  },
  {
    id: 'book-csir-physical-arihant',
    title: 'CSIR-UGC NET/JRF Physical Sciences Chapterwise Solved Papers',
    author: 'Ankush Sharma & Preeti Gupta',
    publisher: 'Arihant Publications',
    edition: 'Latest Edition',
    year: 2025,
    exams: ['csir-net', 'gate-science', 'jest-exam'],
    subject: 'Physical Sciences',
    syllabusCoverage: 'Classical Mechanics, Electrodynamics, Quantum Mechanics, Thermo/Statistical, and Condensed Matter.',
    pyqCoverage: 'Detailed solutions for both Part B and advanced Part C conceptual problems.',
    recommendedLevel: 'Advanced',
    legitimateLink: 'https://www.arihantbooks.com',
    storeType: 'Publisher'
  },
  {
    id: 'book-jam-physics-arihant',
    title: 'IIT-JAM Physics: Chapterwise Previous Years Solved Papers',
    author: 'Atique Hasan',
    publisher: 'Arihant Publications',
    edition: '2026 Edition',
    year: 2026,
    exams: ['iit-jam', 'jest-exam', 'cuet-pg-science'],
    subject: 'Physics',
    syllabusCoverage: 'Mechanics, Electrodynamics, Optics, Waves, Thermodynamics, and Modern Physics.',
    pyqCoverage: 'Covers 2005 to 2025 JAM papers with step-by-step mathematical derivations.',
    recommendedLevel: 'Intermediate',
    legitimateLink: 'https://www.amazon.in',
    storeType: 'Amazon'
  },
  {
    id: 'book-cuet-arihant-science',
    title: 'CUET (UG) Section II Domain Subject: Physics, Chemistry, Biology & Math',
    author: 'Arihant Experts',
    publisher: 'Arihant Publications',
    edition: '2026 Edition',
    year: 2026,
    exams: ['cuet-ug-science'],
    subject: 'Science Domains (NCERT Class 12 Aligned)',
    syllabusCoverage: 'Complete Class 12 rationalized NCERT syllabus mapped directly to NTA CUET-UG exam pattern.',
    pyqCoverage: '10 Practice Sets and previous years NTA CUET memory-based question papers.',
    recommendedLevel: 'Intermediate',
    legitimateLink: 'https://www.arihantbooks.com',
    storeType: 'Publisher'
  },

  // General & SSC Exams Books
  {
    id: 'book-ssc-kiran-math',
    title: 'Kiran SSC Mathematics Chapterwise & Typewise Solved Papers (11900+ Objective Questions)',
    author: 'Kiran Institute of Career Excellence',
    publisher: 'Kiran Prakashan',
    edition: '2026 Edition',
    year: 2026,
    exams: ['ssc-cgl', 'ssc-chsl'],
    subject: 'Quantitative Aptitude & Advanced Math',
    syllabusCoverage: 'Arithmetic, Algebra, Geometry, Mensuration, Trigonometry, Statistics & Probability.',
    pyqCoverage: '11,900+ authentic TCS question bank from 1999 to present CGL, CHSL, CPO.',
    recommendedLevel: 'Comprehensive',
    legitimateLink: 'https://www.kiranprakashan.com',
    storeType: 'Publisher'
  },
  {
    id: 'book-ssc-blackbook-english',
    title: 'BlackBook of English Vocabulary',
    author: 'Nikhil Gupta',
    publisher: 'Gupta Press',
    edition: 'Latest Edition',
    year: 2025,
    exams: ['ssc-cgl', 'ssc-chsl', 'kvs-prt-tgt-pgt', 'dsssb-teacher'],
    subject: 'English Vocabulary (Synonyms, Antonyms, One Word, Idioms)',
    syllabusCoverage: 'All high-frequency vocabulary asked in central government recruitment exams.',
    pyqCoverage: 'Categorized with repetition index showing how many times words were asked.',
    recommendedLevel: 'Intermediate',
    legitimateLink: 'https://www.amazon.in',
    storeType: 'Amazon'
  },
  {
    id: 'book-polity-laxmikanth',
    title: 'Indian Polity for Civil Services & State Examinations',
    author: 'M. Laxmikanth',
    publisher: 'McGraw Hill India',
    edition: '7th Edition',
    year: 2024,
    exams: ['ssc-cgl', 'uppsc-pcs', 'ctet', 'kvs-prt-tgt-pgt'],
    subject: 'Indian Polity and Constitution',
    syllabusCoverage: 'The gold standard reference text for the Constitution of India and governance structures.',
    pyqCoverage: 'Includes conceptual review MCQs and UPSC/State PSC question patterns.',
    recommendedLevel: 'Comprehensive',
    legitimateLink: 'https://www.mheducation.co.in',
    storeType: 'Publisher'
  }
];

export const getBooksForExam = (examId: string): Book[] => {
  return booksData.filter(b => b.exams.includes(examId));
};
