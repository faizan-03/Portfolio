import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import Title from '../layouts/Title';
import { motion } from "framer-motion";
import testimonialData from "../../Data/testimonialData";

const CustomPrevArrow = ({ onClick }) => (
  <motion.button
    whileHover={{
      scale: 1.05,
      backgroundColor: "rgba(2, 139, 125, 0.9)",
      boxShadow: "0 10px 25px rgba(2, 139, 125, 0.3)",
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[rgba(255,252,248,0.9)] dark:bg-gradient-to-r dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/50 hover:border-designColor/50 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#2c2825] dark:text-white transition-all duration-300 shadow-lg group touch-manipulation"
  >
    <motion.div whileHover={{ x: -2 }} transition={{ duration: 0.2 }}>
      <FaChevronLeft className="text-lg group-hover:text-designColor transition-colors duration-300" />
    </motion.div>
    <motion.div
      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-designColor/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    />
  </motion.button>
);

const CustomNextArrow = ({ onClick }) => (
  <motion.button
    whileHover={{
      scale: 1.05,
      backgroundColor: "rgba(2, 139, 125, 0.9)",
      boxShadow: "0 10px 25px rgba(2, 139, 125, 0.3)",
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[rgba(255,252,248,0.9)] dark:bg-gradient-to-r dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/50 hover:border-designColor/50 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#2c2825] dark:text-white transition-all duration-300 shadow-lg group touch-manipulation"
  >
    <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
      <FaChevronRight className="text-lg group-hover:text-designColor transition-colors duration-300" />
    </motion.div>
    <motion.div
      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-designColor/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    />
  </motion.button>
);

const Testimonial = () => {
  const [DocActive, setDocActive] = useState(0);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    customPaging: () => (
      <motion.div
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 hover:from-designColor hover:to-teal-400 transition-all duration-300 mt-8 cursor-pointer shadow-lg"
      />
    ),
    dotsClass: "slick-dots modern-dots flex justify-center gap-3",
  };

  return (
    <section 
      id="testimonial" 
      className="w-full py-20 border-b-[1px] border-b-black relative overflow-hidden"
    >
      <motion.div
        className="absolute top-20 -left-10 w-72 h-72 rounded-full bg-designColor/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-10 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center text-center mb-10"
      >
        <Title title="WHAT PEOPLE SAY" des="Testimonials" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16 relative"
      >
        <Slider {...sliderSettings}>
          {testimonialData.map((testimonial, index) => (
            <div key={testimonial.id} className="w-full px-4 py-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-4 sm:gap-6 lgl:gap-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lgl:w-[35%] h-full bg-[rgba(255,252,248,0.9)] dark:bg-gradient-to-br dark:from-[#1e2024] dark:via-[#1a1d21] dark:to-[#23272b] p-4 sm:p-6 lgl:p-8 rounded-xl shadow-lg flex flex-col gap-4 sm:gap-6 justify-center items-center border border-gray-200/40 dark:border-gray-800/50 hover:border-designColor/30 transition-all duration-300 backdrop-blur-md"
                >
                  <div className="w-full flex flex-col items-center">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 lgl:w-28 lgl:h-28 mx-auto mb-2 sm:mb-4 relative group"
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-designColor/30 group-hover:border-designColor/60 transition-all duration-300 shadow-lg">
                        <img
                          className="w-full h-full object-cover"
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-designColor/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
                    </motion.div>
                    
                    <motion.h3 
                      whileHover={{ color: "#028b7d" }}
                      className="text-xl font-bold text-[#2c2825] dark:text-white mt-2 text-center transition-colors duration-300"
                    >
                      {testimonial.name}
                    </motion.h3>
                    <p className="text-sm text-gray-400 mt-1 text-center">{testimonial.role}</p>
                    
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <RiStarFill className="text-yellow-400 text-lg" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full lgl:w-[65%] h-full flex flex-col justify-between relative"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -top-4 -left-2 z-10"
                  >
                    <FaQuoteLeft className="text-4xl text-designColor opacity-30" />
                  </motion.div>
                  
                  <div className="w-full h-full py-4 sm:py-6 lgl:py-8 bg-[rgba(255,252,248,0.9)] dark:bg-gradient-to-br dark:from-[#1e2024] dark:via-[#1a1d21] dark:to-[#23272b] rounded-xl shadow-lg p-4 sm:p-6 lgl:p-8 flex flex-col justify-center gap-4 sm:gap-6 border border-gray-200/40 dark:border-gray-800/50 hover:border-designColor/30 transition-all duration-300 backdrop-blur-md">
                    <div className="flex flex-col gap-3 pb-6 border-b border-gray-700/50">
                      <motion.h3 
                        whileHover={{ color: "#028b7d" }}
                        className="text-lg sm:text-xl lgl:text-2xl font-semibold tracking-wide text-[#2c2825] dark:text-white transition-colors duration-300"
                      >
                        {testimonial.project}
                      </motion.h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="px-3 py-1 bg-designColor/20 text-designColor rounded-full">
                          {testimonial.platform}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{testimonial.date}</span>
                      </div>
                    </div>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="text-sm sm:text-base md:text-lg font-titleFont text-[#5a5550] dark:text-gray-300 leading-relaxed tracking-wide relative z-10"
                    >
                      "{testimonial.testimonial}"
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Testimonial;