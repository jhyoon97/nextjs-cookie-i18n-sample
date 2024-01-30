# Next.js 14.1 App Router cookie 기반 국제화 샘플 코드

- i18n/index.ts: 언어 관련 타입 및 변수 정의
- i18n/~~.json: 언어 팩
- hooks/useTranslations.ts: t, setLocale 함수룰 리턴하는 훅
- states/atoms.ts: locale 전역 상태
- utils/cookie/index.ts: 클라이언트에서 전달받은 쿠키에서 locale 추출
- app/layout.tsx: utils/cookie/getLocale로 html.lang 또는 메타데이터 설정
- app/JotaiProvider/Hydrator.tsx: 최초 페이지 생성 시 useHydrateAtoms, 이후 서버에서 전달받은 Props가 변동 발생 시 useEffect로 처리
- app/page.tsx: hooks/useTranslations에서 리턴하는 t 함수 사용하여 번역
- app/actions.tsx: 클라이언트에 쿠키 설정
- app/RootWrapper.tsx: 언어 버튼 클릭 시 app/actions 호출
