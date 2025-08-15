import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import Title from '../layouts/Title';
import { initEmailJS, sendEmail } from './emailjs-setup';

const Contact = () => {
  const formRef = useRef();
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    interest: '',
    country: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  const budgetOptions = [
    'Select Budget Range',
    '$1000 - $3000',
    '$3000 - $5000',
    '$5000 - $10000',
    '$10000+'
  ];

  const interestOptions = [
    'Select Interest',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Graphic Design',
    'Other'
  ];

  const countryOptions = [
    'Select Country',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Pakistan',
    'India',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Phone validation (optional but validate format if provided)
    if (formData.phone && !/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    // Budget validation
    if (!formData.budget || formData.budget === 'Select Budget Range') {
      newErrors.budget = 'Please select a budget range';
    }
    
    // Interest validation
    if (!formData.interest || formData.interest === 'Select Interest') {
      newErrors.interest = 'Please select an interest';
    }
    
    // Country validation
    if (!formData.country || formData.country === 'Select Country') {
      newErrors.country = 'Please select a country';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Prepare template parameters
      const templateParams = {
        to_email: 'ranafaizaan03@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        interest: formData.interest,
        country: formData.country,
        message: formData.message
      };
      
      try {
        // Using EmailJS to send the form
        const result = await sendEmail(templateParams);
        
        if (result.success) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            budget: '',
            interest: '',
            country: '',
            message: ''
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
    tap: { scale: 0.98 }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-200/30 dark:border-b-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-40 -left-10 w-72 h-72 rounded-full bg-designColor/5 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse" 
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
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center text-center mb-10"
      >
        <Title title="CONTACT ME" des="Get In Touch" />
      </motion.div>
      
      <div className="w-full px-4 md:px-10 lg:px-20">
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full p-4 mb-8 bg-green-500 bg-opacity-20 text-green-500 rounded-lg text-center"
          >
            Thank you for your message! I'll get back to you soon.
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full p-4 mb-8 bg-red-500 bg-opacity-20 text-red-500 rounded-lg text-center"
          >
            There was an error sending your message. Please try again later.
          </motion.div>
        )}
        
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-5xl mx-auto bg-white/95 dark:bg-[#1E2024] p-6 md:p-8 rounded-xl shadow-shadowOne relative overflow-hidden border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
        >
          {/* Animated background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-designColor/5 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Name Field */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-400">Your Name <span className="text-designColor">*</span></label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                whileFocus="focus"
                whileTap="tap"
                variants={inputVariants}
                className={`w-full bg-gray-50 dark:bg-[#191B1E] rounded-lg border-2 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-transparent'} p-4 text-gray-900 dark:text-white outline-none focus:border-designColor duration-300`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </motion.div>
            
            {/* Email Field */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-400">Email <span className="text-designColor">*</span></label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                whileFocus="focus"
                whileTap="tap"
                variants={inputVariants}
                className={`w-full bg-gray-50 dark:bg-[#191B1E] rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-transparent'} p-4 text-gray-900 dark:text-white outline-none focus:border-designColor duration-300`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </motion.div>
            
            {/* Phone Field */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm text-gray-700 dark:text-gray-400">Phone Number</label>
              <motion.input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                whileFocus="focus"
                whileTap="tap"
                variants={inputVariants}
                className={`w-full bg-gray-50 dark:bg-[#191B1E] rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-transparent'} p-4 text-gray-900 dark:text-white outline-none focus:border-designColor duration-300`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </motion.div>
            
            {/* Budget Range Dropdown */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-sm text-gray-700 dark:text-gray-400">Budget Range <span className="text-designColor">*</span></label>
              <motion.select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                whileFocus="focus"
                whileTap="tap"
                variants={inputVariants}
                className={`w-full bg-gray-50 dark:bg-[#191B1E] rounded-lg border-2 ${errors.budget ? 'border-red-500' : 'border-gray-200 dark:border-transparent'} p-4 text-gray-900 dark:text-white outline-none focus:border-designColor duration-300 appearance-none`}
              >
                {budgetOptions.map((option, index) => (
                  <option key={index} value={option} className="bg-gray-50 dark:bg-[#191B1E] text-gray-900 dark:text-white">
                    {option}
                  </option>
                ))}
              </motion.select>
              {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
            </motion.div>
            
            {/* Interest Dropdown */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="interest" className="text-sm text-gray-700 dark:text-gray-400">I'm Interested In <span className="text-designColor">*</span></label>
              <motion.select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                whileFocus="focus"
                whileTap="tap"
                variants={inputVariants}
                className={`w-full bg-gray-50 dark:bg-[#191B1E] rounded-lg border-2 ${errors.interest ? 'border-red-500' : 'border-gray-200 dark:border-transparent'} p-4 text-gray-900 dark:text-white outline-none focus:border-designColor duration-300 appearance-none`}
              >
                {interestOptions.map((option, index) => (
                  <option key={index} value={option} className="bg-gray-50 dark:bg-[#191B1E] text-gray-900 dark:text-white">
                    {option}
                  </option>
                ))}
              </motion.select>
              {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
            </motion.div>
            
            {/* Country Dropdown */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="country" className="text-sm text-gray-700 dark:text-gray-400">Country <span className="text-designColor">*</span></label>
              <motion.select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                whileFocus="focus"
                whileTap="tap"
                variants={inputVariants}
                className={`w-full bg-gray-50 dark:bg-[#191B1E] rounded-lg border-2 ${errors.country ? 'border-red-500' : 'border-gray-200 dark:border-transparent'} p-4 text-gray-900 dark:text-white outline-none focus:border-designColor duration-300 appearance-none`}
              >
                {countryOptions.map((option, index) => (
                  <option key={index} value={option} className="bg-gray-50 dark:bg-[#191B1E] text-gray-900 dark:text-white">
                    {option}
                  </option>
                ))}
              </motion.select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </motion.div>
            
            {/* Message Field - Full Width */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm text-gray-700 dark:text-gray-400">Your Message <span className="text-designColor">*</span></label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                whileFocus="focus"
                whileTap="tap"
                variants={inputVariants}
                className={`w-full bg-gray-50 dark:bg-[#191B1E] rounded-lg border-2 ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-transparent'} p-4 text-gray-900 dark:text-white outline-none focus:border-designColor duration-300 min-h-[150px] resize-none`}
                placeholder="Write your message here..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </motion.div>
            
            {/* Submit Button */}
            <motion.div variants={itemVariants} className="md:col-span-2 mt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 8px 25px rgba(2, 139, 125, 0.3)",
                  y: -1
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-designColor to-teal-600 hover:from-teal-600 hover:to-designColor text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <motion.span 
                      className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <motion.div
                      whileHover={{ 
                        x: 2,
                        rotate: 15,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                      <FaPaperPlane className="text-lg" />
                    </motion.div>
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact; 