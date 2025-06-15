# 프로젝트 요구사항 명세서 (PRD)

## 프로젝트 개요
AI-DEV-EDU-LANDING 프로젝트는 AI 개발 교육을 위한 랜딩 페이지를 제공합니다.

## 현재 프로젝트 구조
- app/
- components/
- hooks/
- lib/
- public/
- styles/
- README.md
- package.json
- pnpm-lock.yaml
- package-lock.json
- tailwind.config.ts
- components.json
- next.config.mjs
- next-env.d.ts
- .gitignore
- postcss.config.mjs
- tsconfig.json

## 현재 상태
- Next.js 기반 프로젝트 초기 세팅 완료
- Tailwind CSS 설정 포함
- 컴포넌트, 훅, 라이브러리 폴더 구조 생성

## 기술 스택
- **프레임워크/플랫폼:** Next.js, React
- **스타일링:** Tailwind CSS, PostCSS, CSS3, 반응형 디자인(Responsive Design), 구조별 CSS 분리(styles/, public/style)
- **언어:** TypeScript, JavaScript (ES6)
- **상태 관리 및 폼:** React Hook Form, Zod
- **UI 컴포넌트:** Radix UI, Lucide React, Embla Carousel
- **차트:** Recharts
- **유틸리티:** clsx, class-variance-authority, tailwind-merge, date-fns
- **기타:** Vaul, Sonner, next-themes, input-otp
- **개발 도구:** Git, Visual Studio Code, Cursor AI
- **인터랙티비티:** Vanilla JavaScript (ES6+, public/js), Next.js 내장 기능

## 최신 배포 과정 (닷홈 호스팅)

1. next.config.mjs에서 basePath, assetPrefix를 ''(빈 문자열)로 수정
   ```js
   basePath: '',
   assetPrefix: '',
   output: 'export',
   ```
2. npm run build로 out 폴더에 정적 파일 생성
3. out 폴더에 .nojekyll 파일 생성
4. out 폴더의 모든 파일/폴더(.nojekyll 포함)를 FileZilla 등으로 닷홈 /html 폴더에 업로드(덮어쓰기)
5. http://mybranding.dothome.co.kr/ 접속 시 CSS, 이미지, 메뉴, 모든 페이지가 정상 동작하는지 확인
6. 위 변경사항을 git add . → git commit -m "fix: dothome 배포용 basePath/assetPrefix 수정 및 정적 빌드" → git push로 GitHub에 반영

