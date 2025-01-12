import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageDropdown from "./languages";

// Add the following CSS class to your global CSS file or within a style tag
/*

*/
interface NavBarProps {
  navBg: string;
}
const NavBar : React.FC<NavBarProps> = ({navBg}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  };

  return (
    <nav className= {navBg +" h-[15vh] fixed top-0 py-[1%] px-[3.5%] z-20 w-full text-[#928c6b] flex justify-between items-center"}>
      
      <div className="flex justify-between  w-5/6 items-center space-x-4">
      <div className="flex flex-col items-center">
        <img src="/image.png" className="w-16 md:min-w-16 lg:w-24" />
        <img src="/name.png" className="w-32 md:min-w-36 lg:w-52" />
      </div>
        <div className="hidden md:flex  text-lg lg:text-2xl justify-around w-full font-semibold space-x-4">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#transformations" className="hover:text-white">
            Transformations
          </a>
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#transformations" className="hover:text-white">
            Packages
          </a>
          <a href="#transformations" className="hover:text-white">
            Reviews
          </a>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white text-center`}
        >
        <a href="#home" className="block py-2 hover:text-white">
          Home
        </a>
        <a href="#about" className="block py-2 hover:text-white">
          About
        </a>
        <a href="#services" className="block py-2 hover:text-white">
          Services
        </a>
        <a href="#contact" className="block py-2 hover:text-white">
          Contact
        </a>
       
      </div>
      <LanguageDropdown/>
    </nav>
  );
};

export default NavBar;
