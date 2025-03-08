import React from "react";
import Leftbanner from "./Leftbanner";
import Rightbanner from "./Rightbanner";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between gap-16 border-b-[1px] border-b-black px-4 md:px-8 lg:px-16 py-16 md:py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-designColor/20 blur-xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-[48%] flex justify-center md:justify-start mb-8 md:mb-0 relative z-20"
      >
        <Leftbanner />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-[42%] flex justify-center md:justify-end mb-12 md:mb-0 relative z-10 md:-mt-20"
      >
        <Rightbanner />
      </motion.div>
    </motion.section>
  );
};

export default Banner;
