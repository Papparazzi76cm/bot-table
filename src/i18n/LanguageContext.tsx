import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { es } from "./translations/es";
import { en } from "./translations/en";

export type Language = "es" | "en";
export type Translations = typeof es;

const translations: Record<Language, Translations> = { es, en };

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "es" || saved === "en")) return saved;
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === "en" ? "en" : "es";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "es" ? "en" : "es");
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
