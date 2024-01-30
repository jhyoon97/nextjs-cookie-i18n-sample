"use client";

import { Provider } from "jotai";

import type { SupportLocales } from "@/i18n";

import Hydrator from "./Hydrator";

interface Props {
  serverLocale: SupportLocales;
  children: React.ReactNode;
}

const JotaiProvider = ({ serverLocale, children }: Props) => {
  return (
    <Provider>
      <Hydrator serverLocale={serverLocale}>{children}</Hydrator>
    </Provider>
  );
};

export default JotaiProvider;
