
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CONTENT } from '../constants.ts';
import { LocalizedContent, Language } from '../types.ts';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: LocalizedContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content: CONTENT[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
