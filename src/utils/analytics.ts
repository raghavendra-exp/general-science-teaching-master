import { TestSession, Question } from '../types';

export interface SectionAnalysis {
  sectionName: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  score: number;
  accuracy: number;
  avgTimeSeconds: number;
}

export interface TopicAnalysis {
  topic: string;
  total: number;
  correct: number;
  incorrect: number;
  accuracy: number;
  status: 'Strong' | 'Average' | 'Needs Revision';
}

export interface FullTestAnalysis {
  totalQuestions: number;
  attemptedCount: number;
  unattemptedCount: number;
  correctCount: number;
  incorrectCount: number;
  rawScore: number;
  maxScore: number;
  percentageScore: number;
  accuracy: number;
  totalTimeSpentSeconds: number;
  avgTimePerQuestionSeconds: number;
  sectionBreakdown: SectionAnalysis[];
  topicBreakdown: TopicAnalysis[];
  strongTopics: string[];
  weakTopics: string[];
}

export const computeTestAnalytics = (
  session: TestSession,
  marksPerQuestion = 1,
  negativePenalty = 0.25
): FullTestAnalysis => {
  const totalQuestions = session.questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let attemptedCount = 0;
  let totalTime = 0;

  const topicMap: Record<string, { total: number; correct: number; incorrect: number }> = {};
  const subjectMap: Record<string, { total: number; attempted: number; correct: number; incorrect: number; time: number }> = {};

  session.questions.forEach((q, idx) => {
    const userAnswer = session.userAnswers[idx];
    const timeSpent = session.timeSpentPerQuestion[idx] || 0;
    totalTime += timeSpent;

    // Track topic
    if (!topicMap[q.topic]) {
      topicMap[q.topic] = { total: 0, correct: 0, incorrect: 0 };
    }
    topicMap[q.topic].total++;

    // Track subject
    if (!subjectMap[q.subject]) {
      subjectMap[q.subject] = { total: 0, attempted: 0, correct: 0, incorrect: 0, time: 0 };
    }
    subjectMap[q.subject].total++;
    subjectMap[q.subject].time += timeSpent;

    if (userAnswer !== undefined && userAnswer !== -1) {
      attemptedCount++;
      subjectMap[q.subject].attempted++;

      if (userAnswer === q.answer) {
        correctCount++;
        topicMap[q.topic].correct++;
        subjectMap[q.subject].correct++;
      } else {
        incorrectCount++;
        topicMap[q.topic].incorrect++;
        subjectMap[q.subject].incorrect++;
      }
    }
  });

  const unattemptedCount = totalQuestions - attemptedCount;
  const rawScore = (correctCount * marksPerQuestion) - (incorrectCount * negativePenalty);
  const maxScore = totalQuestions * marksPerQuestion;
  const percentageScore = maxScore > 0 ? (rawScore / maxScore) * 100 : 0;
  const accuracy = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;
  const avgTimePerQuestionSeconds = totalQuestions > 0 ? Math.round(totalTime / totalQuestions) : 0;

  // Build section breakdown
  const sectionBreakdown: SectionAnalysis[] = Object.entries(subjectMap).map(([subject, stats]) => {
    const secScore = (stats.correct * marksPerQuestion) - (stats.incorrect * negativePenalty);
    const secAcc = stats.attempted > 0 ? (stats.correct / stats.attempted) * 100 : 0;
    const avgSecTime = stats.total > 0 ? Math.round(stats.time / stats.total) : 0;
    return {
      sectionName: subject,
      totalQuestions: stats.total,
      attempted: stats.attempted,
      correct: stats.correct,
      incorrect: stats.incorrect,
      score: Math.max(0, Number(secScore.toFixed(2))),
      accuracy: Math.round(secAcc),
      avgTimeSeconds: avgSecTime
    };
  });

  // Build topic breakdown
  const strongTopics: string[] = [];
  const weakTopics: string[] = [];
  const topicBreakdown: TopicAnalysis[] = Object.entries(topicMap).map(([topic, stats]) => {
    const topicAcc = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
    let status: 'Strong' | 'Average' | 'Needs Revision' = 'Average';
    if (topicAcc >= 75) {
      status = 'Strong';
      strongTopics.push(topic);
    } else if (topicAcc <= 40) {
      status = 'Needs Revision';
      weakTopics.push(topic);
    }
    return {
      topic,
      total: stats.total,
      correct: stats.correct,
      incorrect: stats.incorrect,
      accuracy: Math.round(topicAcc),
      status
    };
  });

  return {
    totalQuestions,
    attemptedCount,
    unattemptedCount,
    correctCount,
    incorrectCount,
    rawScore: Number(rawScore.toFixed(2)),
    maxScore,
    percentageScore: Number(percentageScore.toFixed(1)),
    accuracy: Number(accuracy.toFixed(1)),
    totalTimeSpentSeconds: totalTime,
    avgTimePerQuestionSeconds,
    sectionBreakdown,
    topicBreakdown,
    strongTopics,
    weakTopics
  };
};
