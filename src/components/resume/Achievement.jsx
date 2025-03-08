import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { certificateData } from "../../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow components for the slider
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-full text-2xl text-gray-400 hidden md:flex justify-center items-center fixed-position shadow-shadowOne cursor-pointer z-10"
      style={{
        position: 'absolute',
        top: '50%',
        right: '-24px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-full text-2xl text-gray-400 hidden md:flex justify-center items-center fixed-position shadow-shadowOne cursor-pointer z-10"
      style={{
        position: 'absolute',
        top: '50%',
        left: '-24px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Achievement = ({ certificates = certificateData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const sliderRef = useRef(null);

  // Function to open PDF in a new tab
  const openPdf = (pdfLink) => {
    window.open(pdfLink, '_blank', 'noopener,noreferrer');
  };

  // Function to view certificate in modal
  const viewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsViewerOpen(true);
  };

  // Function to go to previous slide
  const goPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to go to next slide
  const goNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-8"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <motion.div
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === currentSlide ? "bg-designColor" : "bg-gray-500"
        }`}
        whileHover={{ scale: 1.2 }}
        animate={{
          scale: i === currentSlide ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          swipeToSlide: true,
          touchThreshold: 10,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true
        }
      }
    ],
    fade: true,
    cssEase: "cubic-bezier(0.45, 0, 0.55, 1)"
  };

  // Certificate icons based on title
  const getCertificateIcon = (title) => {
    if (title.includes('Hayatian') || title.includes('HCS')) {
      return "🏛️"; // Building icon for society/institution
    } else if (title.includes('AWS') || title.includes('Serverless')) {
      return "🌩️"; // Cloud icon for AWS
    } else if (title.includes('Container') || title.includes('Docker')) {
      return "📦"; // Container icon
    } else if (title.includes('EKS')) {
      return "🚢"; // Ship icon for Kubernetes
    } else if (title.includes('Cisco') || title.includes('CCNA')) {
      return "🌐"; // Globe icon for networking/Cisco
    } else if (title.includes('Cyber') || title.includes('Security')) {
      return "🔒"; // Lock icon for security
    } else {
      return "🏆"; // Default trophy icon
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 mb-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-designColor tracking-[4px] uppercase"
        >
          2023 - Present
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl font-bold"
        >
          My Certifications
        </motion.h2>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-10 relative">
        {/* Mobile Navigation Dots (visible only on mobile) */}
        <div className="flex justify-center gap-4 mb-4 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-[#0c1821] hover:bg-black text-gray-400 rounded-full flex items-center justify-center shadow-shadowOne"
            onClick={goPrev}
            aria-label="Previous certificate"
          >
            <HiArrowLeft />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-[#0c1821] hover:bg-black text-gray-400 rounded-full flex items-center justify-center shadow-shadowOne"
            onClick={goNext}
            aria-label="Next certificate"
          >
            <HiArrowRight />
          </motion.button>
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {certificates.map((certificate) => (
            <div key={certificate.id} className="outline-none px-2 md:px-4">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-auto flex flex-col md:flex-row gap-6 md:gap-10"
              >
                {/* Certificate Visual Section */}
                <motion.div
                  variants={itemVariants}
                  className="w-full md:w-[40%] h-full"
                >
                  <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 md:p-6 rounded-lg shadow-shadowOne overflow-hidden group">
                    <div className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => certificate.pdfLink ? openPdf(certificate.pdfLink) : null}>
                      {/* Certificate visual representation */}
                      <div className="w-full h-[200px] md:h-[250px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                        {certificate.image ? (
                          <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }}>
                            <img 
                              src={certificate.image} 
                              alt={certificate.title}
                              className="w-full h-full object-contain p-2"
                            />
                          </motion.div>
                        ) : (
                          <motion.div 
                            className="text-center p-4 transform transition-transform duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.span 
                              className="text-7xl mb-4 block"
                              animate={
                                certificate.title.includes('Hayatian') || certificate.title.includes('HCS')
                                  ? { 
                                      rotateY: [0, 360],
                                      scale: [1, 1.2, 1],
                                      color: ['#8e44ad', '#ffffff', '#8e44ad'] // Purple for society
                                    } 
                                  : certificate.title.includes('Cisco') 
                                    ? { 
                                        rotateY: [0, 360],
                                        scale: [1, 1.2, 1],
                                        color: ['#049fd9', '#ffffff', '#049fd9'] // Cisco blue color
                                      } 
                                    : { rotateY: [0, 360] }
                              }
                              transition={{ 
                                duration: 
                                  (certificate.title.includes('Hayatian') || certificate.title.includes('HCS')) 
                                    ? 4 
                                    : certificate.title.includes('Cisco') 
                                      ? 4 
                                      : 3, 
                                repeat: Infinity, 
                                repeatType: "loop", 
                                ease: "linear" 
                              }}
                            >
                              {getCertificateIcon(certificate.title)}
                            </motion.span>
                            <h4 className="text-white text-xl font-semibold">{certificate.title}</h4>
                            <p className="text-gray-400 text-sm mt-2">{certificate.organization}</p>
                            <div className="mt-4 bg-designColor/20 text-designColor py-1 px-3 rounded-full text-sm inline-block">
                              {certificate.date}
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Overlay with view button */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-designColor text-white rounded-md font-medium flex items-center gap-2"
                        >
                          <FaExternalLinkAlt /> View Certificate
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Certificate Description Section */}
                <motion.div
                  variants={itemVariants}
                  className="w-full md:w-[60%] h-full flex flex-col justify-between"
                >
                  <div className="w-full h-full py-6 md:py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-col gap-4 md:gap-6">
                      <div className="flex flex-col gap-2 md:gap-3">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                          {certificate.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-designColor text-lg">•</span>
                          <p className="text-sm md:text-base text-gray-300">
                            {certificate.organization}
                          </p>
                          <span className="text-gray-400">|</span>
                          <p className="text-sm md:text-base text-gray-300">
                            {certificate.date}
                          </p>
                          {certificate.role && (
                            <>
                              <span className="text-gray-400">|</span>
                              <p className="text-sm md:text-base text-designColor font-medium">
                                {certificate.role}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="w-full h-[1px] bg-gray-700 opacity-40"></div>
                      
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {certificate.description}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => certificate.pdfLink ? openPdf(certificate.pdfLink) : null}
                        className={`w-fit px-5 py-2.5 bg-gradient-to-r from-designColor to-teal-700 text-white rounded-md font-medium mt-2 md:mt-4 hover:shadow-lg hover:shadow-designColor/20 transition-all duration-300 flex items-center gap-2 group ${!certificate.pdfLink ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!certificate.pdfLink}
                      >
                        <FaFilePdf className="group-hover:animate-bounce" /> 
                        <span>{certificate.pdfLink ? 'Open Certificate' : 'View Only'}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Achievement;
