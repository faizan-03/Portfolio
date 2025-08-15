import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import Title from '../layouts/Title';
import { quote } from "../../assets";
import { motion } from "framer-motion";
import testimonialData from "../../Data/testimonialData";

// Modern Arrow components for the slider
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.1, backgroundColor: "#028b7d" }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-designColor hover:to-teal-600 duration-300 rounded-full text-xl text-gray-300 hover:text-white flex justify-center items-center absolute top-0 right-0 shadow-lg cursor-pointer z-10 border border-gray-600 hover:border-designColor"
      onClick={onClick}
    >
      <HiArrowRight />
    </motion.div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.1, backgroundColor: "#028b7d" }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-designColor hover:to-teal-600 duration-300 rounded-full text-xl text-gray-300 hover:text-white flex justify-center items-center absolute top-0 right-16 shadow-lg cursor-pointer z-10 border border-gray-600 hover:border-designColor"
      onClick={onClick}
    >
      <HiArrowLeft />
    </motion.div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
          i === dotActive 
            ? "bg-designColor shadow-lg shadow-designColor/50" 
            : "bg-gray-500 hover:bg-gray-400"
        }`}
      />
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT PEOPLE SAY" des="Testimonials" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="w-full px-4 py-8">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
                {/* Avatar and Person Info */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-[#1e2024] via-[#1a1d21] to-[#23272b] p-8 rounded-xl shadow-shadowOne flex flex-col gap-6 justify-center items-center border border-gray-800/50 hover:border-designColor/30 transition-all duration-300"
                >
                  <div className="w-full flex flex-col items-center">
                    {/* Modern circular avatar with glow effect */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-28 h-28 mx-auto mb-4 relative group"
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-designColor/30 group-hover:border-designColor/60 transition-all duration-300 shadow-lg">
                        <img
                          className="w-full h-full object-cover"
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-designColor/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
                    </motion.div>
                    
                    <motion.h3 
                      whileHover={{ color: "#028b7d" }}
                      className="text-xl font-bold text-white mt-2 text-center transition-colors duration-300"
                    >
                      {testimonial.name}
                    </motion.h3>
                    <p className="text-sm text-gray-400 mt-1 text-center">{testimonial.role}</p>
                    
                    {/* Rating Stars with animation */}
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
                
                {/* Testimonial Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full lgl:w-[65%] h-full flex flex-col justify-between relative"
                >
                  {/* Quote icon with animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -top-4 -left-2 z-10"
                  >
                    <FaQuoteLeft className="text-4xl text-designColor opacity-30" />
                  </motion.div>
                  
                  <div className="w-full h-full py-8 bg-gradient-to-br from-[#1e2024] via-[#1a1d21] to-[#23272b] rounded-xl shadow-shadowOne p-6 lgl:p-8 flex flex-col justify-center gap-6 border border-gray-800/50 hover:border-designColor/30 transition-all duration-300">
                    {/* Project info header */}
                    <div className="flex flex-col gap-3 pb-6 border-b border-gray-700/50">
                      <motion.h3 
                        whileHover={{ color: "#028b7d" }}
                        className="text-xl lgl:text-2xl font-semibold tracking-wide text-white transition-colors duration-300"
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
                    
                    {/* Testimonial text */}
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="text-base md:text-lg font-titleFont text-gray-300 leading-relaxed tracking-wide relative z-10"
                    >
                      "{testimonial.testimonial}"
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;