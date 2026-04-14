import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "es" ? "EN" : "ES"}</span>
    </button>
  );
};

export default LanguageSwitcher;
