import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../Data/data";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center text-center mb-10"
      >
        <Title title="Features" des="What I Do" />
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-16 px-4 md:px-10 lg:px-16 max-w-7xl mx-auto"
      >
        {featuresData.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="flex justify-center"
          >
            <Card item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
