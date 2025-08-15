import "./App.css";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import React, { useEffect, Suspense } from "react";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import VisitorCounter from "./components/ui/VisitorCounter";
import ProgressIndicator from "./components/ui/ProgressIndicator";
import LoadingSkeleton from "./components/ui/LoadingSkeleton";


const GA_MEASUREMENT_ID = 'G-52MMBREFN6';

function App() {
  useEffect(() => {
    
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Handle hash navigation
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        
        <ProgressIndicator />
        
       
        <ThemeToggle />
        
        
        <VisitorCounter />

        <div className="w-full h-auto bg-bodycolor text-lightText transition-colors duration-300">
          <Navbar />
          <div className="px-6">
            <motion.div
              className="max-w-screen-2xl mx-auto px-0 sm:px-8 lg:px-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Suspense fallback={<LoadingSkeleton type="card" count={1} />}>
                <Banner />
              </Suspense>
              
              <Suspense fallback={<LoadingSkeleton type="card" count={3} />}>
                <Features />
              </Suspense>
              
              <Suspense fallback={<LoadingSkeleton type="card" count={3} />}>
                <Projects />
              </Suspense>
              
              <Suspense fallback={<LoadingSkeleton type="skill" count={6} />}>
                <Resume />
              </Suspense>
              
              <Suspense fallback={<LoadingSkeleton type="testimonial" count={1} />}>
                <Testimonial />
              </Suspense>
              
              <Suspense fallback={<LoadingSkeleton type="card" count={1} />}>
                <Contact />
              </Suspense>
            </motion.div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
