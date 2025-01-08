import React, { createContext, useState, useContext } from 'react';
import en from '../i18n/en';
import it from '../i18n/it';

const translations = { en, it };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it'); // Default to Italian

  const value = {
    language,
    setLanguage,
    t: (key) => {
      const keys = key.split('.');
      let value = translations[language];
      for (const k of keys) {
        if (value === undefined) break;
        value = value[k];
      }
      return value || translations['en'][key] || key;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
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