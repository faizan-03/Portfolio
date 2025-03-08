import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { experienceData, volunteerData } from "../../Data/data";

const Experience = () => {
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
      {/* Professional Experience */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lgl:w-1/2"
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
            2021 - Present
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold"
          >
            Professional Experience
          </motion.h2>
        </motion.div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.map((experience) => (
            <motion.div key={experience.id} variants={cardVariants}>
              <ResumeCard
                title={experience.title}
                subTitle={experience.subTitle}
                result={experience.location}
                des={experience.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Volunteer Experience */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lgl:w-1/2"
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
            2021 - Present
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold"
          >
            Volunteer Experience
          </motion.h2>
        </motion.div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {volunteerData.map((volunteer) => (
            <motion.div key={volunteer.id} variants={cardVariants}>
              <ResumeCard
                title={volunteer.title}
                subTitle={volunteer.subTitle}
                result={volunteer.location}
                des={volunteer.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
