import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-2 z-20 w-full text-[#928c6b] flex justify-around items-center">
      <div className="flex items-center space-x-4">
        <img src="/logo.jpg" className="h-16" />
      </div>
      <div className="hidden md:flex text-lg font-semibold space-x-4 w-1/3 justify-around">
        <a href="#home" className="hover:text-white">
          Home
        </a>
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
      <div className="hidden md:block">
        <select className="bg-gray-800 hover:text-white border-none">
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
