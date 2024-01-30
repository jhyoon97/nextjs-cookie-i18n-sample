import { useAtom } from "jotai";

import type { TranslationKey } from "@/i18n";
import { localeAtom } from "@/states/atoms";
import { DEFAULT_LOCALE, isSupportLocale, translations } from "@/i18n";

const useTranslation = () => {
  const [currentLocale, setLocaleInner] = useAtom(localeAtom);

  const t = (key: TranslationKey) => {
    return translations[currentLocale][key] || "";
  };

  const setLocale = (locale: string) => {
    if (locale !== currentLocale) {
      if (locale && isSupportLocale(locale)) {
        setLocaleInner(locale);
      } else {
        setLocaleInner(DEFAULT_LOCALE);
      }
    }
  };

  return { t, currentLocale, setLocale };
};

export default useTranslation;
