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

// Testimonial Data - Updated to reflect actual experience and skills
export const testimonialData = [
  {
    id: 1,
    name: "Ahmad Hassan",
    role: "Senior Developer at Cinnova",
    avatar: `${AVATAR_API_URL}/men/32.jpg`,
    project: "JavaScript Development Mentorship",
    platform: "Cinnova Lahore",
    date: "2024 - Present",
    rating: 5,
    testimonial: "Faizan has shown exceptional growth during his internship at Cinnova. His dedication to learning JavaScript and React.js is impressive. He consistently delivers clean, well-structured code and actively participates in team discussions. His problem-solving approach and eagerness to learn new technologies make him a valuable team member."
  },
  {
    id: 2,
    name: "Dr. Ayesha Khan",
    role: "Computer Science Faculty",
    avatar: `${AVATAR_API_URL}/women/45.jpg`,
    project: "Student Management System",
    platform: "University of Gujrat",
    date: "December 2024",
    rating: 5,
    testimonial: "Faizan's work on the Student Management System using .NET Blazor was outstanding. His understanding of C# and Razor Pages, combined with proper JWT authentication implementation, resulted in a robust and secure application. The system's dynamic operations and data integrity features exceeded our expectations."
  },
  {
    id: 3,
    name: "Usman Ali",
    role: "HCS President",
    avatar: `${AVATAR_API_URL}/men/63.jpg`,
    project: "Technical Workshop Organization",
    platform: "Hayatian Computing Society",
    date: "2024 - Present",
    rating: 5,
    testimonial: "As Joint Secretary, Faizan has been instrumental in organizing successful technical workshops and coding competitions. His leadership skills and technical knowledge help bridge the gap between students and industry professionals. His contributions to the computing community at our university are highly valued."
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    role: "Workshop Participant",
    avatar: `${AVATAR_API_URL}/women/22.jpg`,
    project: "Web Development Workshop",
    platform: "Code Camp Pakistan",
    date: "June 2025",
    rating: 5,
    testimonial: "Faizan's teaching approach during the web development workshop was excellent. He explained complex concepts in simple terms and provided hands-on exercises that helped us build our first websites. His patience and willingness to help each participant individually made the learning experience enjoyable and effective."
  }
];

export default testimonialData; 