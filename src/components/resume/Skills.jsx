import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-12 font-titleFont flex flex-col gap-4"
        >
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Frontend & Mobile
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 w-full flex flex-col gap-6"
        >
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">React.js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">90%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">Flutter</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">85%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">JavaScript</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">90%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">Tailwind CSS</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">95%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">C# Programming</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">80%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">Adobe Creative Suite</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">80%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full lgl:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-12 font-titleFont flex flex-col gap-4"
        >
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Backend & Database
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-col gap-6"
        >
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">Node.js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">85%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">Express.js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">80%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">MongoDB</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">85%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">.NET Blazor</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">75%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">Firebase</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">80%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            className="overflow-x-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm uppercase font-medium group-hover:text-designColor transition-colors duration-300">AI/ML Integration</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-designColor to-teal-700 rounded-md relative shadow-lg"
              >
                <span className="absolute -top-7 right-0 text-xs font-semibold">75%</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills