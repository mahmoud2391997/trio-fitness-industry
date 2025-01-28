import React from "react";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img src="/image.png" className="w-16 md:min-w-16 lg:w-24" />
            <img src="/name.png" className="w-32 md:min-w-36 lg:w-52" />
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-4 md:mt-0 w-full flex items-center space-x-2">
            <div className="flex space-x-4 justify-evenly
             w-full">
              <a
                href="https://wa.me/your-number"
                className="hover:underline"
                aria-label="WhatsApp"
              >
                              <FaWhatsapp className="text-white  m-auto sm:mr-2 text-3xl sm:inline-block" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                className="hover:underline"
                aria-label="Instagram"
              >
                              <FaInstagram className="text-white m-auto sm:mr-2 text-3xl sm:inline-block" />
                Instagram
              </a>
              <a
                href="tel:+your-number"
                className="hover:underline"
                aria-label="Phone Call"
              >
                <FaPhone className="text-white  m-auto sm:mr-2 text-3xl sm:inline-block" />
                Phone Call
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <span className="text-center md:text-left">&copy; Trio Fitness Industry 2025 All Rights Reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
         
        </div>
        </div>
    </footer>
  );
};

export default Footer;
