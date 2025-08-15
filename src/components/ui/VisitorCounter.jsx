import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaUsers, FaGlobe } from 'react-icons/fa';

// Import real analytics functions
import { getRealTimeData } from '../../utils/analytics';

const VisitorCounter = () => {
  const [stats, setStats] = useState({
    visitors: 0,
    views: 0,
    countries: 0
  });
  const [isUsingMock, setIsUsingMock] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const counterRef = useRef(null);

  // Set up intersection observer to detect when footer is visible
  useEffect(() => {
    const footer = document.querySelector('footer');
    
    if (!footer) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // When footer becomes visible, hide the counter
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );
    
    observer.observe(footer);
    
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  useEffect(() => {
    // Try to get real Google Analytics data first
    const fetchRealAnalytics = async () => {
      try {
        const data = await getRealTimeData();
        if (data && data.visitors) {
          setStats(data);
          setIsUsingMock(false);
          return true;
        }
        return false;
      } catch (error) {
        console.warn("Failed to fetch real analytics data:", error);
        return false;
      }
    };
    
    const updateStats = () => {
      // Only use mock data if real data couldn't be fetched
      if (isUsingMock) {
        // Using realistic base numbers for your portfolio
        const baseVisitors = 2847;
        const baseViews = 5234;
        const baseCountries = 34;
        
        // Get today's date to create daily increments
        const today = new Date().toDateString();
        const lastUpdate = localStorage.getItem('analytics_date');
        
        if (lastUpdate !== today) {
          // New day, reset increments
          localStorage.setItem('analytics_date', today);
          localStorage.setItem('daily_visitors', '0');
          localStorage.setItem('daily_views', '0');
          localStorage.setItem('daily_countries', '0');
        }
        
        const dailyVisitors = parseInt(localStorage.getItem('daily_visitors') || '0');
        const dailyViews = parseInt(localStorage.getItem('daily_views') || '0');
        const dailyCountries = parseInt(localStorage.getItem('daily_countries') || '0');
        
        // Small realistic increments
        const newDailyVisitors = dailyVisitors + Math.floor(Math.random() * 2);
        const newDailyViews = dailyViews + Math.floor(Math.random() * 4);
        const newDailyCountries = dailyCountries + (Math.random() > 0.9 ? 1 : 0);
        
        localStorage.setItem('daily_visitors', newDailyVisitors.toString());
        localStorage.setItem('daily_views', newDailyViews.toString());
        localStorage.setItem('daily_countries', newDailyCountries.toString());
        
        setStats({
          visitors: baseVisitors + newDailyVisitors,
          views: baseViews + newDailyViews,
          countries: Math.min(baseCountries + newDailyCountries, 50) // Cap at 50 countries
        });
      }
    };

    const initializeCounter = async () => {
      const gotRealData = await fetchRealAnalytics();
      if (!gotRealData) {
        updateStats();
      }
    };

    initializeCounter();
    
    // Set up interval for updates - every minute for mock data, every 2 minutes for real data
    const interval = setInterval(() => {
      if (isUsingMock) {
        updateStats();
      } else {
        fetchRealAnalytics();
      }
    }, isUsingMock ? 60000 : 120000);
    
    return () => clearInterval(interval);
  }, [isUsingMock]); // Add isUsingMock as a dependency

  const StatItem = ({ icon: Icon, label, value, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-lg p-2 border border-gray-600/30 hover:border-designColor/50 transition-all duration-300"
    >
      <div className="w-6 h-6 rounded-full bg-designColor/20 flex items-center justify-center flex-shrink-0">
        {Icon && <Icon className="text-designColor text-xs" />}
      </div>
      <div className="min-w-0 flex-1">
        <motion.div 
          className="text-sm font-bold text-white truncate"
          key={value}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value.toLocaleString()}
        </motion.div>
        <div className="text-xs text-gray-400 truncate">{label}</div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, x: -50 }}
      animate={{ 
        opacity: isFooterVisible ? 0 : 1, 
        x: 0,
        y: isFooterVisible ? 50 : 0
      }}
      transition={{ duration: 0.4 }}
      className={`fixed left-2 bottom-2 z-30 flex flex-col gap-2 max-w-[140px] hidden sm:flex ${
        isFooterVisible ? 'pointer-events-none' : ''
      }`}
      title={isUsingMock ? 
        "Using simulated analytics data - See ANALYTICS_SETUP.md for instructions to implement real data" : 
        "Analytics data from Google Analytics simulation"}
    >
      <StatItem icon={FaEye} label="Views" value={stats.views} delay={0.1} />
      <StatItem icon={FaUsers} label="Visitors" value={stats.visitors} delay={0.2} />
      <StatItem icon={FaGlobe} label="Countries" value={stats.countries} delay={0.3} />
    </motion.div>
  );
};

export default VisitorCounter;