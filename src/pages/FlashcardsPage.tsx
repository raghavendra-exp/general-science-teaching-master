import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  CheckCircle, 
  AlertCircle, 
  Bookmark, 
  ArrowLeft, 
  ArrowRight, 
  Shuffle, 
  RotateCcw,
  Layers,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserData } from '../context/UserDataContext';
import { flashcardsData } from '../data/flashcards/flashcardData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface FlashcardsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { flashcardProgress, setFlashcardStatus } = useUserData();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardLang, setCardLang] = useState<'en' | 'hi'>('en');

  const categories = ['all', ...Array.from(new Set(flashcardsData.map(c => c.category)))];

  const filteredCards = flashcardsData.filter(card => {
    if (selectedCategory !== 'all' && card.category !== selectedCategory) return false;
    return true;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const currentStatus = currentCard ? flashcardProgress[currentCard.id] : undefined;

  const totalCards = filteredCards.length;
  const knownCount = filteredCards.filter(c => flashcardProgress[c.id] === 'known').length;
  const reviewCount = filteredCards.filter(c => flashcardProgress[c.id] === 'review').length;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Flashcards', labelHi: 'फ्लैशकार्ड्स', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold text-white mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('ACTIVE RECALL & SPACED REPETITION', 'सक्रिय स्मरण एवं अंतराल पुनरावृत्ति')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {t('High-Yield Exam Flashcards', 'परीक्षा उपयोगी फ्लैशकार्ड्स')}
        </h1>
        <p className="text-purple-100 text-xs sm:text-sm max-w-2xl">
          {t(
            'Master crucial pedagogy theories, scientific laws, constitutional articles, and psychological definitions with interactive flip cards and recall status tracking.',
            'शिक्षाशास्त्र, विज्ञान के नियम, संविधान के अनुच्छेद और सिद्धांतों को 3D फ्लिप कार्ड्स द्वारा आसानी से याद करें।'
          )}
        </p>
      </div>

      {/* Controls & Progress bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? t('All Categories', 'सभी श्रेणियां') : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCardLang(prev => prev === 'en' ? 'hi' : 'en')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/50"
            >
              🌐 {cardLang === 'en' ? 'English (Click for हिन्दी)' : 'हिन्दी (अंग्रेज़ी हेतु क्लिक करें)'}
            </button>
            <button
              onClick={handleShuffle}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              title={t('Shuffle cards', 'कार्ड्स शफल करें')}
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress stats */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              {knownCount} {t('Mastered', 'कंठस्थ')}
            </span>
            <span className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" />
              {reviewCount} {t('Needs Review', 'पुनरावृत्ति शेष')}
            </span>
          </div>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {currentIndex + 1} / {totalCards} {t('Cards', 'कार्ड्स')}
          </span>
        </div>
      </div>

      {/* Main Flashcard Container */}
      {currentCard ? (
        <div className="max-w-2xl mx-auto space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer perspective min-h-[300px] w-full"
          >
            <div className={`relative w-full min-h-[300px] rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between shadow-xs ${
              isFlipped 
                ? 'bg-purple-950 text-white border-purple-800' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-300'
            }`}>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  isFlipped 
                    ? 'bg-purple-800/80 text-purple-200' 
                    : 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900'
                }`}>
                  {currentCard.category}
                </span>

                <div className="flex items-center gap-1.5 text-[11px] font-medium opacity-70">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{isFlipped ? t('Back (Explanation)', 'उत्तर / व्याख्या') : t('Front (Prompt)', 'प्रश्न / अवधारणा')}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="my-auto py-6 text-center">
                {!isFlipped ? (
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {cardLang === 'hi' && currentCard.frontHi ? currentCard.frontHi : currentCard.front}
                  </h2>
                ) : (
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-purple-100 font-medium leading-relaxed">
                      {cardLang === 'hi' && currentCard.backHi ? currentCard.backHi : currentCard.back}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold">
                      🎯 {currentCard.examRelevance}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer prompt */}
              <div className="text-center text-[11px] font-medium opacity-60">
                {t('Click anywhere on the card to flip', 'कार्ड पलटने हेतु कहीं भी क्लिक करें')}
              </div>
            </div>
          </div>

          {/* Feedback buttons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setFlashcardStatus(currentCard.id, 'review')}
              className={`flex-1 max-w-[160px] py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                currentStatus === 'review'
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30'
              }`}
            >
              <AlertCircle className="w-4 h-4" />
              <span>{t('Need Review', 'दोबारा देखें')}</span>
            </button>

            <button
              onClick={() => setFlashcardStatus(currentCard.id, 'known')}
              className={`flex-1 max-w-[160px] py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                currentStatus === 'known'
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{t('Mastered', 'याद हो गया')}</span>
            </button>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('Previous', 'पिछला')}</span>
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-1.5 shadow-2xs"
            >
              <span>{t('Next Card', 'अगला कार्ड')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Sparkles className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
            {t('No flashcards found in this category', 'इस श्रेणी में कोई कार्ड नहीं मिला')}
          </h3>
        </div>
      )}
    </div>
  );
};
