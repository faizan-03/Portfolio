import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-designColor to-teal-700 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 w-12 h-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 0.1 ? 1 : 0,
          scale: scrollProgress > 0.1 ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-700"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <motion.path
            className="text-designColor"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{
              strokeDasharray: `${scrollProgress * 100}, 100`,
            }}
            initial={{ strokeDasharray: "0, 100" }}
            animate={{ strokeDasharray: `${scrollProgress * 100}, 100` }}
            transition={{ duration: 0.3 }}
          />
        </svg>
        
        <motion.button
          className="absolute inset-0 flex items-center justify-center text-xs font-bold text-designColor bg-gray-900/80 backdrop-blur-sm rounded-full border border-designColor/30 hover:bg-designColor hover:text-white transition-all duration-300 warm-hover theme-transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {Math.round(scrollProgress * 100)}%
        </motion.button>
      </motion.div>
    </>
  );
};

export default ProgressIndicator;