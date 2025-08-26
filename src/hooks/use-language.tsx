import React, { createContext, useContext, useState, useEffect } from "react";

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage or detect from browser
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'th'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Set English as default language
      setLanguage('en');
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};