import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedinIn, FaReact, FaDownload } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiBlazor, SiJavascript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

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

const Leftbanner = () => {
  const [text] = useTypewriter({
    words: [
      "MERN Developer",
      ".NET Developer",
      "UI/UX Designer",
      "Web Developer"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Get environment variables
  const githubUsername = getEnvVariable('REACT_APP_GITHUB_USERNAME', 'faizan-ali786');
  const linkedinId = getEnvVariable('REACT_APP_LINKEDIN_ID', 'rana-faizan-7b4b02252');
  const instagramUsername = getEnvVariable('REACT_APP_INSTAGRAM_USERNAME', 'ranafaizan__03');
  const cvPath = getEnvVariable('REACT_APP_CV_PATH', '/CV/MyResume.pdf');
  const name = getEnvVariable('REACT_APP_NAME', 'Faizan Ali');
  const description = getEnvVariable('REACT_APP_DESCRIPTION', 'A passionate developer specializing in MERN Stack, .NET Blazor, and exploring the realms of AI & Machine Learning. Currently pursuing BS Computer Science at the University of Gujrat.');

  return (
    <div className="w-full flex flex-col gap-8 md:pr-6">
      <div className="flex flex-col gap-5">
        <h4 className="text-base md:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-6xl font-bold text-white whitespace-nowrap">
          Hi, I'm <span className="text-designColor">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white flex flex-wrap items-center gap-2">
          a <span className="whitespace-nowrap">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#028b7d"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {description}
        </p>
        
        <div className="flex flex-col xs:flex-row gap-4 mt-2">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full xs:w-auto flex items-center justify-center gap-2 bg-designColor text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-opacity-80 transition duration-300 cursor-pointer"
          >
            <MdEmail className="text-xl" />
            Hire Me
          </Link>
          <a
            href={cvPath}
            download
            className="w-full xs:w-auto flex items-center justify-center gap-2 border border-designColor text-designColor px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-designColor hover:text-white transition duration-300"
          >
            <FaDownload className="text-xl" />
            Download CV
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8 mt-8 relative z-30">
        <div>
          <h2 className="text-base uppercase font-titlefont mb-4 text-designColor">
            Find Me In
          </h2>
          <div className="flex gap-4">
            <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaGithub />
            </a>
            <a href={`https://www.instagram.com/${instagramUsername}/`} target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaInstagram />
            </a>
            <a href={`https://www.linkedin.com/in/${linkedinId}/`} target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="relative z-30">
          <h2 className="text-base uppercase font-titlefont mb-4 text-designColor">
            My Skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiBlazor />
            </span>
            <span className="bannerIcon relative z-30">
              <FaReact />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbanner