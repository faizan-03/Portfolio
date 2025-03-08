import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-designColor tracking-[4px]"
          >
            2018 - Present
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold"
          >
            Education Quality
          </motion.h2>
        </motion.div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <motion.div variants={cardVariants}>
            <ResumeCard
              title="BS Computer Science"
              subTitle="University of Gujrat (2022 - Present)"
              result="3.53/4"
              des="Currently pursuing Bachelor's in Computer Science, focusing on MERN Stack development, .NET Blazor, and exploring AI & Machine Learning."
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ResumeCard
              title="Intermediate in Computer Science"
              subTitle="Superior College (2020 - 2022)"
              result="90%"
              des="Completed FSc in Computer Science with strong foundation in programming fundamentals and computer science concepts."
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ResumeCard
              title="Matriculation"
              subTitle="Pakistan Overseas Higher Secondary School (2018 - 2020)"
              result="98%"
              des="Completed matriculation with distinction, demonstrating excellence in academics and a strong foundation for further studies."
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Education