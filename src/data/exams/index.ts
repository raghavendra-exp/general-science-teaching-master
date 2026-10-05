import { Exam, ExamCategory } from '../../types';
import { generalExams } from './generalExams';
import { scienceExams } from './scienceExams';
import { teachingEligibilityExams } from './teachingExams';
import { teacherRecruitmentExams } from './teacherRecruitmentExams';

export { generalExams, scienceExams, teachingEligibilityExams, teacherRecruitmentExams };

export const allExams: Exam[] = [
  ...generalExams,
  ...scienceExams,
  ...teachingEligibilityExams,
  ...teacherRecruitmentExams
];

export const getExamById = (id: string): Exam | undefined => {
  return allExams.find(exam => exam.id === id);
};

export const getExamsByCategory = (category: ExamCategory): Exam[] => {
  return allExams.filter(exam => exam.category === category);
};

export const searchExams = (query: string): Exam[] => {
  const q = query.toLowerCase().trim();
  if (!q) return allExams;
  return allExams.filter(exam => 
    exam.name.toLowerCase().includes(q) ||
    exam.nameHi.includes(q) ||
    exam.fullName.toLowerCase().includes(q) ||
    exam.conductingBody.toLowerCase().includes(q) ||
    exam.category.toLowerCase().includes(q) ||
    exam.description.toLowerCase().includes(q)
  );
};
