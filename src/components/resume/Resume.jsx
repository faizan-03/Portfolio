import React, { useState } from 'react'
import Education from './Education';
import Title from '../layouts/Title';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"
import { motion } from "framer-motion";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center text-center"
      >
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 md:px-10 lg:px-16"
      >
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            { state: educationData, setter: setEducationData, label: "Education" },
            { state: skillData, setter: setSkillData, label: "Professional Skills" },
            { state: experienceData, setter: setExperienceData, label: "Experience" },
            { state: achievementData, setter: setAchievementData, label: "Achievements" }
          ].map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(false);
                item.setter(true);
              }}
              className={`${
                item.state
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
          className="mt-10 md:mt-14 w-full"
        >
          {educationData && <Education />}
          {skillData && <Skills />}
          {achievementData && <Achievement />}
          {experienceData && <Experience />}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Resume;