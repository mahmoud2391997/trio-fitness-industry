import React, { useState } from 'react';
import Flag from 'react-world-flags';

const LanguageDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('EN');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const setLanguage = (language: string) => {
        setSelectedLanguage(language === 'en' ? 'EN' : 'AR');
        setIsOpen(false);
    };

    return (
        <div className="relative hidden md:inline-block text-left mt-2 md:mt-0">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#928c6b] rounded-md hover:bg-[#928c6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#928c6b]"
            >
                {selectedLanguage}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                    <div className="py-1">
                        <a
                            href="#"
                            onClick={() => setLanguage('en')}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <Flag code="GB" className="w-5 h-5 mr-2" />
                            English
                        </a>
                        <a
                            href="#"
                            onClick={() => setLanguage('ar')}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <Flag code="EGY" className="w-5 h-5 mr-2" />
                            AR
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
