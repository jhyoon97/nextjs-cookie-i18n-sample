"use client";

import useTranslation from "@/hooks/useTranslation";

const Home = () => {
  const { t } = useTranslation();

  return <div>{t("title")}</div>;
};

export default Home;
