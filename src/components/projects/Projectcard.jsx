import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaMobile, FaRobot, FaCode, FaShoppingCart, FaGraduationCap, FaMusic } from "react-icons/fa";
import { SiReact, SiFlutter, SiPython, SiDotnet, SiTailwindcss, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const Projectcard = ({ title, des, src, technologies, category, githubLink, liveLink, date }) => {
  // Placeholder image for projects without images
  const placeholderImage = "data:image/svg+xml,%3Csvg width='400' height='240' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23212428'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23028b7d' text-anchor='middle' dy='.3em'%3EProject Image%3C/text%3E%3C/svg%3E";
  
  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'AI/ML': return <FaRobot className="text-purple-400" />;
      case 'Mobile App': return <FaMobile className="text-blue-400" />;
      case 'Web App': return <FaCode className="text-green-400" />;
      default: return <FaCode className="text-designColor" />;
    }
  };
  
  // Get technology icon
  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react')) return <SiReact className="text-blue-400" />;
    if (techLower.includes('flutter')) return <SiFlutter className="text-blue-500" />;
    if (techLower.includes('python')) return <SiPython className="text-yellow-400" />;
    if (techLower.includes('.net') || techLower.includes('blazor')) return <SiDotnet className="text-purple-500" />;
    if (techLower.includes('tailwind')) return <SiTailwindcss className="text-teal-400" />;
    if (techLower.includes('javascript')) return <SiJavascript className="text-yellow-300" />;
    return null;
  };
  
  // Get project icon based on title
  const getProjectIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('chatbot') || titleLower.includes('ai')) return <FaRobot />;
    if (titleLower.includes('ecommerce') || titleLower.includes('e-commerce')) return <FaShoppingCart />;
    if (titleLower.includes('student') || titleLower.includes('university')) return <FaGraduationCap />;
    if (titleLower.includes('spotify') || titleLower.includes('music')) return <FaMusic />;
    if (titleLower.includes('mobile') || titleLower.includes('app')) return <FaMobile />;
    return <FaCode />;
  };
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full p-6 h-auto rounded-xl shadow-shadowOne flex flex-col bg-gradient-to-br from-bodyColor via-[#1a1d21] to-[#202327] group relative overflow-hidden border border-gray-800/50 hover:border-designColor/30"
    >
      {/* Animated overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-designColor/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Category badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm"
      >
        {getCategoryIcon(category)}
        <span className="text-xs text-white font-medium">{category}</span>
      </motion.div>
      
      {/* Image container */}
      <motion.div 
        className="w-full h-48 overflow-hidden rounded-lg relative z-10 mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover cursor-pointer"
          src={src || placeholderImage}
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
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <BsGithub />
              </motion.a>
            )}
            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <FaGlobe />
              </motion.a>
            )}
            {!githubLink && !liveLink && (
              <motion.div className="flex gap-2">
                <motion.span 
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer opacity-50"
                >
                  <BsGithub />
                </motion.span>
                <motion.span 
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer opacity-50"
                >
                  <FaGlobe />
                </motion.span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="w-full flex flex-col gap-4 z-10 flex-grow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex-grow">
          <div className="flex items-start gap-3 mb-2">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-designColor text-xl mt-1"
            >
              {getProjectIcon(title)}
            </motion.div>
            <div className="flex-grow">
              <motion.h3 
                whileHover={{ color: "#028b7d", x: 3 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold text-white leading-tight"
              >
                {title}
              </motion.h3>
              {date && (
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <span className="w-1 h-1 bg-designColor rounded-full"></span>
                  {date}
                </p>
              )}
            </div>
          </div>
          
          <motion.p 
            whileHover={{ color: "#fff" }}
            className="text-sm leading-relaxed text-gray-300 duration-300 mb-4"
          >
            {des}
          </motion.p>
          
          {/* Technology badges with icons */}
          {technologies && technologies.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {technologies.slice(0, 4).map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-designColor hover:to-teal-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </motion.div>
              ))}
              {technologies.length > 4 && (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-700/50 text-gray-400 border border-gray-600"
                >
                  +{technologies.length - 4} more
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
        
        {/* Action buttons */}
        <motion.div 
          className="flex gap-3 pt-4 border-t border-gray-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {githubLink ? (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#333" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 text-sm"
            >
              <BsGithub />
              <span>Code</span>
            </motion.a>
          ) : (
            <motion.div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-500 text-sm cursor-not-allowed">
              <BsGithub />
              <span>Code</span>
            </motion.div>
          )}
          
          {liveLink ? (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#028b7d" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-designColor/20 text-designColor hover:bg-designColor hover:text-white transition-all duration-300 text-sm"
            >
              <FaGlobe />
              <span>Live Demo</span>
            </motion.a>
          ) : (
            <motion.div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-500 text-sm cursor-not-allowed">
              <FaGlobe />
              <span>Live Demo</span>
            </motion.div>
          )}
        </motion.div>
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
