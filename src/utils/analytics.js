// Google Analytics 4 Integration for React
// Follow these steps to integrate real analytics:

/*
STEP 1: Install Google Analytics
npm install gtag

STEP 2: Get your GA4 Measurement ID
- Go to https://analytics.google.com/
- Create a new property (GA4)
- Get your Measurement ID (starts with G-XXXXXXXXXX)

STEP 3: Add to your .env file:
REACT_APP_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

STEP 4: Initialize in your index.js or App.js
*/

// Initialize Google Analytics
export const initGA = (measurementId) => {
  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA4_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Get real-time analytics data (requires GA4 Reporting API)
export const getRealTimeData = async () => {
  try {
    // This requires server-side implementation with GA4 Reporting API
    // You'll need to create an API endpoint that fetches data from GA4
    const response = await fetch('/api/analytics/realtime');
    const data = await response.json();
    
    return {
      visitors: data.activeUsers || 0,
      views: data.screenPageViews || 0,
      countries: data.countries || 0
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return null;
  }
};

/*
STEP 5: Usage in your components

// In App.js
import { initGA } from './utils/analytics';

useEffect(() => {
  const measurementId = process.env.REACT_APP_GA4_MEASUREMENT_ID;
  if (measurementId) {
    initGA(measurementId);
  }
}, []);

// In VisitorCounter.jsx
import { getRealTimeData } from '../../utils/analytics';

useEffect(() => {
  const fetchRealData = async () => {
    const data = await getRealTimeData();
    if (data) {
      setStats(data);
    }
  };
  
  fetchRealData();
  const interval = setInterval(fetchRealData, 30000);
  return () => clearInterval(interval);
}, []);

STEP 6: Create API endpoint (if using Next.js or Express)
// pages/api/analytics/realtime.js (Next.js)
// or create Express endpoint

import { BetaAnalyticsDataClient } from '@google-analytics/data';

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: 'path/to/service-account-key.json', // or use environment variables
});

export default async function handler(req, res) {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' },
      ],
      dimensions: [
        { name: 'country' },
      ],
    });

    const visitors = response.rows?.[0]?.metricValues?.[0]?.value || 0;
    const views = response.rows?.[0]?.metricValues?.[1]?.value || 0;
    const countries = new Set(response.rows?.map(row => row.dimensionValues[0].value)).size || 0;

    res.status(200).json({
      activeUsers: parseInt(visitors),
      screenPageViews: parseInt(views),
      countries: countries
    });
  } catch (error) {
    console.error('Analytics API error:', error);
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
}
*/