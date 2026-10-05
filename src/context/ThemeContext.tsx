import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      return (localStorage.getItem('gst_theme') as ThemeMode) || 'system';
    } catch {
      return 'system';
    }
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const saved = localStorage.getItem('gst_theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    try {
      localStorage.setItem('gst_theme', theme);
    } catch {
      // storage unavailable or blocked
    }

    const applyTheme = () => {
      let prefersDark = false;
      try {
        if (typeof window.matchMedia === 'function') {
          prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
      } catch {
        prefersDark = false;
      }
      const darkActive = theme === 'dark' || (theme === 'system' && prefersDark);
      
      setIsDark(darkActive);
      if (darkActive) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    };

    applyTheme();

    if (theme === 'system' && typeof window.matchMedia === 'function') {
      try {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = () => applyTheme();
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
      } catch {
        // matchMedia event listeners not supported
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
