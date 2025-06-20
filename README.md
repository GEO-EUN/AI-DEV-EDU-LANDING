# AI-DEV-EDU-LANDING

AI 개발 교육을 위한 랜딩 페이지 프로젝트입니다.

---

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
- 아직 커밋되지 않은 파일 다수 존재 (초기 개발 단계)

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

---

## 🛠️ 개발노트

1. **ChatGPT로 기본 PRD 구성**
   - ChatGPT를 활용해 프로젝트의 PRD(제품 요구사항 명세서) 초안 작성

2. **https://v0.dev 에서 ChatGPT로 만든 PRD로 기본 프로젝트 기능 구성 후 프로젝트 다운로드**
   - v0.dev에서 PRD 기반으로 웹 프로젝트 자동 생성
   - 생성된 프로젝트를 로컬로 다운로드하여 개발 시작

3. **https://notebooklm.google.com/ 에서 비상교육_정보_교과서_3단원 문제해결과 프로그래밍 요약**
   - NotebookLM에서 교과서 3단원(문제해결과 프로그래밍) 주요 내용을 요약 정리
   - 요약본을 전자책 콘텐츠 설계에 반영
   - 오디오북(algobook.mp3)을 notebooklm에서 생성하여 활용

4. **Cursor AI에서 v0.dev에서 만든 프로젝트, notebooklm에서 요약한 내용으로 전자책 페이지 임베디드 개발**
   - Cursor AI(코드 어시스턴트)로 v0.dev 프로젝트와 notebooklm 요약본을 바탕으로 각 전자책 페이지(xhtml, js, css 등) 개발
   - 알고리즘의 순차 구조, 반복 구조, 선택 구조를 인터랙티브 기능으로 시뮬레이션 구현

5. 문제해결과 프로그래밍 메뉴에 gitpages에 배포된 전자책 임베디드 
   - 전자책 github 페이지: https://geo-eun.github.io/EPUB-ALGORITHMS-PROGRAMMING/OEBPS/xhtml/index.xhtml
   - 전자책 github: https://github.com/GEO-EUN/EPUB-ALGORITHMS-PROGRAMMING
   - Q&A는 직접 구성한 [Padlet Q&A 보드](https://padlet.com/AI_InfoCom_Dev_Teacher/ai-xmju3laff0on2zqe)를 페이지 내에 포함
   - 다양한 온라인 실습 플랫폼 / 온라인 실습 UI 리서치 하여 추가

5. **프로그래밍 실습하기 페이지에 플립북(https://heyzine.com), [Scratch(mit.edu)](https://scratch.mit.edu/)에 직접 작성한 프로젝트(실습코드 실행영역)를 추가**
   - 실습 페이지에서 오디오북, 플립북, Scratch 실습코드 실행영역을 통합 제공
   - 플립북 주소: https://heyzine.com/flip-book/03c73a56e2.html

6. github repo 생성 후 형상관리, github pages 및 웹호스팅 배포

---

## 최근 작업 이력
- 2025-06-15: 프로젝트 초기 세팅 (Next.js, Tailwind CSS)
- 주요 폴더 구조 생성: app, components, hooks, lib, public, styles
- 문서화 폴더(doc) 및 PRD, 개발 노트 작성 시작
- 다음 작업 예정: 랜딩 페이지 UI 개발, 주요 컴포넌트 설계 및 구현, 초기 라우팅 및 페이지 구성

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

### 닷홈 배포 주의사항 및 FileZilla 업로드 팁
- out 폴더 자체를 업로드하는 것이 아니라, out 폴더 안의 내용물 전체를 업로드해야 함.
- 숨김 파일(.nojekyll)도 반드시 업로드.
- FileZilla에서 "서버 → 숨김 파일 표시"를 체크하면 숨김 파일이 보임.
- 업로드 완료 후 http://mybranding.dothome.co.kr/ 접속 → 바로 랜딩 페이지가 보여야 정상.
