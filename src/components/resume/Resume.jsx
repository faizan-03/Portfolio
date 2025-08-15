import React, { useState } from 'react'
import Education from './Education';
import Title from '../layouts/Title';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"
import { motion } from "framer-motion";

const Resume = () => {
  const [educationTab, setEducationTab] = useState(true);
  const [skillTab, setSkillTab] = useState(false);
  const [experienceTab, setExperienceTab] = useState(false);
  const [achievementTab, setAchievementTab] = useState(false);

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
        <Title title="PASSIONATE DEVELOPER & LEARNER" des="My Resume" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 md:px-10 lg:px-16"
      >
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            { state: educationTab, setter: setEducationTab, label: "Education" },
            { state: skillTab, setter: setSkillTab, label: "Professional Skills" },
            { state: experienceTab, setter: setExperienceTab, label: "Experience" },
            { state: achievementTab, setter: setAchievementTab, label: "Achievements" }
          ].map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => {
                setEducationTab(false);
                setSkillTab(false);
                setExperienceTab(false);
                setAchievementTab(false);
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
          {educationTab && <Education />}
          {skillTab && <Skills />}
          {achievementTab && <Achievement />}
          {experienceTab && <Experience />}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Resume;