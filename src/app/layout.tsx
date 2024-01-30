import type { Metadata } from "next";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { getLocale } from "@/utils/cookie";
import { translations } from "@/i18n";

import JotaiProvider from "./JotaiProvider";
import StyledComponentProvider from "./StyledComponentProvider";
import RootWrapper from "./RootWrapper";
import ContentWrapper from "./ContentWrapper";

interface Props {
  children: React.ReactNode;
}

dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

const RootLayout = ({ children }: Props) => {
  const locale = getLocale();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <JotaiProvider serverLocale={locale}>
          <StyledComponentProvider>
            <RootWrapper>
              <ContentWrapper>{children}</ContentWrapper>
            </RootWrapper>
          </StyledComponentProvider>
        </JotaiProvider>
      </body>
    </html>
  );
};

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = getLocale();

  return {
    title: translations[locale].metaTitle,
  };
};

export default RootLayout;
