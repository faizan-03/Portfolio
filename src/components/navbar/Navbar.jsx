import React, { useState } from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-gray-900/95 dark:bg-[#212428] backdrop-blur-md mx-auto flex justify-between items-center font-titlefont border-b-[1px] border-b-gray-200/20 dark:border-b-gray-600 navbar transition-all duration-300">
      <div>
        <h1 className="font-bold font-mono ml-4 md:ml-14 text-lg md:text-xl text-gray-900 dark:text-white">
          <span className="bg-gradient-to-r from-designColor via-teal-500 to-blue-600 bg-clip-text text-transparent font-extrabold">
            Portfolio
          </span>
        </h1>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:block mr-14">
        <ul className="flex items-center gap-8">
          {navLinksdata.map((navlink) => (
            <li
              className="text-base font-medium text-gray-600 dark:text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 relative group"
              key={navlink._id}
            >
              <Link
                activeClass="active"
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveLink(navlink.link)}
                className="relative px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                {navlink.title}
                <span className={`h-[2px] inline-block bg-gradient-to-r from-designColor to-teal-500 absolute left-0 -bottom-1 rounded-full
                  group-hover:w-full transition-[width] ease duration-300
                  ${activeLink === navlink.link ? 'w-full' : 'w-0'}`}>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden mr-4">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl text-gray-600 dark:text-gray-400 hover:text-designColor p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
        >
          {showMenu ? <MdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/98 dark:bg-[#212428] backdrop-blur-md border-b border-gray-200/50 dark:border-gray-600 shadow-xl">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinksdata.map((navlink) => (
              <li
                className="text-base font-medium text-gray-600 dark:text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={navlink._id}
              >
                <Link
                  activeClass="active"
                  to={navlink.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => setActiveLink(navlink.link)}
                  onClick={() => setShowMenu(false)}
                  className="px-4 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
