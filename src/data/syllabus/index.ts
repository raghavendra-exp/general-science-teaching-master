import { Syllabus } from '../../types';
import { ctetSyllabus } from './ctetSyllabus';
import { csirNetSyllabus } from './csirNetSyllabus';
import { iitJamSyllabus, cuetUgScienceSyllabus } from './scienceSyllabi';
import { sscCglSyllabus, kvsSyllabus } from './generalTeachingSyllabi';

export const allSyllabi: Syllabus[] = [
  ctetSyllabus,
  csirNetSyllabus,
  iitJamSyllabus,
  cuetUgScienceSyllabus,
  sscCglSyllabus,
  kvsSyllabus
];

export const getSyllabusByExamId = (examId: string): Syllabus | undefined => {
  return allSyllabi.find(s => s.examId === examId);
};
