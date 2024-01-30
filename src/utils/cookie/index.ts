import { cookies } from "next/headers";

import type { SupportLocales } from "@/i18n";
import { isSupportLocale, DEFAULT_LOCALE } from "@/i18n";

export const getLocale = (): SupportLocales => {
  const cookieStore = cookies();
  const locale = cookieStore.get("locale")?.value || DEFAULT_LOCALE;

  return isSupportLocale(locale) ? locale : DEFAULT_LOCALE;
};
