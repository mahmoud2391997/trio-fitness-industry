import { FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { motion ,AnimatePresence } from 'framer-motion';

const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-4 z-50 ">
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
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
              >
                <FaPhone className="text-green-600 text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/hassan.mohamed07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-instagram-gradient rounded-full flex items-center justify-center"
              >
                <FaInstagram className="text-white text-3xl" />
              </a>
              <a
                href="https://wa.me/+201229845327"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
              >
                <FaWhatsapp className="text-green-700 text-3xl" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      <div
        className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center shadow-lg justify-center cursor-pointer"
        onClick={toggleOpen}
      >
{!isOpen ? <FaWhatsapp className="text-green-700 w-[80%] h-[80%] " /> : <svg xmlns="http://www.w3.org/2000/svg" className='w-[80%] h-[80%] text-red-600' width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
</svg>
    }
      </div>
    </div>
  );
};

export default SocialMedia;