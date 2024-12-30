import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 absolute z-20 w-full text-[#928c6b] flex justify-around items-center">
      <div className="flex flex-col space-x-4 items-center">
        <img
          src="/logo.jpg"
          className="w-40 h-20"
        />
      
      </div>
      <div className="flex text-lg font-semibold space-x-4 w-1/3 justify-around">
        <a href="#home" className=" hover:text-white">
          Home
        </a>
        <a href="#about" className=" hover:text-white">
          About
        </a>
        <a href="#services" className=" hover:text-white">
          Services
        </a>
        <a href="#contact" className=" hover:text-white">
          Contact
        </a>
      </div>
      <select className="bg-gray-800  hover:text-white border-none">
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
    </nav>
  );
};

export default NavBar;
