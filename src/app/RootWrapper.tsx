"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styled from "styled-components";

import useTranslation from "@/hooks/useTranslation";

import { changeLocale } from "./actions";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button<{ $isActive?: boolean }>`
  flex: 1;
  padding: 15px 16px;
  background: ${(props) =>
    props.$isActive ? props.theme.tabs.bgActive : props.theme.tabs.bgNormal};
  color: ${(props) =>
    props.$isActive
      ? props.theme.tabs.textActive
      : props.theme.tabs.textNormal};
  font-size: 16px;
`;

const languages = [
  { language: "ko", label: "한국어" },
  { language: "en", label: "English" },
];

const RootWrapper = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { currentLocale } = useTranslation();

  return (
    <Wrapper>
      <ButtonWrapper>
        {languages.map((item) => (
          <Button
            key={item.language}
            type="button"
            $isActive={currentLocale === item.language}
            onClick={async () => {
              const isSuccess = await changeLocale(item.language);

              if (isSuccess) {
                router.replace(
                  `${pathname}${
                    searchParams.size > 0 ? `?${searchParams.toString()}` : ""
                  }`
                );
              }
            }}
          >
            {item.label}
          </Button>
        ))}
      </ButtonWrapper>
      {children}
    </Wrapper>
  );
};

export default RootWrapper;
