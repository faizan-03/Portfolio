import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContextInstance';

// Make sure to use the ThemeContext component from ThemeContextInstance.js
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved ? JSON.parse(saved) : true;
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      return true; // Default to dark theme
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [error, setError] = useState(null);
  const [transitionDuration, setTransitionDuration] = useState(300);

  useEffect(() => {
    try {
      localStorage.setItem('theme', JSON.stringify(isDark));
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
      setError('Failed to save theme preference');
    }
    
    const root = document.documentElement;
    
    // Add transition class for smooth theme changes
    root.classList.add('theme-transitioning');
    
    // Set transition duration on root element
    root.style.setProperty('--theme-transition-duration', `${transitionDuration}ms`);
    
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      
      // Dark theme colors
      root.style.setProperty('--bg-primary', '#1e2024');
      root.style.setProperty('--bg-secondary', '#23272b');
      root.style.setProperty('--bg-tertiary', '#191b1e');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#b0b0b0');
      root.style.setProperty('--text-tertiary', '#9ca3af');
      root.style.setProperty('--border-color', '#374151');
      root.style.setProperty('--accent-color', '#028b7d');
      
      // Dark theme specific colors
      root.style.setProperty('--card-bg', 'rgba(30, 32, 36, 0.8)');
      root.style.setProperty('--card-bg-hover', 'rgba(35, 39, 43, 0.9)');
      root.style.setProperty('--surface-bg', 'rgba(25, 27, 30, 0.6)');
      root.style.setProperty('--shadow-light', 'rgba(0, 0, 0, 0.3)');
      root.style.setProperty('--shadow-medium', 'rgba(0, 0, 0, 0.4)');
      root.style.setProperty('--shadow-heavy', 'rgba(0, 0, 0, 0.5)');
      root.style.setProperty('--skeleton-base', '#374151');
      root.style.setProperty('--skeleton-shimmer', 'rgba(255, 255, 255, 0.1)');
      
      // Dark theme icon colors
      root.style.setProperty('--icon-default', '#9ca3af');
      root.style.setProperty('--icon-github', '#f3f4f6');
      root.style.setProperty('--icon-linkedin', '#60a5fa');
      root.style.setProperty('--icon-instagram-start', '#f472b6');
      root.style.setProperty('--icon-instagram-end', '#ec4899');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      
      // Light theme warm colors
      root.style.setProperty('--bg-primary', '#fefcfb');
      root.style.setProperty('--bg-secondary', '#f7f3f0');
      root.style.setProperty('--bg-tertiary', '#f0ebe6');
      root.style.setProperty('--text-primary', '#2c2825');
      root.style.setProperty('--text-secondary', '#5a5550');
      root.style.setProperty('--text-tertiary', '#6b6560');
      root.style.setProperty('--border-color', 'rgba(45, 40, 37, 0.1)');
      root.style.setProperty('--accent-color', '#0d8b7d');
      
      // Light theme specific colors
      root.style.setProperty('--card-bg', 'rgba(255, 252, 248, 0.8)');
      root.style.setProperty('--card-bg-hover', 'rgba(255, 252, 248, 0.95)');
      root.style.setProperty('--surface-bg', 'rgba(247, 243, 240, 0.6)');
      root.style.setProperty('--shadow-light', 'rgba(45, 40, 37, 0.08)');
      root.style.setProperty('--shadow-medium', 'rgba(45, 40, 37, 0.12)');
      root.style.setProperty('--shadow-heavy', 'rgba(45, 40, 37, 0.16)');
      root.style.setProperty('--skeleton-base', '#f0ebe6');
      root.style.setProperty('--skeleton-shimmer', 'rgba(45, 40, 37, 0.05)');
      
      // Light theme icon colors
      root.style.setProperty('--icon-default', '#4a5568');
      root.style.setProperty('--icon-github', '#4a5568');
      root.style.setProperty('--icon-linkedin', '#0ea5e9');
      root.style.setProperty('--icon-instagram-start', '#f09433');
      root.style.setProperty('--icon-instagram-end', '#bc1888');
    }
    
    // Remove transition class after transition completes
    setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, transitionDuration);
  }, [isDark, transitionDuration]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const hasManualPreference = localStorage.getItem('theme-manual');
      if (!hasManualPreference) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    try {
      setError(null);
      setIsTransitioning(true);
      
      // Mark as manual preference
      localStorage.setItem('theme-manual', 'true');
      
      setIsDark(prev => !prev);
      
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    } catch (error) {
      console.error('Failed to toggle theme:', error);
      setError('Failed to change theme');
      setIsTransitioning(false);
    }
  };

  // Function to reset theme to system preference
  const resetToSystemTheme = () => {
    try {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      setError(null);
    } catch (error) {
      console.error('Failed to detect system theme:', error);
      setError('Failed to detect system theme');
    }
  };

  // Function to set specific theme
  const setTheme = (dark, manual = true) => {
    try {
      setError(null);
      setIsTransitioning(true);
      
      if (manual) {
        localStorage.setItem('theme-manual', 'true');
      }
      
      setIsDark(dark);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    } catch (error) {
      console.error('Failed to set theme:', error);
      setError('Failed to set theme');
      setIsTransitioning(false);
    }
  };

  // Function to set transition duration
  const updateTransitionDuration = (duration) => {
    setTransitionDuration(Math.max(100, Math.min(1000, duration))); // Clamp between 100ms and 1000ms      
  };  const theme = {
    isDark,
    isTransitioning,
    error,
    transitionDuration,
    toggleTheme,
    resetToSystemTheme,
    setTheme,
    setTransitionDuration: updateTransitionDuration,
    colors: {
      // Primary colors
      primary: isDark ? '#028b7d' : '#0d8b7d',
      background: isDark ? '#1e2024' : '#fefcfb',
      surface: isDark ? '#23272b' : '#f7f3f0',
      
      // Text colors
      text: isDark ? '#ffffff' : '#2c2825',
      textSecondary: isDark ? '#b0b0b0' : '#5a5550',
      textTertiary: isDark ? '#9ca3af' : '#6b6560',
      
      // UI colors
      border: isDark ? '#374151' : 'rgba(45, 40, 37, 0.1)',
      accent: isDark ? '#028b7d' : '#0d8b7d',
      
      // Card colors
      cardBg: isDark ? 'rgba(30, 32, 36, 0.8)' : 'rgba(255, 252, 248, 0.8)',
      cardBgHover: isDark ? 'rgba(35, 39, 43, 0.9)' : 'rgba(255, 252, 248, 0.95)',
      surfaceBg: isDark ? 'rgba(25, 27, 30, 0.6)' : 'rgba(247, 243, 240, 0.6)',
      
      // Shadow colors
      shadowLight: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(45, 40, 37, 0.08)',
      shadowMedium: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(45, 40, 37, 0.12)',
      shadowHeavy: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 40, 37, 0.16)',
      
      // Icon colors
      iconDefault: isDark ? '#9ca3af' : '#4a5568',
      iconGithub: isDark ? '#f3f4f6' : '#4a5568',
      iconLinkedin: isDark ? '#60a5fa' : '#0ea5e9',
      iconInstagramStart: isDark ? '#f472b6' : '#f09433',
      iconInstagramEnd: isDark ? '#ec4899' : '#bc1888',
      
      // Skeleton colors
      skeletonBase: isDark ? '#374151' : '#f0ebe6',
      skeletonShimmer: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(45, 40, 37, 0.05)',
    },
    
    // Utility functions
    getColor: (colorName) => {
      return theme.colors[colorName] || colorName;
    },
    
    // Theme-aware gradient generator
    getGradient: (direction = 'to right', ...colors) => {
      const processedColors = colors.map(color => theme.getColor(color));
      return `linear-gradient(${direction}, ${processedColors.join(', ')})`;
    },
    
    // Theme-aware shadow generator
    getShadow: (size = 'medium') => {
      const shadows = {
        light: theme.colors.shadowLight,
        medium: theme.colors.shadowMedium,
        heavy: theme.colors.shadowHeavy,
      };
      const shadowColor = shadows[size] || shadows.medium;
      return `0 4px 15px ${shadowColor}`;
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the ThemeProvider component
export { ThemeProvider };