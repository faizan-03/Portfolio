import React from 'react'
import { motion } from 'framer-motion'

const ResumeCard = ({title, subTitle, result, des}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="w-full h-auto group flex"
    >
      <div className="w-8 xs:w-10 h-[6px] bgOpacity mt-16 relative">
        <motion.span 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="absolute w-4 xs:w-5 h-4 xs:h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60"
        >
          <motion.span 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className="w-2 xs:w-3 h-2 xs:h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"
          ></motion.span>
        </motion.span>
      </div>
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-3 xs:p-4 lgl:px-10 flex flex-col justify-center gap-4 xs:gap-6 lgl:gap-10 shadow-shadowOne hover:shadow-xl"
      >
        <div className="flex flex-col lgl:flex-row justify-between gap-2 xs:gap-4 lgl:gap-0 lgl:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg xs:text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-xs xs:text-sm mt-1 xs:mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="px-3 xs:px-4 py-1 xs:py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-xs xs:text-sm font-medium group-hover:bg-designColor group-hover:text-white duration-300">
              {result}
            </p>
          </motion.div>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs xs:text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300"
        >
          {des}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default ResumeCard