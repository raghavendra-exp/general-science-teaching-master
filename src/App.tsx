import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserDataProvider } from './context/UserDataContext';

// Components
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { MobileNav } from './components/common/MobileNav';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ExamsDirectoryPage } from './pages/ExamsDirectoryPage';
import { ExamDetailPage } from './pages/ExamDetailPage';
import { EligibilityCheckerPage } from './pages/EligibilityCheckerPage';
import { MockTestsPage } from './pages/MockTestsPage';
import { MockTestActivePage } from './pages/MockTestActivePage';
import { PracticeHubPage } from './pages/PracticeHubPage';
import { QuestionBankPage } from './pages/QuestionBankPage';
import { NcertMasterPage } from './pages/NcertMasterPage';
import { TeachingPedagogyPage } from './pages/TeachingPedagogyPage';
import { ScienceConceptsPage } from './pages/ScienceConceptsPage';
import { GeneralStudiesPage } from './pages/GeneralStudiesPage';
import { SpeedTrainerPage } from './pages/SpeedTrainerPage';
import { ShortcutLabPage } from './pages/ShortcutLabPage';
import { FormulaMasterPage } from './pages/FormulaMasterPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { CurrentAffairsPage } from './pages/CurrentAffairsPage';
import { EducationNewsPage } from './pages/EducationNewsPage';
import { BookLibraryPage } from './pages/BookLibraryPage';
import { NotificationTrackerPage } from './pages/NotificationTrackerPage';
import { StudyPlannerPage } from './pages/StudyPlannerPage';
import { CareerExplorerPage } from './pages/CareerExplorerPage';
import { AnalyticsDashboardPage } from './pages/AnalyticsDashboardPage';
import { ErrorNotebookPage } from './pages/ErrorNotebookPage';
import { BookmarksPage } from './pages/BookmarksPage';
import { AboutDisclaimerPage } from './pages/AboutDisclaimerPage';

import { Question } from './types';
import { getExamById } from './data/exams';
import { getQuestionsByExam, allQuestions } from './data/questions';

export const MainApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParams, setPageParams] = useState<Record<string, string>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Active Mock Test State
  const [activeMockConfig, setActiveMockConfig] = useState<{
    examId: string;
    questions: Question[];
    durationMinutes: number;
  } | null>(null);

  // Parse initial route from URL Hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        setPageParams({});
        return;
      }
      const [route, queryString] = hash.split('?');
      const params: Record<string, string> = {};
      if (queryString) {
        const searchParams = new URLSearchParams(queryString);
        searchParams.forEach((val, key) => {
          params[key] = val;
        });
      }
      setCurrentPage(route || 'home');
      setPageParams(params);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    setCurrentPage(page);
    setPageParams(params || {});
    setIsSidebarOpen(false);
    
    // Update hash
    let newHash = `#/${page}`;
    if (params && Object.keys(params).length > 0) {
      const sp = new URLSearchParams(params).toString();
      newHash += `?${sp}`;
    }
    window.location.hash = newHash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartMock = (examId: string, customConfig?: { questionCount: number; duration: number }) => {
    const exam = getExamById(examId);
    const examQuestions = getQuestionsByExam(examId);
    let pool = examQuestions.length > 0 ? [...examQuestions] : [...allQuestions];
    
    // Shuffle pool
    pool.sort(() => 0.5 - Math.random());
    const count = customConfig?.questionCount || exam?.examPattern.totalQuestions || 30;
    const questions = pool.slice(0, Math.min(count, pool.length));
    const duration = customConfig?.duration || exam?.examPattern.durationMinutes || 60;

    setActiveMockConfig({
      examId,
      questions,
      durationMinutes: duration
    });
    handleNavigate('mock-test-active', { examId });
  };

  const handlePracticeErrors = (questions: Question[]) => {
    if (questions.length === 0) return;
    setActiveMockConfig({
      examId: questions[0].exam || 'ctet',
      questions,
      durationMinutes: Math.max(15, questions.length * 1.5)
    });
    handleNavigate('mock-test-active', { examId: questions[0].exam || 'ctet' });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // If in active mock test mode, render distraction-free CBT simulator view
  if (currentPage === 'mock-test-active' && activeMockConfig) {
    return (
      <MockTestActivePage
        examId={activeMockConfig.examId}
        questions={activeMockConfig.questions}
        durationMinutes={activeMockConfig.durationMinutes}
        onExit={() => handleNavigate('mock-tests')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          currentPage={currentPage}
          currentParams={pageParams}
          onNavigate={handleNavigate}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 w-full px-3.5 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-12">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          )}

          {currentPage === 'eligibility-checker' && (
            <EligibilityCheckerPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'exams-directory' && (
            <ExamsDirectoryPage
              onNavigate={handleNavigate}
              initialCategory={pageParams.category as any}
            />
          )}

          {currentPage === 'exam-detail' && (
            <ExamDetailPage
              examId={pageParams.examId || pageParams.id || 'ctet'}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'mock-tests' && (
            <MockTestsPage
              onNavigate={handleNavigate}
              onStartMock={handleStartMock}
              initialExamId={pageParams.examId}
            />
          )}

          {currentPage === 'practice-hub' && (
            <PracticeHubPage
              onNavigate={handleNavigate}
              initialExam={pageParams.exam}
            />
          )}

          {currentPage === 'question-bank' && (
            <QuestionBankPage
              onNavigate={handleNavigate}
              initialFilter={{
                exam: pageParams.exam,
                sourceType: pageParams.sourceType as any
              }}
            />
          )}

          {currentPage === 'pyq-bank' && (
            <QuestionBankPage
              onNavigate={handleNavigate}
              initialFilter={{
                exam: pageParams.exam,
                sourceType: 'VERIFIED PYQ'
              }}
            />
          )}

          {currentPage === 'ncert-master' && (
            <NcertMasterPage
              onNavigate={handleNavigate}
              initialSubject={pageParams.subject}
            />
          )}

          {currentPage === 'teaching-pedagogy' && (
            <TeachingPedagogyPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'science-concepts' && (
            <ScienceConceptsPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'gk-master' && (
            <GeneralStudiesPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'speed-trainer' && (
            <SpeedTrainerPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'shortcut-lab' && (
            <ShortcutLabPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'formula-master' && (
            <FormulaMasterPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'flashcards' && (
            <FlashcardsPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'study-planner' && (
            <StudyPlannerPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'career-explorer' && (
            <CareerExplorerPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'notifications-tracker' && (
            <NotificationTrackerPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'education-news' && (
            <EducationNewsPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'current-affairs' && (
            <CurrentAffairsPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'books-library' && (
            <BookLibraryPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'analytics-dashboard' && (
            <AnalyticsDashboardPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'error-notebook' && (
            <ErrorNotebookPage
              onNavigate={handleNavigate}
              onPracticeErrors={handlePracticeErrors}
            />
          )}

          {currentPage === 'bookmarks' && (
            <BookmarksPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'about-disclaimer' && (
            <AboutDisclaimerPage onNavigate={handleNavigate} />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Bottom Navigation */}
      <MobileNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Omnibox Search Modal (Ctrl+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserDataProvider>
          <MainApp />
        </UserDataProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
