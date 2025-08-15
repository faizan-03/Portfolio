import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-4 z-[9999] w-12 h-12 sm:w-14 sm:h-14 rounded-full btn-warm-primary bg-gradient-to-r from-designColor to-teal-600 shadow-2xl flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm warm-hover theme-transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20 opacity-0"
        whileHover={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;