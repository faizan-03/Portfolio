import emailjs from '@emailjs/browser';

// Helper function to safely get environment variables
const getEnvVariable = (key, fallback) => {
  // Check if process.env is available (for development)
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  // Check if window._env_ is available (for production)
  else if (typeof window !== 'undefined' && window._env_ && window._env_[key]) {
    return window._env_[key];
  }
  // Return fallback value
  return fallback;
};

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  // Get public key from environment variables
  const publicKey = getEnvVariable('REACT_APP_EMAILJS_PUBLIC_KEY', "EDcUAjiaiYpWnoOcd");
  emailjs.init(publicKey);
};

// Send email using EmailJS
export const sendEmail = async (templateParams) => {
  try {
    // Get email configuration from environment variables
    const serviceId = getEnvVariable('REACT_APP_EMAILJS_SERVICE_ID', "service_v4aotvc");
    const templateId = getEnvVariable('REACT_APP_EMAILJS_TEMPLATE_ID', "template_tt0xhcg");
    const contactEmail = getEnvVariable('REACT_APP_EMAIL', "ranafaizaan03@gmail.com");
    
    // Ensure recipient email is always set
    const params = {
      ...templateParams,
      to_email: contactEmail
    };
    
    // Send email using environment variables
    const response = await emailjs.send(
      serviceId,
      templateId,
      params
    );
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};

// Create a template for EmailJS
// You'll need to create a template in your EmailJS account with these variables:
/*
Template example:
Subject: New Contact Form Submission from {{from_name}}

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Budget Range: {{budget}}
Interest: {{interest}}
Country: {{country}}

Message:
{{message}}

---
This email was sent to {{to_email}}
*/ 