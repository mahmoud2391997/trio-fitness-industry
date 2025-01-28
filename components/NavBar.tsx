import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageDropdown from "./languages";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import englishContent from "../content/english";
import arabicContent from "../content/arabic";

// Add the following CSS class to your global CSS file or within a style tag
/*

*/
interface NavBarProps {
  navBg: string;
}
const NavBar: React.FC<NavBarProps> = ({ navBg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();




  const content = language === "arabic" ? arabicContent : englishContent;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  };

  return (
    <nav
      className={
        navBg +
        " h-[15vh] fixed top-0 py-[1%] px-[3.5%] z-20 w-full text-[#928c6b] flex justify-around items-center" +
        (language === "arabic" ? " rtl" : " ltr") + (language === "arabic" ? " flex-row-reverse" : "")
      }
      style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
    >
      <div className={`flex justify-between w-5/6 items-center space-x-4 ${language === "arabic" ? "flex-row-reverse" : ""}`}>
        <Link href={"/"} className="flex flex-col items-center">
          <img src="/image.png" className="w-16 md:min-w-16 lg:w-24" />
          <img src="/name.png" className="w-32 md:min-w-36 lg:w-52" />
        </Link>
        <div className={`hidden md:flex text-lg lg:text-2xl justify-around w-full font-semibold space-x-4 ${language === "arabic" ? "flex-row-reverse" : ""}`}>
          <a href="/" className="hover:text-white">
            {content.home}
          </a>
          <a href="#about" className="hover:text-white">
            {content.about}
          </a>
          <a href="#transformations" className="hover:text-white">
            {content.transformations}
          </a>
          <a href="#packages" className="hover:text-white">
            {content.packages}
          </a>
          <a href="#reviews" className="hover:text-white">
            {content.reviews}
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
          {content.home}
        </a>
        <a href="#about" className="block py-2 hover:text-white">
          {content.about}
        </a>
        <a href="#transformations" className="block py-2 hover:text-white">
          {content.transformations}
        </a>
        <a href="#packages" className="block py-2 hover:text-white">
          {content.packages}
        </a>
        <a href="#reviews" className="block py-2 hover:text-white">
          {content.reviews}
        </a>
      </div>
      <LanguageDropdown />
    </nav>
  );
};

export default NavBar;
