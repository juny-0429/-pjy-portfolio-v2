import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

export const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const localThemeMode = window.localStorage.getItem('themeMode') as ThemeMode | null;

    if (localThemeMode) {
      setThemeMode(localThemeMode);
      document.body.dataset.themeMode = localThemeMode;
    } else {
      setThemeMode('light');
      document.body.dataset.themeMode = 'light';
    }
  }, []);

  const toggleThemeMode = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    window.localStorage.setItem('themeMode', newThemeMode);
    document.body.dataset.themeMode = newThemeMode;
  };

  return { themeMode, toggleThemeMode };
};
