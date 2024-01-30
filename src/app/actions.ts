"use server";

import { cookies } from "next/headers";

import { DEFAULT_LOCALE, isSupportLocale } from "@/i18n";

export const changeLocale = async (locale: string) => {
  if (!locale || typeof locale !== "string") {
    return false;
  }

  if (!isSupportLocale(locale)) {
    cookies().set("locale", DEFAULT_LOCALE);
    return true;
  }

  cookies().set("locale", locale);
  return true;
};
