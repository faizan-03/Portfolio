// Import the quote icon
import { quote } from "../assets";

// Get avatar base URL - use a safe approach to access environment variables
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

// Get avatar API URL with fallback
const AVATAR_API_URL = getEnvVariable('REACT_APP_AVATAR_API_URL', 'https://randomuser.me/api/portraits');

// Testimonial Data
export const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager at TechSolutions",
    avatar: `${AVATAR_API_URL}/women/32.jpg`,
    project: "E-commerce Website Development",
    platform: "Freelance Project",
    date: "January 2023",
    rating: 5,
    testimonial: "Faizan delivered our e-commerce website ahead of schedule with exceptional attention to detail. His expertise in React and responsive design resulted in a seamless user experience across all devices. Communication was clear and consistent throughout the project. I highly recommend Faizan for any web development needs."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    avatar: `${AVATAR_API_URL}/men/45.jpg`,
    project: "SaaS Dashboard Interface",
    platform: "Upwork",
    date: "March 2023",
    rating: 5,
    testimonial: "Working with Faizan was a game-changer for our startup. He transformed our complex data into an intuitive dashboard that our clients love. His knowledge of modern JavaScript frameworks and UI/UX principles created a product that exceeded our expectations. Faizan's ability to understand our business needs and translate them into technical solutions was impressive."
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Marketing Director",
    avatar: `${AVATAR_API_URL}/women/63.jpg`,
    project: "Company Portfolio Website",
    platform: "Referral",
    date: "May 2023",
    rating: 5,
    testimonial: "Faizan redesigned our company website with a fresh, modern look that perfectly represents our brand. The site is not only visually stunning but also performs exceptionally well on all metrics. His implementation of animations and interactive elements has significantly increased user engagement. Faizan was responsive, professional, and a pleasure to work with throughout the project."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "University Professor",
    avatar: `${AVATAR_API_URL}/men/22.jpg`,
    project: "Educational Platform Development",
    platform: "University Project",
    date: "August 2023",
    rating: 5,
    testimonial: "Faizan developed an educational platform for our department that has transformed how we deliver content to students. His technical skills combined with his understanding of educational needs created a solution that is both powerful and user-friendly. The platform's responsive design works perfectly on all devices, and the backend integration with our existing systems was seamless. Faizan's work has made a significant positive impact on our teaching capabilities."
  }
];

export default testimonialData; 