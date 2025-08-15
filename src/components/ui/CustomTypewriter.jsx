import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomTypewriter = ({ 
  words = [], 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  delaySpeed = 2000,
  className = "",
  cursorColor = "#028b7d"
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Deleting characters
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing characters
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word complete, wait before deleting
          setIsWaiting(true);
        }
      }
    }, isWaiting ? delaySpeed : isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="text-designColor relative"
        >
          {currentText}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-designColor to-teal-400"
            initial={{ width: 0 }}
            animate={{ width: currentText ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </AnimatePresence>
      
      {/* Custom cursor */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="ml-1 text-2xl md:text-4xl font-bold"
        style={{ color: cursorColor }}
      >
        |
      </motion.span>
    </span>
  );
};

export default CustomTypewriter;