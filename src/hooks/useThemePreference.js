import { useEffect, useState } from 'react';

const useThemePreference = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    // Function to set theme based on system preference
    const setPreferredTheme = () => {
      const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      setTheme(preferedTheme);
    };

    // Initial setup
    setPreferredTheme();

    // Subscribe to theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setPreferredTheme();
    mediaQuery.addEventListener('change', handleChange);

    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return theme;
};

export { useThemePreference };
