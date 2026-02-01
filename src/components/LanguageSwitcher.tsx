import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="overflow-hidden relative size-10 grid place-content-center rounded-xl bg-slate-200 dark:bg-slate-800 hover:ring-2 ring-primary100/50 transition-all duration-300 group"
      aria-label="Toggle Language"
    >
      <span className="text-sm font-bold text-slate-700 dark:text-text100 group-hover:text-primary100 transition-colors uppercase">
        {i18n.language === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
