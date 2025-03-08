import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Helper function to safely get environment variables
const getEnvVariable = (key, fallback) => {
  // Check if process.env is available (for development)
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  // Check if window._env_ is available (for production)
  else if (typeof window !== 'undefined' && window._env_ && window._env_[key]) {
    return window._env_[key];
  }
  // Return fallback value
  return fallback;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Get environment variables
  const githubUsername = getEnvVariable('REACT_APP_GITHUB_USERNAME', 'faizan-ali786');
  const linkedinId = getEnvVariable('REACT_APP_LINKEDIN_ID', 'rana-faizan-7b4b02252');
  const instagramUsername = getEnvVariable('REACT_APP_INSTAGRAM_USERNAME', 'ranafaizan__03');
  const name = getEnvVariable('REACT_APP_NAME', 'Faizan Ali');
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 bg-bodycolor relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-10 w-20 h-20 rounded-full bg-designColor/10 blur-xl"
        animate={{ 
          x: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <div className="w-full max-w-[100vw] mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-16 lg:px-24">
          {/* Social Icons */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a 
              href={`https://github.com/${githubUsername}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#191B1E] text-gray-400 rounded-full flex items-center justify-center hover:text-designColor hover:bg-[#131517] transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href={`https://www.linkedin.com/in/${linkedinId}/`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#191B1E] text-gray-400 rounded-full flex items-center justify-center hover:text-designColor hover:bg-[#131517] transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a 
              href={`https://www.instagram.com/${instagramUsername}/`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#191B1E] text-gray-400 rounded-full flex items-center justify-center hover:text-designColor hover:bg-[#131517] transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
          
          {/* Back to top button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-2 bg-gradient-to-r from-designColor to-teal-700 text-white rounded-full cursor-pointer hover:shadow-lg hover:shadow-designColor/20 transition-all duration-300 text-sm font-medium"
            >
              Back to Top
            </Link>
          </motion.div>
          
          {/* Copyright */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-400 text-sm flex items-center gap-1 justify-center">
              © {currentYear} Made with <FaHeart className="text-designColor animate-pulse" /> by {name}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 