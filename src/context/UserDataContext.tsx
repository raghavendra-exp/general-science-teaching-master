import React, { createContext, useContext, useState, useEffect } from 'react';
import { Question, ErrorNotebookItem, MistakeType, TestSession } from '../types';

interface StudyPlan {
  examId: string;
  examName: string;
  targetDate: string;
  dailyHours: number;
  currentLevel: 'Beginner' | 'Intermediate' | 'Revision';
  weakSubjects: string[];
  strongSubjects: string[];
  createdAt: string;
}

interface UserDataContextType {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  errorNotebook: ErrorNotebookItem[];
  addToErrorNotebook: (question: Question, userSelectedAnswer: number, mistakeType: MistakeType, notes?: string) => void;
  removeFromErrorNotebook: (questionId: string) => void;
  resolveErrorItem: (questionId: string) => void;
  updateMistakeType: (questionId: string, mistakeType: MistakeType) => void;

  testHistory: TestSession[];
  saveCompletedTest: (session: TestSession) => void;
  clearTestHistory: () => void;

  flashcardProgress: Record<string, 'known' | 'review' | 'bookmarked'>;
  setFlashcardStatus: (cardId: string, status: 'known' | 'review' | 'bookmarked') => void;

  studyPlan: StudyPlan | null;
  saveStudyPlan: (plan: StudyPlan) => void;
  deleteStudyPlan: () => void;

  exportUserData: () => string;
  importUserData: (jsonData: string) => boolean;
  resetAllUserData: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gst_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [errorNotebook, setErrorNotebook] = useState<ErrorNotebookItem[]>(() => {
    try {
      const saved = localStorage.getItem('gst_error_notebook');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [testHistory, setTestHistory] = useState<TestSession[]>(() => {
    try {
      const saved = localStorage.getItem('gst_test_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [flashcardProgress, setFlashcardProgress] = useState<Record<string, 'known' | 'review' | 'bookmarked'>>(() => {
    try {
      const saved = localStorage.getItem('gst_flashcard_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [studyPlan, setStudyPlanState] = useState<StudyPlan | null>(() => {
    try {
      const saved = localStorage.getItem('gst_study_plan');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Save to local storage on changes
  useEffect(() => {
    localStorage.setItem('gst_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('gst_error_notebook', JSON.stringify(errorNotebook));
  }, [errorNotebook]);

  useEffect(() => {
    localStorage.setItem('gst_test_history', JSON.stringify(testHistory));
  }, [testHistory]);

  useEffect(() => {
    localStorage.setItem('gst_flashcard_progress', JSON.stringify(flashcardProgress));
  }, [flashcardProgress]);

  useEffect(() => {
    if (studyPlan) {
      localStorage.setItem('gst_study_plan', JSON.stringify(studyPlan));
    } else {
      localStorage.removeItem('gst_study_plan');
    }
  }, [studyPlan]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const addToErrorNotebook = (
    question: Question, 
    userSelectedAnswer: number, 
    mistakeType: MistakeType, 
    notes?: string
  ) => {
    setErrorNotebook(prev => {
      const existing = prev.find(item => item.questionId === question.id);
      if (existing) {
        return prev.map(item => 
          item.questionId === question.id 
            ? { ...item, userSelectedAnswer, mistakeType, userNotes: notes || item.userNotes, loggedAt: new Date().toISOString(), isResolved: false }
            : item
        );
      }
      return [
        {
          questionId: question.id,
          question,
          userSelectedAnswer,
          mistakeType,
          userNotes: notes,
          loggedAt: new Date().toISOString(),
          isResolved: false
        },
        ...prev
      ];
    });
  };

  const removeFromErrorNotebook = (questionId: string) => {
    setErrorNotebook(prev => prev.filter(item => item.questionId !== questionId));
  };

  const resolveErrorItem = (questionId: string) => {
    setErrorNotebook(prev => 
      prev.map(item => item.questionId === questionId ? { ...item, isResolved: !item.isResolved } : item)
    );
  };

  const updateMistakeType = (questionId: string, mistakeType: MistakeType) => {
    setErrorNotebook(prev => 
      prev.map(item => item.questionId === questionId ? { ...item, mistakeType } : item)
    );
  };

  const saveCompletedTest = (session: TestSession) => {
    setTestHistory(prev => [session, ...prev]);
  };

  const clearTestHistory = () => {
    setTestHistory([]);
  };

  const setFlashcardStatus = (cardId: string, status: 'known' | 'review' | 'bookmarked') => {
    setFlashcardProgress(prev => ({ ...prev, [cardId]: status }));
  };

  const saveStudyPlan = (plan: StudyPlan) => {
    setStudyPlanState(plan);
  };

  const deleteStudyPlan = () => {
    setStudyPlanState(null);
  };

  const exportUserData = (): string => {
    const data = {
      bookmarks,
      errorNotebook,
      testHistory,
      flashcardProgress,
      studyPlan,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  };

  const importUserData = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed.bookmarks) setBookmarks(parsed.bookmarks);
      if (parsed.errorNotebook) setErrorNotebook(parsed.errorNotebook);
      if (parsed.testHistory) setTestHistory(parsed.testHistory);
      if (parsed.flashcardProgress) setFlashcardProgress(parsed.flashcardProgress);
      if (parsed.studyPlan) setStudyPlanState(parsed.studyPlan);
      return true;
    } catch {
      return false;
    }
  };

  const resetAllUserData = () => {
    setBookmarks([]);
    setErrorNotebook([]);
    setTestHistory([]);
    setFlashcardProgress({});
    setStudyPlanState(null);
    localStorage.removeItem('gst_bookmarks');
    localStorage.removeItem('gst_error_notebook');
    localStorage.removeItem('gst_test_history');
    localStorage.removeItem('gst_flashcard_progress');
    localStorage.removeItem('gst_study_plan');
  };

  return (
    <UserDataContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
        errorNotebook,
        addToErrorNotebook,
        removeFromErrorNotebook,
        resolveErrorItem,
        updateMistakeType,
        testHistory,
        saveCompletedTest,
        clearTestHistory,
        flashcardProgress,
        setFlashcardStatus,
        studyPlan,
        saveStudyPlan,
        deleteStudyPlan,
        exportUserData,
        importUserData,
        resetAllUserData
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = (): UserDataContextType => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
