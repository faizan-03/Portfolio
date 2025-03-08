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
    <div className="w-full h-20 sticky top-0 z-50 bg-[#212428] mx-auto flex justify-between items-center font-titlefont border-b-[1px] border-b-gray-600">
      <div>
        {/* <img src={logo} alt="logo" /> */}
        <h1 className="font-bold font-mono ml-4 md:ml-14 text-lg md:text-xl shadow-white">Portfolio</h1>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:block mr-14">
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navlink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 relative group"
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
                className="relative"
              >
                {navlink.title}
                <span className={`h-[2px] inline-block bg-designColor absolute left-0 -bottom-0.5 
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
          className="text-2xl text-gray-400 hover:text-designColor"
        >
          {showMenu ? <MdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#212428] border-b border-gray-600">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinksdata.map((navlink) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
