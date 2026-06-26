# 📚 Learn Hub

> **국비지원부터 온라인 강의까지, 다양한 교육과정을 한 곳에서 검색하고 비교할 수 있는 교육 플랫폼**

<img width="1672" height="941" alt="ChatGPT Image 2026년 6월 26일 오후 04_19_08" src="https://github.com/user-attachments/assets/78496b73-b5a9-421d-a954-afe316a63470" />



<br>

## 📖 프로젝트 소개

**Learn Hub**는 다양한 교육과정을 쉽고 빠르게 탐색하고, 원하는 조건으로 검색 및 필터링하여 사용자에게 적합한 교육과정을 찾을 수 있는 **교육과정 검색 및 학습 관리 플랫폼**입니다.

국비지원 과정부터 온라인 강의까지 다양한 교육 콘텐츠를 한곳에서 확인할 수 있으며, 관심 교육과정을 저장하고 최근 본 강의를 관리하는 등 실제 교육 플랫폼과 유사한 사용자 경험을 제공하는 것을 목표로 개발하였습니다.

---

# 📋 프로젝트 요약

| 구분          | 내용                  |
| ----------- | ------------------- |
| **프로젝트명**   | Learn Hub           |
| **프로젝트 유형** | 개인 프로젝트             |
| **주제**      | 교육과정 검색 및 학습 관리 플랫폼 |
| **개발 기간**   | 2026.05.14 ~ 2026.06.11                |
| **배포 주소**   | https://learnhub-nextjs.vercel.app/                |

---

# 🎯 프로젝트 목표

기존 교육 플랫폼은 원하는 교육과정을 찾기 위해 여러 사이트를 방문해야 하는 번거로움이 있습니다.

**Learn Hub**는 이러한 불편함을 개선하기 위해 다양한 교육과정을 하나의 플랫폼에서 검색하고, 원하는 조건으로 필터링하며, 관심 교육과정을 저장하여 효율적으로 관리할 수 있도록 개발하였습니다.

또한 소셜 로그인과 개인 맞춤 기능을 제공하여 사용자 편의성을 높이고, 실제 서비스와 유사한 사용자 경험을 구현하는 것을 목표로 하였습니다.

---

# ⭐ 핵심 기능

### 🔍 교육과정 검색

* 키워드 기반 교육과정 검색
* 추천 검색어 제공
* 원하는 교육과정 빠른 탐색

---

### 📂 카테고리별 탐색

* 개발
* 디자인
* AI
* 부트캠프
* 국비지원

분야별 교육과정을 쉽게 찾아볼 수 있습니다.

---

### 🎯 다양한 조건 검색

* 카테고리
* 교육기관
* 교육방식
* 가격
* 정렬

원하는 조건에 맞는 교육과정을 손쉽게 검색할 수 있습니다.

---

### ❤️ 관심 교육과정 저장

* 관심 강의 저장
* LocalStorage 데이터 유지
* 마이페이지 연동

---

### 🕒 최근 본 교육과정

* 최근 조회한 강의 저장
* 이어보기 기능

---

### 🔐 소셜 로그인

* Google Login
* Kakao Login
* Naver Login

---

### 👤 마이페이지

* 회원 정보
* 관심 강의 관리
* 개인정보 수정

---

# 🚀 주요 기능

| 페이지        | 주요 기능                      |
| ---------- | -------------------------- |
| **Home**   | 검색, 검색어, 추천 강의, 신규 강의   |
| **강의**     | 전체 교육과정 조회, 검색, 페이지네이션     |
| **카테고리**   | 분야별 강의 조회, 필터, 정렬          |
| **상세 페이지** | 강의 소개, 커리큘럼, 기관 정보, 찜하기, 신청하러 가기    |
| **나의 강의**  | 관심 강의, 학습 관리, 최근 본 강의               |
| **마이페이지**  | 개인정보 수정, 고객센터, 공지사항        |
| **로그인**    | Google · Kakao · Naver 로그인 |

---

# 🛠 기술 스택

## 🛠 기술 스택

### 💻 개발 환경

#### 1. Frontend

<table>
  <thead>
    <tr>
      <th>사용기술</th>
      <th>설명</th>
      <th>Badge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Next.js 16 (App Router)</td>
      <td>App Router 기반으로 페이지 라우팅 및 서버 컴포넌트를 활용한 웹 애플리케이션 개발</td>
      <td><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"></td>
    </tr>
    <tr>
      <td>React 19</td>
      <td>컴포넌트 기반 UI 개발</td>
      <td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"></td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td>정적 타입 기반으로 안정적인 코드 작성</td>
      <td><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"></td>
    </tr>
    <tr>
      <td>SCSS</td>
      <td>모듈 기반 스타일링 및 유지보수성 향상</td>
      <td><img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white"></td>
    </tr>
  </tbody>
</table>

---

#### 2. UI Library

<table>
  <thead>
    <tr>
      <th>사용기술</th>
      <th>설명</th>
      <th>Badge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Material UI</td>
      <td>아이콘 및 UI 컴포넌트 구현</td>
      <td><img src="https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white"></td>
    </tr>
    <tr>
      <td>Swiper</td>
      <td>메인 배너 및 추천 강의 슬라이더 구현</td>
      <td><img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white"></td>
    </tr>
  </tbody>
</table>

---

#### 3. Authentication

<table>
  <thead>
    <tr>
      <th>사용기술</th>
      <th>설명</th>
      <th>Badge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NextAuth.js</td>
      <td>Google · Kakao · Naver 소셜 로그인 및 세션 인증 구현</td>
      <td><img src="https://img.shields.io/badge/Auth.js-000000?style=flat-square&logo=auth0&logoColor=white"></td>
    </tr>
  </tbody>
</table>

---

#### 4. Browser Storage

<table>
  <thead>
    <tr>
      <th>사용기술</th>
      <th>설명</th>
      <th>Badge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LocalStorage</td>
      <td>관심 강의, 최근 본 강의, 온보딩 정보를 브라우저에 저장</td>
      <td><img src="https://img.shields.io/badge/LocalStorage-F9AB00?style=flat-square&logo=googlechrome&logoColor=white"></td>
    </tr>
  </tbody>
</table>

---

#### 5. Development Tool

<table>
  <thead>
    <tr>
      <th>사용기술</th>
      <th>설명</th>
      <th>Badge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Visual Studio Code</td>
      <td>프로젝트 개발 및 코드 편집</td>
      <td><img src="https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"></td>
    </tr>
    <tr>
      <td>Git</td>
      <td>버전 관리</td>
      <td><img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"></td>
    </tr>
    <tr>
      <td>GitHub</td>
      <td>소스 코드 관리 및 프로젝트 저장소 운영</td>
      <td><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"></td>
    </tr>
    <tr>
      <td>Figma</td>
      <td>UI/UX 디자인 및 프로토타입 제작</td>
      <td><img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"></td>
    </tr>
  </tbody>
</table>

---

#### 6. Deployment

<table>
  <thead>
    <tr>
      <th>사용기술</th>
      <th>설명</th>
      <th>Badge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vercel</td>
      <td>프로젝트 배포 및 운영</td>
      <td><img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"></td>
    </tr>
  </tbody>
</table>

---

# 📅 개발 기간

| 기간   | 내용           |
| ---- | ------------ |
| (작성) | 기획 및 요구사항 정의 |
| (작성) | UI/UX 디자인    |
| (작성) | 기능 구현        |
| (작성) | 테스트 및 리팩토링   |

---

# 👨‍💻 담당 개발 범위

* UI/UX 디자인 및 퍼블리싱
* 반응형 웹 구현
* 교육과정 검색 기능
* 카테고리 및 필터 기능
* 페이지네이션
* 교육과정 상세 페이지
* 관심 교육과정(찜) 기능
* 최근 본 강의 기능
* 나의 강의 페이지
* 마이페이지
* 소셜 로그인
* 온보딩 페이지
* LocalStorage 데이터 관리

---

# 📂 프로젝트 구조

```bash
LearnHub
│
├── app
│   ├── login
│   ├── courses
│   ├── my-course
│   ├── mypage
│   ├── api
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── common
│   ├── home
│   ├── courses
│   ├── login
│   └── mypage
│
├── data
│   └── courses.json
│
├── hooks
├── styles
├── types
├── utils
├── public
└── middleware.ts
```

---

# 📑 프로젝트 문서

```text
📁 Docs

├── 요구사항 정의서
├── 정보구조도(IA)
├── 와이어프레임
├── 디자인 시스템
├── WBS
├── 화면 설계서
└── README
```

---

# ⚙ 개발 상세

### 🔍 교육과정 검색

사용자가 원하는 교육과정을 키워드로 검색할 수 있도록 구현하였으며, 추천 검색어를 통해 빠른 탐색이 가능하도록 개발하였습니다.

---

### 🎯 카테고리 및 필터

카테고리와 다양한 조건을 조합하여 원하는 교육과정을 쉽게 찾을 수 있도록 구현하였습니다.

---

### 📄 교육과정 상세

교육과정 소개, 커리큘럼, 교육기관 정보를 확인하고 관심 교육과정으로 저장할 수 있습니다.

---

### ❤️ 관심 교육과정

LocalStorage를 활용하여 관심 교육과정을 저장하고 새로고침 이후에도 데이터를 유지하도록 구현하였습니다.

---

### 🕒 최근 본 강의

최근 방문한 교육과정을 LocalStorage에 저장하여 언제든 다시 확인할 수 있도록 구현하였습니다.

---

### 🔐 소셜 로그인

NextAuth를 활용하여 Google, Kakao, Naver 로그인을 구현하고 최초 로그인 시 온보딩을 진행하도록 개발하였습니다.

---

### 📱 반응형 웹

Desktop, Tablet, Mobile 환경에서도 동일한 사용자 경험을 제공할 수 있도록 반응형 UI를 구현하였습니다.

---

# 🛠 트러블 슈팅

## 1️⃣ 관심 교육과정 중복 저장 문제

### 문제

동일한 교육과정을 여러 번 저장하면 LocalStorage에 중복 데이터가 저장되는 문제가 발생하였습니다.

### 해결

기존 데이터를 확인한 후 중복 여부를 검사하여 동일한 데이터는 저장되지 않도록 수정하였습니다.

### 결과

* 중복 저장 방지
* 데이터 안정성 향상
* 사용자 경험 개선

---

## 2️⃣ 최근 본 강의 중복 문제

### 문제

같은 교육과정을 반복 조회하면 최근 본 강의 목록에 동일한 데이터가 계속 저장되었습니다.

### 해결

기존 데이터를 제거한 뒤 가장 앞에 다시 추가하는 방식으로 수정하였으며 최대 10개의 데이터만 유지하도록 구현하였습니다.

### 결과

* 중복 제거
* 최신 순 정렬 유지
* 불필요한 데이터 증가 방지

---

## 3️⃣ 온보딩 반복 실행 문제

### 문제

온보딩을 완료한 사용자도 로그인할 때마다 온보딩 화면이 반복해서 나타났습니다.

### 해결

온보딩 완료 여부를 LocalStorage에 저장하고 로그인 시 해당 값을 확인하여 최초 로그인 사용자만 온보딩을 진행하도록 개선하였습니다.

### 결과

* 최초 로그인 시에만 온보딩 실행
* 사용자 경험 개선

---

## 4️⃣ 페이지 이동 시 스크롤 위치 유지 문제

### 문제

상세 페이지에서 목록으로 이동하면 이전 스크롤 위치가 유지되어 처음부터 콘텐츠를 확인하기 어려웠습니다.

### 해결

페이지 이동 시 스크롤을 최상단으로 이동하도록 처리하여 자연스러운 페이지 이동 경험을 제공하였습니다.

### 결과

* 페이지 이동 UX 개선
* 콘텐츠 접근성 향상
