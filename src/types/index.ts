export type Language = 'en' | 'hi';

export type ExamCategory = 
  | 'general' 
  | 'science' 
  | 'teaching_eligibility' 
  | 'teaching_recruitment';

export interface ExamSection {
  id: string;
  name: string;
  nameHi: string;
  questions: number;
  marks: number;
  negativeMarking: string;
  description?: string;
}

export interface ExamPattern {
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  negativeMarking: string;
  sections: ExamSection[];
}

export interface ExamEligibility {
  minAge?: number;
  maxAge?: number;
  ageRelaxation?: { category: string; relaxation: string }[];
  education: string;
  educationHi: string;
  subjectRequirements?: string[];
  teachingQualification?: string[]; // B.Ed, D.El.Ed, etc.
  percentageRequired?: string;
}

export interface LatestNotification {
  year: number;
  notificationDate: string;
  applyStartDate: string;
  applyEndDate: string;
  admitCardDate?: string;
  examDate: string;
  resultDate?: string;
  notificationPdfUrl?: string;
  status: 'active' | 'upcoming' | 'concluded' | 'closed';
}

export interface Exam {
  id: string;
  name: string;
  nameHi: string;
  fullName: string;
  fullNameHi: string;
  conductingBody: string;
  conductingBodyHi: string;
  officialUrl: string;
  category: ExamCategory;
  subCategory: string;
  frequency: string;
  examMode: 'CBT' | 'Pen & Paper (OMR)' | 'Hybrid';
  level: 'National' | 'State';
  description: string;
  descriptionHi: string;
  eligibility: ExamEligibility;
  selectionProcess: string[];
  selectionProcessHi: string[];
  examPattern: ExamPattern;
  latestNotification: LatestNotification;
  vacancies?: {
    year: number;
    total: number;
    breakdown?: { post: string; count: number }[];
  };
  cutoffTrends?: {
    year: number;
    general: string | number;
    obc?: string | number;
    sc?: string | number;
    st?: string | number;
    ews?: string | number;
  }[];
  popularBooks: string[];
  syllabusRef: string;
}

export interface SyllabusTopic {
  id: string;
  name: string;
  nameHi: string;
  subtopics: string[];
  subtopicsHi?: string[];
  ncertMapping?: { classLevel: number; chapterName: string }[];
  pyqFrequency?: 'High' | 'Medium' | 'Low';
}

export interface SyllabusSubject {
  id: string;
  name: string;
  nameHi: string;
  weightage?: string;
  topics: SyllabusTopic[];
}

export interface Syllabus {
  examId: string;
  examName: string;
  subjects: SyllabusSubject[];
}

export type SourceType = 'VERIFIED PYQ' | 'ORIGINAL' | 'PYQ-STYLE';

export interface Question {
  id: string;
  exam: string;
  paper?: string;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  questionHi?: string;
  options: string[];
  optionsHi?: string[];
  answer: number; // 0, 1, 2, 3
  explanation: string;
  explanationHi?: string;
  sourceType: SourceType;
  source: string;
  year?: number;
  tags: string[];
}

export interface NcertChapter {
  classLevel: number;
  subject: string;
  chapterNumber: number;
  chapterName: string;
  chapterNameHi: string;
  keyConcepts: string[];
  examRelevance: string[];
  linkedPyqCount: number;
  officialPdfUrl: string;
}

export interface PedagogyTopic {
  id: string;
  category: 
    | 'child_development' 
    | 'learning_theories' 
    | 'inclusive_education' 
    | 'assessment' 
    | 'language_pedagogy' 
    | 'subject_pedagogy' 
    | 'classroom_ict';
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  keyTheorists?: string[];
  corePrinciples: string[];
  classroomApplication: string;
  examTips: string[];
  samplePyqIds?: string[];
}

export interface ScienceConcept {
  id: string;
  discipline: 'physics' | 'chemistry' | 'biology' | 'mathematics';
  title: string;
  titleHi: string;
  summary: string;
  summaryHi: string;
  formulas?: { name: string; formula: string; note: string }[];
  keyReactionsOrLaws?: string[];
  targetExams: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  year: number;
  exams: string[];
  subject: string;
  syllabusCoverage: string;
  pyqCoverage: string;
  recommendedLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Comprehensive';
  legitimateLink: string;
  storeType: 'Publisher' | 'Amazon' | 'Flipkart' | 'Google Books' | 'National Portal';
}

export interface NotificationUpdate {
  id: string;
  examId: string;
  examName: string;
  headline: string;
  headlineHi: string;
  summary: string;
  summaryHi: string;
  category: '🔴 Important' | '🟠 Deadline' | '🟢 New' | '🔵 Information';
  type: 'notification' | 'admit_card' | 'exam_date' | 'answer_key' | 'result' | 'policy';
  date: string;
  officialUrl: string;
  lastVerified: string;
}

export interface CurrentAffairsItem {
  id: string;
  date: string;
  headline: string;
  headlineHi: string;
  summary: string;
  summaryHi: string;
  examRelevance: string[];
  category: 'National' | 'International' | 'Science' | 'Technology' | 'Education' | 'Economy' | 'Schemes' | 'Awards' | 'Sports' | 'Environment' | 'Defence';
  source: string;
  lastVerified: string;
  isEducationLab?: boolean;
}

export interface FormulaItem {
  id: string;
  subject: string;
  topic: string;
  name: string;
  formula: string;
  whereClause?: string;
  applicationTip: string;
}

export interface ShortcutItem {
  id: string;
  subject: string;
  topic: string;
  title: string;
  concept: string;
  standardMethod: string;
  shortcutMethod: string;
  exampleQuestion: string;
  exampleSolution: string;
  timeSaved: string;
}

export interface FlashcardItem {
  id: string;
  category: 'Pedagogy' | 'Science' | 'GK' | 'Formulas' | 'Current Affairs' | 'Psychology';
  front: string;
  frontHi?: string;
  back: string;
  backHi?: string;
  examRelevance: string;
}

export type QuestionStatus = 'answered' | 'marked' | 'answered_marked' | 'not_answered' | 'not_visited';

export interface TestSession {
  testId: string;
  title: string;
  examId?: string;
  questions: Question[];
  userAnswers: Record<number, number>; // index -> selected option
  status: Record<number, QuestionStatus>;
  timeSpentPerQuestion: Record<number, number>; // index -> seconds
  currentQuestionIndex: number;
  durationMinutes: number;
  timeRemainingSeconds: number;
  isSubmitted: boolean;
  submittedAt?: string;
  score?: number;
  accuracy?: number;
  correctCount?: number;
  incorrectCount?: number;
  unattemptedCount?: number;
}

export type MistakeType = 
  | 'Conceptual' 
  | 'Calculation' 
  | 'Memory' 
  | 'Misread' 
  | 'Guess' 
  | 'Careless' 
  | 'Time Pressure';

export interface ErrorNotebookItem {
  questionId: string;
  question: Question;
  userSelectedAnswer: number;
  mistakeType: MistakeType;
  userNotes?: string;
  loggedAt: string;
  revisionDate?: string;
  isResolved: boolean;
}
