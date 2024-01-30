"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

import type { SupportLocales } from "@/i18n";
import { localeAtom } from "@/states/atoms";

interface Props {
  serverLocale: SupportLocales;
  children: React.ReactNode;
}

const Hydrator = ({ serverLocale, children }: Props) => {
  const setLocale = useSetAtom(localeAtom);

  useHydrateAtoms([[localeAtom, serverLocale]]);

  useEffect(() => {
    setLocale(serverLocale);
  }, [serverLocale]);

  return children;
};

export default Hydrator;
