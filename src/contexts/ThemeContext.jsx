import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    const root = document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.setProperty('--bg-primary', '#1e2024');
      root.style.setProperty('--bg-secondary', '#23272b');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#b0b0b0');
      root.style.setProperty('--border-color', '#374151');
      root.style.setProperty('--accent-color', '#028b7d');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8f9fa');
      root.style.setProperty('--text-primary', '#1a1a1a');
      root.style.setProperty('--text-secondary', '#666666');
      root.style.setProperty('--border-color', '#e5e7eb');
      root.style.setProperty('--accent-color', '#0066cc');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      primary: isDark ? '#028b7d' : '#0066cc',
      background: isDark ? '#1e2024' : '#ffffff',
      surface: isDark ? '#23272b' : '#f8f9fa',
      text: isDark ? '#ffffff' : '#1a1a1a',
      textSecondary: isDark ? '#b0b0b0' : '#666666',
      border: isDark ? '#374151' : '#e5e7eb',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};