import ko from "./ko.json";
import en from "./en.json";

export const DEFAULT_LOCALE = "ko";

const supportLocales = [DEFAULT_LOCALE, "en"] as const;

export type SupportLocales = (typeof supportLocales)[number];

export type TranslationKey = keyof (typeof translations)[typeof DEFAULT_LOCALE];

export const translations = {
  ko,
  en,
};

export const isSupportLocale = (locale: string): locale is SupportLocales => {
  return supportLocales.includes(locale as SupportLocales);
};
