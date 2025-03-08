import React from 'react'
import { motion } from "framer-motion";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <motion.div 
      whileHover={{ y: -15, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full px-6 md:px-12 h-auto min-h-[320px] py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] overflow-hidden relative group"
    >
      {/* Background gradient animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-designColor/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="w-full z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 relative"
        >
          {/* Icon with animation */}
          <motion.div 
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 flex items-center justify-center"
          >
            {icon ? (
              <span className="text-5xl text-designColor">{React.createElement(icon)}</span>
            ) : (
              <div className="w-10 h-10 relative">
                <motion.span 
                  animate={{ 
                    rotate: [0, 180],
                    borderRadius: ["20%", "50%"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 bg-gradient-to-r from-designColor to-teal-700"
                />
              </div>
            )}
          </motion.div>
          
          {/* Content with animation */}
          <div className="flex flex-col gap-6">
            <motion.h2 
              whileHover={{ color: "#028b7d" }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 text-center md:text-left"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              className="text-base text-center md:text-left"
            >
              {des}
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      {/* Animated border on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-designColor via-teal-500 to-blue-500"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default Card;
