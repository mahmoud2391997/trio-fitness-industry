import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";
import Flag from "react-world-flags";

const LanguageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const selectedLanguage = language === "english" ? "ENGLISH" : "العربية";

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left mt-2 md:mt-0">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-2 sm:px-4 py-2 text-sm font-medium text-white bg-[#928c6b] rounded-md hover:bg-[#928c6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#928c6b]"
      >
        {selectedLanguage === "ENGLISH" ? "EN" : "AR"}
      </button>
      {isOpen && (
        <div className={`absolute mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none ${language === "arabic" ? "left-0" : "right-0"}`}>
          <div className="py-1">
            <a
              href="#"
              onClick={() => handleLanguageChange("english")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Flag code="GB" className="w-5 h-5 mr-2" />
              English
            </a>
            <a
              href="#"
              onClick={() => handleLanguageChange("arabic")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Flag code="EGY" className="w-5 h-5 mr-2" />
              العربية
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
