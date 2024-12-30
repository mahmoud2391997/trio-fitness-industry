import React from "react";
import { Roboto } from "next/font/google"; // Use Roboto as an alternative font

const roboto = Roboto({ weight: "700" }); // Use appropriate weight for heavy font

const NavBar = () => {
  return (
    <nav className="bg-black p-4 absolute z-20 w-full text-[#928c6b] flex justify-around items-center">
      <div className="flex flex-col space-x-4 items-center">
        <img
          src="/Screenshot 2024-12-30 at 11.41.36 AM.png"
          className="w-24 h-16"
        />
        <h1
          className="text-xl font-bold"
          style={{ fontFamily: '"Bebas Neue", Helvetica, Arial, sans-serif' }}
        >
          TRIO FITNESS INDUSTRY
        </h1>
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
