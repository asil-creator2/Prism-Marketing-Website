
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/en.json";
import ar from "../locales/ar/ar.json";
import { updateDocumentDirection } from "./direction";

// Languages supported by the website.
const supportedLanguages = ["en", "ar"] as const;

// Create a TypeScript type from the supported languages.
// AppLanguage can only be "en" or "ar".
type AppLanguage = (typeof supportedLanguages)[number];

// Get the language that should be used when the website first loads.
const getInitialLanguage = (): AppLanguage => {
  // Check whether the code is running outside the browser.
  if (typeof window === "undefined") return "en";

  // Check if the user previously selected a language.
  const savedLanguage = localStorage.getItem("ps-prism-language");

  // If a supported language was saved, use it.
  if (savedLanguage === "en" || savedLanguage === "ar") {
    return savedLanguage;
  }

  // Otherwise, use Arabic if the browser language is Arabic.
  // If not, default to English.
  return navigator.language.toLowerCase().startsWith("ar")
    ? "ar"
    : "en";
};

// Initialize i18next and connect it to React.
i18n.use(initReactI18next).init({
  // Load the translation files for each supported language.
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },

  // Set the initial language based on the user's saved preference
  // or the browser's language.
  lng: getInitialLanguage(),

  // Use English when a translation is missing.
  fallbackLng: "en",

  // Tell i18next which languages the website supports.
  supportedLngs: [...supportedLanguages],

  // React renders text safely, so i18next doesn't need to escape it.
  interpolation: {
    escapeValue: false,
  },

  // Return an empty value instead of null when a translation is missing.
  returnNull: false,
});

// Runs after i18next has finished initializing.
// Set the HTML document's language and text direction.
i18n.on("initialized", () => {
  updateDocumentDirection(i18n.resolvedLanguage ?? i18n.language);
});

// Runs whenever the user changes the website's language.
i18n.on("languageChanged", (language) => {
  // Update the document language and direction.
  updateDocumentDirection(language);

  // Save the selected language so it persists after a page refresh.
  if (typeof window !== "undefined") {
    localStorage.setItem("ps-prism-language", language);
  }
});

updateDocumentDirection(i18n.resolvedLanguage ?? i18n.language);

export default i18n;
