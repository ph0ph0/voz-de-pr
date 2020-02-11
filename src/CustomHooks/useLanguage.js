import React, { useState, useContext, useMemo } from "react";

export const LanguageContext = React.createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("spanish");

  const switchLanguage = language => {
    window.log(`Setting language to: ${language}`);
    setLanguage(language);
  };

  const values = useMemo(
    () => ({
      language,
      switchLanguage
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error(
      "useLanguage hook must be used within a SearchProvider component"
    );
  }

  return context;
};
