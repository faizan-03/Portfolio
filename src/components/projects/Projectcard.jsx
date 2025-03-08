import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Projectcard = ({ title, des, src }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group relative overflow-hidden"
    >
      {/* Animated overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-designColor/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Image container */}
      <motion.div 
        className="w-full h-[80%] overflow-hidden rounded-lg relative z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="w-full h-60 object-cover cursor-pointer"
          src={src}
          alt={title}
        />
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2"
          >
            <motion.span 
              whileHover={{ y: -4, scale: 1.1 }}
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <BsGithub />
            </motion.span>
            <motion.span 
              whileHover={{ y: -4, scale: 1.1 }}
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <FaGlobe />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="w-full mt-5 flex flex-col gap-4 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div>
          <div className="flex items-center justify-between">
            <motion.h3 
              whileHover={{ color: "#028b7d", x: 3 }}
              transition={{ duration: 0.3 }}
              className="text-base uppercase text-designColor font-normal"
            >
              {title}
            </motion.h3>
          </div>
          <motion.p 
            whileHover={{ color: "#fff" }}
            className="text-sm tracking-wide mt-3 text-gray-300 duration-300"
          >
            {des}
          </motion.p>
        </div>
      </motion.div>
      
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

export default Projectcard
