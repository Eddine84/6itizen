import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // Ajoute le support de react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
    },
    //lng: "en", // Langue par défaut
    //fallbackLng: "en", // Langue de secours si la clé n'est pas trouvée
    interpolation: {
      escapeValue: false, // Pas nécessaire pour React
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"], // Priorité de détection
      caches: ["localStorage"], // Stocker la langue dans localStorage
    },
  });

export default i18n;
