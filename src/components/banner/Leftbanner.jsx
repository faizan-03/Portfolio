import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaDownload, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import CustomTypewriter from "../ui/CustomTypewriter";

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

const Leftbanner = () => {
  const typewriterWords = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Flutter Developer",
    ".NET Blazor Expert",
    "AI/ML Enthusiast",
    "UI/UX Designer"
  ];

  // Get environment variables
  const linkedinId = getEnvVariable('REACT_APP_LINKEDIN_ID', 'rana-faizan-7b4b02252');
  const instagramUsername = getEnvVariable('REACT_APP_INSTAGRAM_USERNAME', 'ranafaizan__03');
  const cvPath = getEnvVariable('REACT_APP_CV_PATH', '/CV/MyResume.pdf');
  const name = getEnvVariable('REACT_APP_NAME', 'Rana Faizan Ali');
  const description = getEnvVariable('REACT_APP_DESCRIPTION', 'A passionate developer specializing in MERN Stack, .NET Blazor, and exploring the realms of AI & Machine Learning. Currently pursuing BS Computer Science at the University of Gujrat.');

  return (
    <div className="w-full flex flex-col gap-8 md:pr-6 relative">
      {/* Background decoration */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-designColor/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="flex flex-col gap-5 relative z-10">


        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="block mb-2 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400"
          >
            Hello, I'm
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-designColor via-teal-500 to-blue-600 dark:from-designColor dark:via-teal-400 dark:to-blue-500 bg-clip-text text-transparent font-extrabold block"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(2, 139, 125, 0.5)"
            }}
            transition={{ duration: 0.3 }}
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 3s ease infinite'
            }}
          >
            {name}
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white flex flex-wrap items-center gap-2 mt-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-700 dark:text-gray-300"
          >
            I'm a
          </motion.span>
          <CustomTypewriter
            words={typewriterWords}
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={3000}
            className="whitespace-nowrap text-designColor font-extrabold"
            cursorColor="#028b7d"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base md:text-lg font-bodyFont leading-7 tracking-wide text-gray-600 dark:text-gray-300 max-w-2xl mt-6 font-medium"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col gap-3 mt-8 w-full max-w-sm"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(2, 139, 125, 0.3)",
              y: -1
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-designColor to-teal-600 hover:from-teal-600 hover:to-designColor text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <MdEmail className="text-lg" />
              </motion.div>
              <span className="relative z-10">Hire Me</span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              y: -1,
              boxShadow: "0 8px 25px rgba(2, 139, 125, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={cvPath}
              download
              className="w-full flex items-center justify-center gap-2 border-2 border-designColor text-designColor hover:bg-designColor hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <FaDownload className="text-lg" />
              </motion.div>
              <span className="relative z-10">Download CV</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 relative z-30"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center md:text-left"
        >
          <motion.h2
            className="text-sm uppercase font-semibold mb-4 text-designColor tracking-wider flex items-center gap-2 justify-center md:justify-start"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaCode className="text-base" />
            </motion.div>
            Let's Connect
          </motion.h2>

          <div className="flex gap-4 justify-center md:justify-start">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/faizan-03",
                color: "hover:text-gray-900 dark:hover:text-white",
                label: "GitHub",
                bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
                hoverBorder: "hover:border-gray-400 dark:hover:border-gray-500"
              },
              {
                icon: FaInstagram,
                href: `https://www.instagram.com/${instagramUsername}/`,
                color: "hover:text-pink-600 dark:hover:text-pink-400",
                label: "Instagram",
                bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
                hoverBorder: "hover:border-pink-300 dark:hover:border-pink-600"
              },
              {
                icon: FaLinkedinIn,
                href: `https://www.linkedin.com/in/${linkedinId}/`,
                color: "hover:text-blue-600 dark:hover:text-blue-400",
                label: "LinkedIn",
                bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                hoverBorder: "hover:border-blue-300 dark:hover:border-blue-600"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} ${social.bgColor} ${social.hoverBorder} transition-all duration-300 group relative shadow-sm hover:shadow-lg social-icon-enhanced`}
                whileHover={{
                  scale: 1.15,
                  y: -3,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                title={social.label}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <social.icon className="text-lg transition-all duration-300" />
                </motion.div>

                {/* Enhanced Tooltip */}
                <motion.div
                  className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-20 shadow-xl border border-gray-700"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {social.label}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45 border-l border-t border-gray-700"></div>
                </motion.div>

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10"
                  initial={{ scale: 0 }}
                  whileHover={{
                    scale: 1,
                    opacity: [0, 0.1, 0],
                    transition: { duration: 0.6 }
                  }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>


      </motion.div>
    </div>
  );
}

export default Leftbanner