import React from "react";
import Title from "../layouts/Title";
import Projectcard from "./Projectcard";
import { projectsData } from "../../Data/data";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }) => (
  <motion.button
    whileHover={{
      scale: 1.05,
      backgroundColor: "rgba(2, 139, 125, 0.9)",
      boxShadow: "0 10px 25px rgba(2, 139, 125, 0.3)",
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-designColor/50 rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-xl group"
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
    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-designColor/50 rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-xl group"
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

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-200/30 dark:border-b-gray-800/50 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-40 -left-10 w-72 h-72 rounded-full bg-designColor/5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
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
          repeatType: "reverse",
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 relative"
      >
        <Slider {...sliderSettings}>
          {projectsData.map((project, index) => (
            <div key={project.id} className="px-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Projectcard
                  title={project.title}
                  des={project.des}
                  src={project.src}
                  technologies={project.technologies}
                  category={project.category}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  date={project.date}
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Projects;
