import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Clock, 
  RotateCcw, 
  CheckCircle, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface SpeedProblem {
  prompt: string;
  answer: number;
}

export const SpeedTrainerPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [drillMode, setDrillMode] = useState<'mult' | 'add' | 'squares' | 'percent'>('mult');
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentProblem, setCurrentProblem] = useState<SpeedProblem | null>(null);
  const [userVal, setUserVal] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const generateProblem = (mode: string): SpeedProblem => {
    if (mode === 'mult') {
      const a = Math.floor(Math.random() * 14) + 12; // 12-25
      const b = Math.floor(Math.random() * 9) + 2;   // 2-10
      return { prompt: `${a} × ${b} = ?`, answer: a * b };
    } else if (mode === 'add') {
      const a = Math.floor(Math.random() * 80) + 15;
      const b = Math.floor(Math.random() * 80) + 15;
      return { prompt: `${a} + ${b} = ?`, answer: a + b };
    } else if (mode === 'squares') {
      const a = Math.floor(Math.random() * 25) + 6; // 6 to 30
      return { prompt: `${a}² = ?`, answer: a * a };
    } else {
      // Percentages
      const bases = [20, 25, 40, 50, 75, 80];
      const p = bases[Math.floor(Math.random() * bases.length)];
      const num = (Math.floor(Math.random() * 10) + 1) * 40;
      return { prompt: `${p}% of ${num} = ?`, answer: (p * num) / 100 };
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setGameOver(false);
    setTimeLeft(60);
    setScore(0);
    setAttempts(0);
    setUserVal('');
    setCurrentProblem(generateProblem(drillMode));
  };

  useEffect(() => {
    if (!isActive || gameOver) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsActive(false);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, gameOver]);

  const handleSubmitAns = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProblem || !userVal) return;

    const num = parseInt(userVal.trim(), 10);
    setAttempts(prev => prev + 1);
    if (num === currentProblem.answer) {
      setScore(prev => prev + 1);
    }
    setUserVal('');
    setCurrentProblem(generateProblem(drillMode));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Speed Lab', labelHi: 'स्पीड लैब (गति सुधार)', active: true }
        ]}
        onHomeClick={() => onNavigate('home')}
      />

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>{t('60-SECOND REACTION & CALCULATION SPEED TRAINER', '60-सेकंड त्वरित गणना ट्रेनर')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('Speed Lab (Speed Improvement Trainer)', 'स्पीड लैब (गणना एवं गति सुधार)')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('Sharpen your numerical fluency for SSC, Banking, GATE, and CSIR General Aptitude with intense 60-second mental drills.', 'एसएससी, बैंक, गेट और सीएसआईआर नेट हेतु अपनी मानसिक गणना और गति में क्रांतिकारी सुधार करें।')}
          </p>
        </div>

        {/* Drill Mode Tabs */}
        {!isActive && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            {[
              { id: 'mult', label: 'Multiplication Tables (12-25)', labelHi: 'पहाड़े व गुणा (12-25)' },
              { id: 'add', label: 'Rapid 2-Digit Addition', labelHi: 'त्वरित जोड़' },
              { id: 'squares', label: 'Squares (1 to 30)', labelHi: 'वर्ग (Squares 1-30)' },
              { id: 'percent', label: 'Percentage Fast Recall', labelHi: 'प्रतिशत गणना' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setDrillMode(m.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  drillMode === m.id
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {language === 'hi' ? m.labelHi : m.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Trainer Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xs max-w-2xl mx-auto text-center space-y-6">
        {!isActive && !gameOver && (
          <div className="space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
                Ready for the 60-Second Challenge?
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Answer as many mental math problems as possible within 60 seconds. Every correct response boosts your Speed Index.
              </p>
            </div>
            <button
              onClick={handleStart}
              className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-500/25 transition-transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current shrink-0" />
              <span>Start 60s Speed Drill</span>
            </button>
          </div>
        )}

        {isActive && currentProblem && (
          <div className="space-y-6 animate-in zoom-in-95">
            {/* Live Timer & Score */}
            <div className="flex items-center justify-between px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-1.5 font-mono text-base font-bold text-amber-600">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{timeLeft}s</span>
              </div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Score: <span className="text-emerald-600 font-black text-sm">{score}</span> / {attempts}
              </div>
            </div>

            {/* Problem Prompt */}
            <div className="py-4 sm:py-6">
              <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-wider">
                {currentProblem.prompt}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmitAns} className="max-w-xs mx-auto flex gap-2">
              <input
                type="number"
                autoFocus
                value={userVal}
                onChange={e => setUserVal(e.target.value)}
                placeholder="Enter answer"
                className="flex-1 px-4 py-3 text-lg font-bold font-mono text-center bg-slate-50 dark:bg-slate-800 border-2 border-amber-400 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-xs"
              >
                Go
              </button>
            </form>
          </div>
        )}

        {gameOver && (
          <div className="space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">Drill Completed!</h3>
              <p className="text-xs text-slate-500 mt-1">Here is your speed performance summary</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="p-2">
                <div className="text-[11px] text-slate-400 font-medium">Correct Score</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600">{score}</div>
              </div>
              <div className="p-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">Speed (Q/min)</div>
                <div className="text-xl sm:text-2xl font-black text-amber-600">{attempts}</div>
              </div>
              <div className="p-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">Accuracy</div>
                <div className="text-xl sm:text-2xl font-black text-blue-600">
                  {attempts > 0 ? Math.round((score / attempts) * 100) : 0}%
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              <button
                onClick={handleStart}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
              >
                <RotateCcw className="w-4 h-4 shrink-0" />
                <span>Play Again</span>
              </button>
              <button
                onClick={() => onNavigate('shortcut-lab')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <span>View Shortcuts</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
