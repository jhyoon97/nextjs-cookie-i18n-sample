import { atom } from "jotai";

import type { SupportLocales } from "@/i18n";
import { DEFAULT_LOCALE } from "@/i18n";

export const localeAtom = atom<SupportLocales>(DEFAULT_LOCALE);
