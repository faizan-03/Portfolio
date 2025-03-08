import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import Title from '../layouts/Title';
import { quote } from "../../assets";
import { motion } from "framer-motion";
import testimonialData from "../../Data/testimonialData";

// Arrow components for the slider
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
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
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#028b7d",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonials" />
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
                  className="w-full lgl:w-[30%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center items-center"
                >
                  <div className="w-full flex flex-col items-center">
                    {/* Avatar with pentagon shape */}
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden relative">
                      <div 
                        className="w-full h-full absolute"
                        style={{
                          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                          backgroundColor: "#1e2024",
                          padding: "4px"
                        }}
                      >
                        <img
                          className="w-full h-full object-cover"
                          style={{
                            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                          }}
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mt-2">{testimonial.name}</h3>
                    <p className="text-base text-gray-400 mt-1">{testimonial.role}</p>
                    
                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-4 text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <RiStarFill key={i} />
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Testimonial Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full lgl:w-[70%] h-full flex flex-col justify-between"
                >
                  <FaQuoteLeft className="text-5xl text-designColor opacity-20" />
                  <div className="w-full h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-designColor">
                          {testimonial.project}
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          via {testimonial.platform} - {testimonial.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-base md:text-lg font-titleFont text-gray-300 font-medium tracking-wide leading-7">
                      {testimonial.testimonial}
                    </p>
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