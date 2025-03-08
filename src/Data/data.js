import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaServer, FaDatabase, FaCode } from "react-icons/fa";
import { SiReact, SiDotnet, SiJavascript, SiTailwindcss, SiPython, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";

// Import certificate images
import awsFargate from "../assets/certificates/AWS Fargate.pdf";
import containerSecurity from "../assets/certificates/Container SECURITY.pdf";
import eksPremier from "../assets/certificates/EKS PREMIER.pdf";
import introToContainers from "../assets/certificates/Intro to containers.pdf";
import introToServerless from "../assets/certificates/Intro to serverless computing.pdf";
import icsImage from "../assets/certificates/ics.png";
import hcsImage from "../assets/certificates/hcs.png";

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
    title: "Frontend Developer Intern",
    subTitle: "TechSolutions Inc. - (2023 - Present)",
    location: "Remote",
    description: "Developing responsive user interfaces using React.js and Tailwind CSS. Collaborating with senior developers to implement new features and optimize existing code. Participating in code reviews and agile development processes."
  },
  {
    id: 2,
    title: "Web Development Project Lead",
    subTitle: "University of Gujrat - (2022 - 2023)",
    location: "Gujrat, Pakistan",
    description: "Led a team of 4 students to develop the department's event management portal. Implemented frontend using React and backend with Node.js/Express. Managed project timeline, task delegation, and client communication."
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
    subTitle: "Hayatian Computing Society - (2022 - Present)",
    location: "University of Gujrat",
    description: "Organizing technical workshops, coding competitions, and industry talks for computer science students. Managing society communications and coordinating with external partners and speakers."
  },
  {
    id: 2,
    title: "Tech Workshop Instructor",
    subTitle: "Code Camp Pakistan - (2022)",
    location: "Virtual",
    description: "Conducted workshops on web development fundamentals for beginners. Created learning materials and hands-on exercises to help students build their first websites. Mentored participants through their coding journey."
  },
  {
    id: 3,
    title: "Open Source Contributor",
    subTitle: "Various GitHub Projects - (2021 - Present)",
    location: "Remote",
    description: "Contributing to open-source projects focused on web development tools and educational resources. Submitting pull requests for bug fixes and feature enhancements. Participating in code reviews and community discussions."
  }
];

// Certificate Data
export const certificateData = [
  {
    id: 1,
    title: "Hayatian Computing Society (HCS)",
    organization: "University of Gujrat",
    date: "2022 - Present",
    description: "Serving as Joint Secretary of the Hayatian Computing Society, responsible for organizing technical events, workshops, and coding competitions. Contributing to the development of computing skills and knowledge sharing among students.",
    image: hcsImage,
    pdfLink: null,
    role: "Joint Secretary"
  },
  {
    id: 2,
    title: "AWS Fargate",
    organization: "Amazon Web Services",
    date: "March 2023",
    description: "Certification in AWS Fargate, a serverless compute engine for containers that works with both Amazon ECS and EKS. Learned to deploy and manage containerized applications without managing servers or clusters, focusing on scalability and cost optimization.",
    pdfLink: awsFargate
  },
  {
    id: 3,
    title: "Container Security",
    organization: "Cloud Security Alliance",
    date: "March 2023",
    description: "Comprehensive certification in container security best practices, covering vulnerability management, access control, network security, and runtime protection. Gained expertise in securing containerized applications throughout the development lifecycle.",
    pdfLink: containerSecurity
  },
  {
    id: 4,
    title: "EKS Premier",
    organization: "Amazon Web Services",
    date: "March 2023",
    description: "Advanced certification in Amazon Elastic Kubernetes Service (EKS), covering cluster management, application deployment, scaling, and integration with AWS services. Developed skills in orchestrating containerized applications at scale in production environments.",
    pdfLink: eksPremier
  },
  {
    id: 5,
    title: "Introduction to Containers",
    organization: "Docker",
    date: "March 2023",
    description: "Foundational certification in container technology, covering Docker fundamentals, container creation, management, and orchestration. Learned containerization principles and best practices for application packaging and deployment.",
    pdfLink: introToContainers
  },
  {
    id: 6,
    title: "Introduction to Serverless Computing",
    organization: "Amazon Web Services",
    date: "March 2023",
    description: "Certification in serverless architecture and computing models, focusing on AWS Lambda, API Gateway, and related services. Gained knowledge in building scalable, event-driven applications without managing traditional server infrastructure.",
    pdfLink: introToServerless
  },
  {
    id: 7,
    title: "Information and Cyber Security",
    organization: "Cybersecurity Institute",
    date: "April 2023",
    description: "Comprehensive certification in information security principles and cybersecurity best practices. Covers threat detection, vulnerability assessment, security protocols, and data protection strategies for modern applications and infrastructure.",
    image: icsImage,
    pdfLink: null
  },
  {
    id: 8,
    title: "Cisco Certified Network Associate (CCNA)",
    organization: "Cisco Systems",
    date: "May 2023",
    description: "Professional certification validating expertise in network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability. Developed skills in configuring, managing, and troubleshooting enterprise networks.",
    pdfLink: null
  }
];
