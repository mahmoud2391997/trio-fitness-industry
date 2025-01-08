import { FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { motion ,AnimatePresence } from 'framer-motion';

const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-4 z-50">
          <AnimatePresence >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-2 flex flex-col items-center space-y-2"
            >
              <a
                href="tel:+201229845327"
                className="w-12 h-12 bg-[#928c6b] rounded-full flex items-center justify-center"
              >
                <FaPhone className="text-white text-xl" />
              </a>
              <a
                href="https://wa.me/+201229845327"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#928c6b] rounded-full flex items-center justify-center"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a>
              <a
                href="https://www.instagram.com/hassan.mohamed07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#928c6b] rounded-full flex items-center justify-center"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      <div
        className="w-16 h-16 bg-white rounded-full flex items-center shadow-lg justify-center cursor-pointer"
        onClick={toggleOpen}
      >
        <img src='/image.png' alt="whatsapp" className="w-[90%]"/>
      </div>
    </div>
  );
};

export default SocialMedia;