import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Add the following CSS class to your global CSS file or within a style tag
/*

*/

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-transparent absolute top-0 py-[1%] px-[5%] z-20 w-full text-[#928c6b] flex justify-between items-center">
      <div className="flex justify-start  w-3/4 items-center space-x-4">
        <img src="/image.png" className="max-w-24" />
        <div className="hidden md:flex text-2xl justify-around w-4/6 font-semibold space-x-4">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <select className="bg-black hover:text-white border-none">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
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
        <select className="bg-gray-800 hover:text-white border-none w-full mt-2">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar;
