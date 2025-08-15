import { FaMobile, FaServer, FaDatabase } from "react-icons/fa";
import { SiReact, SiDotnet } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// Import certificate images
import icsImage from "../assets/Certificates/ICS.png";
import hcsImage from "../assets/Certificates/hcs.png";

// Features Data
export const featuresData = [ 
  {
    id: 1,
    icon: SiReact,
    title: "MERN Stack Development",
    des: "Specialized in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Creating responsive, scalable, and modern web solutions with clean architecture and best practices for optimal performance and user experience.",
  },
  {
    id: 2,
    icon: SiDotnet,
    title: ".NET Blazor Development",
    des: "Proficient in developing interactive web applications with .NET Blazor, leveraging C# for both frontend and backend development. Creating efficient, maintainable, and enterprise-grade solutions with robust security and seamless integration capabilities.",
  },
  {
    id: 3,
    icon: MdDesignServices,
    title: "Graphic Design",
    des: "Creating visually compelling designs for digital and print media. Proficient in Adobe Creative Suite including Photoshop and Illustrator. Designing logos, marketing materials, UI elements, and visual assets that align with brand identities and engage target audiences.",
  },
  {
    id: 4,
    icon: FaMobile,
    title: "Responsive Web Development",
    des: "Building mobile-first, responsive websites that provide optimal viewing experience across all devices. Implementing modern CSS frameworks like Tailwind CSS to ensure consistent and adaptive layouts that enhance usability and engagement on any screen size.",
  },
  {
    id: 5,
    icon: FaDatabase,
    title: "Database Management",
    des: "Experienced in designing and optimizing both SQL and NoSQL database systems. Implementing efficient data models, queries, and ensuring data integrity and security across applications while maintaining performance and scalability for growing datasets.",
  },
  {
    id: 6,
    icon: FaServer,
    title: "Web Hosting & Deployment",
    des: "Setting up and managing web hosting environments for optimal performance and security. Experienced with various hosting platforms, domain management, SSL implementation, and deployment pipelines to ensure websites are fast, secure, and always available.",
  },
];

// Experience Data
export const experienceData = [
  {
    id: 1,
    title: "JavaScript Developer Intern",
    subTitle: "Cinnova Lahore - (2024 - Present)",
    location: "Lahore, Pakistan",
    description: "Developing dynamic web applications using JavaScript, React.js, and modern frontend frameworks. Working on client projects, implementing responsive designs, and collaborating with development teams to deliver high-quality solutions."
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    subTitle: "TechSolutions Inc. - (2023 - 2024)",
    location: "Remote",
    description: "Developed responsive user interfaces using React.js and Tailwind CSS. Collaborated with senior developers to implement new features and optimize existing code. Participated in code reviews and agile development processes."
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    subTitle: "Self-employed - (2021 - Present)",
    location: "Remote",
    description: "Designing and developing custom websites for small businesses and startups. Creating responsive, user-friendly interfaces with modern frameworks. Managing client relationships and delivering projects on schedule and within budget."
  }
];

// Volunteer Experience Data
export const volunteerData = [
  {
    id: 1,
    title: "Joint Secretary",
    subTitle: "Hayatian Computing Society - (2024 - Present)",
    location: "University of Gujrat",
    description: "Organizing technical workshops, coding competitions, and industry talks for computer science students. Managing society communications and coordinating with external partners and speakers."
  },
  {
    id: 2,
    title: "Tech Workshop Instructor",
    subTitle: "Code Camp Pakistan - (Sept 2024 - June 2025)",
    location: "Virtual",
    description: "Conducted workshops on web development fundamentals for beginners. Created learning materials and hands-on exercises to help students build their first websites. Mentored participants through their coding journey."
  },
  {
    id: 3,
    title: "Open Source Contributor",
    subTitle: "Various GitHub Projects - (2023 - Present)",
    location: "Remote",
    description: "Contributing to open-source projects focused on web development tools and educational resources. Submitting pull requests for bug fixes and feature enhancements. Participating in code reviews and community discussions."
  }
];

// Certificate Data
// Projects Data - Ordered by category: Web Apps first, then Mobile Apps, then AI/ML
export const projectsData = [
  {
    id: 1,
    title: "Student Management System",
    des: "Role-based academic platform for managing student records and attendance. Features dynamic operations, robust form validation, and data integrity with JWT authentication. Built as part of university project work.",
    src: null,
    technologies: [".NET Blazor", "C#", "Razor Pages", "JWT"],
    category: "Web App",
    githubLink: null,
    liveLink: null,
    date: "Sep 2024 - Dec 2024"
  },
  {
    id: 2,
    title: "Spotify Clone",
    des: "Modern music streaming interface clone built with React and Tailwind CSS. Features responsive design, DaisyUI components, music player controls, and playlist management functionality with modern UI/UX.",
    src: null,
    technologies: ["React", "Tailwind CSS", "DaisyUI", "JavaScript"],
    category: "Web App",
    githubLink: null,
    liveLink: null,
    date: "2024"
  },
  {
    id: 3,
    title: "E-Commerce Mobile App",
    des: "Full-featured e-commerce mobile application with real-time product browsing, order placement, and in-app admin chat. Includes push notifications and Firebase Cloud Messaging integration.",
    src: null,
    technologies: ["Flutter", "Firebase", "Firestore", "Provider", "Push Notifications"],
    category: "Mobile App",
    githubLink: null,
    liveLink: null,
    date: "June 2025 - July 2025"
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    des: "Real-time messaging system with authentication, responsive UI, and profile management. Implemented secure communication using Zustand-based state handling and seamless UX design.",
    src: null,
    technologies: ["Flutter", "Gemini 1.5 Flash API", "REST API", "Shared Preferences"],
    category: "Mobile App",
    githubLink: null,
    liveLink: null,
    date: "Dec 2024 - Jan 2025"
  },
  {
    id: 5,
    title: "University Chatbot FAQ",
    des: "Semantic AI chatbot for university admission queries using local embeddings and FAISS vector search. Features admin panel for FAQ management, vector ranking, and secure role-based access control.",
    src: null,
    technologies: ["FastAPI", "FAISS", "Sentence Transformers", "MongoDB Atlas", "Flutter"],
    category: "AI/ML",
    githubLink: null,
    liveLink: null,
    date: "May 2025"
  },
  {
    id: 6,
    title: "AI Research Assistant",
    des: "Multi-agent AI system that generates research reports from thesis topics. Features semantic web scraping, content ranking, summarization, and compiles results into clickable PDF reports.",
    src: null,
    technologies: ["Python", "ChromaDB", "Brave Search API", "Embeddings", "Flutter"],
    category: "AI/ML",
    githubLink: null,
    liveLink: null,
    date: "June 2025"
  },
  {
    id: 7,
    title: "Gesture-Controlled Interface",
    des: "Futuristic startup trigger system that detects right-hand wave gestures using real-time browser-based ML. Launches cinematic animations for touchless UI and experimental interaction design.",
    src: null,
    technologies: ["TensorFlow.js", "MediaPipe Hands", "Anime.js", "Flutter"],
    category: "AI/ML",
    githubLink: null,
    liveLink: null,
    date: "2024"
  }
];

export const certificateData = [
  {
    id: 1,
    title: "Hayatian Computing Society (HCS)",
    organization: "University of Gujrat",
    date: "2024 - Present",
    description: "Serving as Joint Secretary of the Hayatian Computing Society, responsible for organizing technical events, workshops, and coding competitions. Contributing to the development of computing skills and knowledge sharing among students.",
    image: hcsImage,
    pdfLink: null,
    role: "Joint Secretary"
  },
  {
    id: 2,
    title: "Prompt Engineering",
    organization: "Professional Development",
    date: "February 2024",
    description: "Comprehensive training in prompt engineering techniques for AI systems. Learned advanced strategies for crafting effective prompts, optimizing AI responses, and implementing prompt-based solutions in real-world applications.",
    pdfLink: null
  },
  {
    id: 3,
    title: "Introduction to JavaScript",
    organization: "Online Learning Platform",
    date: "September 2023",
    description: "Foundational certification in JavaScript programming language. Covered core concepts including variables, functions, DOM manipulation, event handling, and modern ES6+ features for web development.",
    pdfLink: null
  },
  {
    id: 4,
    title: "Flutter Development",
    organization: "Mobile Development Institute",
    date: "December 2024",
    description: "Comprehensive certification in Flutter framework for cross-platform mobile development. Learned widget creation, state management, API integration, and deployment strategies for iOS and Android applications.",
    pdfLink: null
  },
  {
    id: 5,
    title: "AI & ML Fundamentals",
    organization: "Tech Learning Academy",
    date: "November 2024",
    description: "Introduction to Artificial Intelligence and Machine Learning concepts. Covered supervised and unsupervised learning, neural networks, data preprocessing, and practical implementation of ML algorithms.",
    pdfLink: null
  },
  {
    id: 6,
    title: "Flutter Firebase Integration",
    organization: "Mobile Development Institute",
    date: "December 2024",
    description: "Advanced certification in integrating Firebase services with Flutter applications. Learned authentication, real-time database, cloud storage, push notifications, and analytics implementation.",
    pdfLink: null
  },
  {
    id: 7,
    title: ".NET Blazor & C#",
    organization: "Microsoft Learning",
    date: "September 2024",
    description: "Professional certification in .NET Blazor framework and C# programming. Covered server-side and client-side Blazor development, component architecture, and enterprise application development.",
    pdfLink: null
  },
  {
    id: 8,
    title: "Introduction to Serverless Development",
    organization: "Cloud Computing Institute",
    date: "March 2025",
    description: "Certification in serverless architecture and development patterns. Learned serverless functions, event-driven architecture, microservices design, and cloud-native application development strategies.",
    pdfLink: null
  }
];
