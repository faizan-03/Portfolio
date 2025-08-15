import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaUsers, FaAward } from 'react-icons/fa';

const Timeline = ({ data, type = 'experience' }) => {
  const getIcon = (item, type) => {
    if (type === 'education') return <FaGraduationCap />;
    if (type === 'volunteer') return <FaUsers />;
    if (type === 'certificate') return <FaAward />;
    return <FaBriefcase />;
  };

  const getColor = (index) => {
    const colors = [
      'from-designColor to-teal-600',
      'from-blue-500 to-purple-600',
      'from-purple-500 to-pink-600',
      'from-green-500 to-blue-500',
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div
        className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-designColor via-teal-500 to-blue-500"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="space-y-8">
        {data.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex items-start gap-6 group"
          >
            {/* Timeline dot */}
            <motion.div
              className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-r ${getColor(index)} flex items-center justify-center text-white shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {getIcon(item, type)}
              </motion.div>
              
              {/* Pulse effect */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${getColor(index)} opacity-30`}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Content card */}
            <motion.div
              className="flex-1 bg-gradient-to-br from-[#1e2024] via-[#1a1d21] to-[#23272b] rounded-xl p-6 border border-gray-800/50 group-hover:border-designColor/30 transition-all duration-300 shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <motion.h3
                  className="text-lg font-semibold text-white group-hover:text-designColor transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                
                {item.date && (
                  <motion.div
                    className="flex items-center gap-2 text-sm text-gray-400 mt-1 sm:mt-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="w-2 h-2 bg-designColor rounded-full animate-pulse"></span>
                    {item.date}
                  </motion.div>
                )}
              </div>

              {/* Subtitle */}
              {item.subTitle && (
                <motion.p
                  className="text-designColor font-medium mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.subTitle}
                </motion.p>
              )}

              {/* Location */}
              {item.location && (
                <motion.p
                  className="text-sm text-gray-400 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  📍 {item.location}
                </motion.p>
              )}

              {/* Description */}
              {item.description && (
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.description}
                </motion.p>
              )}

              {/* Skills/Technologies */}
              {item.skills && (
                <motion.div
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-designColor/20 text-designColor rounded-full border border-designColor/30 hover:bg-designColor hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + skillIndex * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-designColor/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;