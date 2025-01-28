import React, { createContext, useContext, useState } from 'react';
import englishContent from '../content/english';
import arabicContent from '../content/arabic';

const LanguageContext = createContext({
    language: 'ar',
    setLanguage: (language: string) => {},
    translations: {},
    direction: 'rtl'
});

import { ReactNode } from 'react';

export default function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState('english');
    const translations = language === 'english' ? englishContent : arabicContent;
    const direction = language === 'arabic' ? 'rtl' : 'ltr'; // Example logic

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations, direction }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);