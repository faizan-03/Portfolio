import React from 'react'
import Title from '../layouts/Title'
import Projectcard from './Projectcard'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute top-40 -left-10 w-72 h-72 rounded-full bg-designColor/5 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 -right-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center text-center mb-10"
      >
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-4 md:px-10 lg:px-16 max-w-7xl mx-auto"
      >
        {[
          {
            title: "SOCIAL MEDIA CLONE",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
            src: projectOne
          },
          {
            title: "E-commerce Website",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
            src: projectTwo
          },
          {
            title: "Chatting App",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
            src: projectThree
          },
          {
            title: "SOCIAL MEDIA CLONE",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
            src: projectThree
          },
          {
            title: "E-commerce Website",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
            src: projectOne
          },
          {
            title: "Chatting App",
            des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
            src: projectTwo
          }
        ].map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Projectcard
              title={project.title}
              des={project.des}
              src={project.src}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects
