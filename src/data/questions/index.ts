import { Question, SourceType } from '../../types';
import { ctetQuestions } from './ctetQuestions';
import { csirNetQuestions } from './csirNetQuestions';
import { iitJamQuestions } from './iitJamQuestions';
import { cuetScienceQuestions } from './cuetScienceQuestions';
import { teachingRecruitmentQuestions } from './teachingRecruitmentQuestions';
import { sscQuestions } from './sscQuestions';
import { pedagogyQuestions } from './pedagogyQuestions';
import { ncertQuestions } from './ncertQuestions';
import { generalStudiesQuestions } from './generalStudiesQuestions';
import { generateQuestionPool } from './generatedPool';

export const allQuestions: Question[] = [
  ...ctetQuestions,
  ...csirNetQuestions,
  ...iitJamQuestions,
  ...cuetScienceQuestions,
  ...teachingRecruitmentQuestions,
  ...sscQuestions,
  ...pedagogyQuestions,
  ...ncertQuestions,
  ...generalStudiesQuestions,
  ...generateQuestionPool()
];

export interface QuestionFilterOptions {
  exam?: string;
  subject?: string;
  topic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'all';
  sourceType?: SourceType | 'all';
  year?: number;
  query?: string;
}

export const filterQuestions = (options: QuestionFilterOptions): Question[] => {
  return allQuestions.filter(q => {
    if (options.exam && options.exam !== 'all' && q.exam !== options.exam) {
      return false;
    }
    if (options.subject && options.subject !== 'all' && q.subject !== options.subject) {
      return false;
    }
    if (options.topic && options.topic !== 'all' && q.topic !== options.topic) {
      return false;
    }
    if (options.difficulty && options.difficulty !== 'all' && q.difficulty !== options.difficulty) {
      return false;
    }
    if (options.sourceType && options.sourceType !== 'all' && q.sourceType !== options.sourceType) {
      return false;
    }
    if (options.year && q.year !== options.year) {
      return false;
    }
    if (options.query) {
      const qLower = options.query.toLowerCase().trim();
      const matchQ = q.question.toLowerCase().includes(qLower) || 
                     (q.questionHi && q.questionHi.includes(qLower)) ||
                     q.subject.toLowerCase().includes(qLower) ||
                     q.topic.toLowerCase().includes(qLower) ||
                     q.source.toLowerCase().includes(qLower) ||
                     q.tags.some(tag => tag.toLowerCase().includes(qLower));
      if (!matchQ) return false;
    }
    return true;
  });
};

export const getQuestionById = (id: string): Question | undefined => {
  return allQuestions.find(q => q.id === id);
};

export const getQuestionsForExam = (examId: string, limit = 50): Question[] => {
  const matching = allQuestions.filter(q => q.exam === examId || q.tags.includes(examId));
  if (matching.length > 0) {
    return matching.slice(0, limit);
  }
  return allQuestions.slice(0, limit);
};

export const getQuestionsByExam = getQuestionsForExam;
