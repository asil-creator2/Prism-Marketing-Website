
export const isRTL = (language: string): boolean => {
  const baseLanguage = language.split("-")[0].toLowerCase();

  return baseLanguage === "ar";
};

export const updateDocumentDirection = (language: string): void => {
  if (typeof document === "undefined") return;

  const baseLanguage = isRTL(language) ? "ar" : "en";

  document.documentElement.lang = baseLanguage;
  document.documentElement.dir = isRTL(language) ? "rtl" : "ltr";
};
