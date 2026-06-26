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

### 📂 카테고리별 탐색

* 프론트엔드
* 백엔드
* 데이터·AI
* 디자인
* 모바일 개발

분야별 교육과정을 쉽게 찾아볼 수 있습니다.

### 🎯 다양한 조건 검색

* 카테고리
* 교육기관
* 교육방식
* 가격
* 정렬

원하는 조건에 맞는 교육과정을 손쉽게 검색할 수 있습니다.

### ❤️ 관심 교육과정 저장

* 관심 강의 저장
* LocalStorage 데이터 유지


### 🕒 최근 본 교육과정

* 최근 조회한 강의 저장


### 🔐 소셜 로그인

* Google Login
* Kakao Login
* Naver Login


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
      <td>Next.js</td>
      <td>App Router 기반 풀스택 프레임워크</td>
      <td><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"></td>
    </tr>
    <tr>
      <td>SCSS</td>
      <td>스타일 모듈 관리</td>
      <td><img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white"></td>
    </tr>
  </tbody>
</table>

### 🎨 UI Library

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
      <td>Swiper</td>
      <td>신규 강의 및 추천 강의 슬라이더 구현</td>
      <td><img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white"></td>
    </tr>
  </tbody>
</table>

### 🔐 Authentication

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

### 💾 Storage

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
      <td>관심 강의, 최근 본 강의, 온보딩 데이터를 브라우저에 저장</td>
      <td><img src="https://img.shields.io/badge/LocalStorage-F9AB00?style=flat-square&logo=googlechrome&logoColor=white"></td>
    </tr>
  </tbody>
</table>

### 🛠 Development Tool

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
      <td>프로젝트 버전 관리</td>
      <td><img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"></td>
    </tr>
    <tr>
      <td>GitHub</td>
      <td>소스 코드 관리 및 원격 저장소 운영</td>
      <td><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"></td>
    </tr>
    <tr>
      <td>Figma</td>
      <td>UI/UX 디자인 및 프로토타입 제작</td>
      <td><img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"></td>
    </tr>
  </tbody>
</table>

### 🚀 Deployment

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

| 기간 | 내용 |
|------|------|
| 2026.05.14 ~ 2026.05.17 | 기획 및 UI 디자인 |
| 2026.05.18 ~ 2026.06.05 | 주요 기능 개발 |
| 2026.06.06 ~ 2026.06.11 | 테스트 및 리팩토링 

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

## 📂 프로젝트 구조

```bash
📂LEARNHUB
┣━━ 📂public/                           # 이미지, 아이콘 등 정적 리소스
┃   ┣━━ 📂image/                        # 프로젝트 이미지 및 썸네일
┃   ┣━━ file.svg
┃   ┣━━ globe.svg
┃   ┣━━ next.svg
┃   ┣━━ vercel.svg
┃   ┗━━ window.svg
┃
┣━━ 📂src/
┃   ┣━━ 📂app/
┃   ┃   ┣━━ 📂api/
┃   ┃   ┃   ┗━━ 📂auth/
┃   ┃   ┃       ┗━━ 📂[...nextauth]/      # NextAuth 인증 및 소셜 로그인 API
┃   ┃   ┃
┃   ┃   ┣━━ 📂components/
┃   ┃   ┃   ┣━━ 📂auth/
┃   ┃   ┃   ┃   ┗━━ LoginButton.jsx       # Google · Kakao · Naver 로그인 및 온보딩 처리
┃   ┃   ┃   ┃
┃   ┃   ┃   ┣━━ 📂common/
┃   ┃   ┃   ┃   ┣━━ Header.jsx            # 공통 헤더
┃   ┃   ┃   ┃   ┗━━ Footer.jsx            # 공통 푸터
┃   ┃   ┃   ┃
┃   ┃   ┃   ┣━━ 📂home/
┃   ┃   ┃   ┃   ┣━━ Hero.jsx              # 메인 배너 및 검색
┃   ┃   ┃   ┃   ┣━━ Recommend.jsx         # 추천 강의
┃   ┃   ┃   ┃   ┗━━ NewCourses.jsx        # 신규 강의
┃   ┃   ┃   ┃
┃   ┃   ┃   ┣━━ 📂course/
┃   ┃   ┃   ┃   ┣━━ CourseCard.jsx        # 강의 카드
┃   ┃   ┃   ┃   ┣━━ CourseList.jsx        # 강의 목록
┃   ┃   ┃   ┃   ┣━━ CourseFilter.jsx      # 검색 및 필터
┃   ┃   ┃   ┃   ┗━━ CourseDetail.jsx      # 강의 상세
┃   ┃   ┃   ┃
┃   ┃   ┃   ┣━━ 📂my-course/
┃   ┃   ┃   ┃   ┣━━ MyCourse.jsx          # 나의 강의
┃   ┃   ┃   ┃   ┣━━ MyCourseCard.jsx      # 수강 강의 카드
┃   ┃   ┃   ┃   ┗━━ CourseTabs.jsx        # 탭 메뉴
┃   ┃   ┃   ┃
┃   ┃   ┃   ┣━━ 📂mypage/
┃   ┃   ┃   ┃   ┗━━ ProfileEdit.jsx       # 회원정보 수정
┃   ┃   ┃   ┃
┃   ┃   ┃   ┣━━ AuthProvider.jsx          # NextAuth SessionProvider
┃   ┃   ┃   ┗━━ ProtectedRoute.jsx        # 로그인 권한 제어
┃   ┃   ┃
┃   ┃   ┣━━ 📂courses/
┃   ┃   ┃   ┣━━ 📂[id]/                   # 강의 상세 페이지
┃   ┃   ┃   ┗━━ page.jsx                  # 강의 목록 페이지
┃   ┃   ┃
┃   ┃   ┣━━ 📂login/                      # 로그인 페이지
┃   ┃   ┣━━ 📂my-course/                  # 나의 강의 페이지
┃   ┃   ┣━━ 📂mypage/                     # 마이페이지
┃   ┃   ┣━━ layout.js                     # 공통 레이아웃
┃   ┃   ┣━━ page.js                       # 메인 페이지
┃   ┃   ┗━━ globals.css                   # 전역 스타일
┃   ┃
┃   ┣━━ 📂data/
┃   ┃   ┣━━ courses.json                  # 강의 데이터
┃   ┃   ┣━━ customerPage.json             # 고객센터 데이터
┃   ┃   ┗━━ NoticePage.json               # 공지사항 데이터
┃   ┃
┃   ┗━━ 📂styles/
┃       ┣━━ globals.scss                  # 전역 스타일
┃       ┣━━ home.scss                     # 메인 페이지 스타일
┃       ┣━━ course.scss                   # 강의 목록 스타일
┃       ┣━━ courseDetail.scss             # 강의 상세 스타일
┃       ┣━━ auth.scss                     # 로그인 스타일
┃       ┣━━ mycourse.scss                 # 나의 강의 스타일
┃       ┣━━ mypage.scss                   # 마이페이지 스타일
┃       ┣━━ header.scss                   # 헤더 스타일
┃       ┗━━ footer.scss                   # 푸터 스타일
┃
┣━━ .env                                  # 환경 변수
┣━━ .gitignore                            # Git 제외 파일 설정
┣━━ eslint.config.mjs                     # ESLint 설정
┣━━ jsconfig.json                         # 경로 별칭 및 JavaScript 설정
┣━━ next.config.mjs                       # Next.js 환경 설정
┣━━ package.json                          # 프로젝트 의존성 및 실행 스크립트
┣━━ package-lock.json                     # 패키지 버전 고정
┗━━ README.md                             # 프로젝트 문서
```

---

# 📌 개발 상세

* Next.js(App Router) 기반 프로젝트 구조 설계 및 컴포넌트 개발
* NextAuth를 활용한 Google · Kakao · Naver 소셜 로그인 구현
* 교육과정 검색, 카테고리 필터 및 정렬 기능 구현
* 교육과정 상세 페이지 및 커리큘럼 UI 구현
* LocalStorage를 활용한 관심 강의 및 최근 본 강의 관리
* 마이페이지 및 회원정보 수정 기능 구현
* 반응형 UI를 적용하여 다양한 디바이스 환경 지원

---

# 👨‍💻 담당 페이지 및 기능 구현

## 🏠 메인 페이지 (Home)

* 메인 배너(Hero) 구현
* 교육과정 검색 기능 구현
* 추천 강의 및 신규 강의 목록 구현
* 카테고리 바로가기 UI 구현

---

## 📚 강의 (Courses)

* 전체 강의 목록 조회
* 교육과정 검색 기능 구현
* 카테고리 필터 기능 구현
* 강의 상세 페이지 구현
* 커리큘럼 및 교육기관 정보 출력

---

## ❤️ 나의 강의 (My Course)

- **교육과정 신청하기** 버튼을 통한 수강 중인 강의 등록 및 조회 (LocalStorage)
- **하트(♥) 버튼**을 통한 관심 강의 추가 및 삭제 (LocalStorage)
- **강의 살펴보기** 버튼을 통한 최근 본 강의 저장 및 조회 (LocalStorage)

---

## 👤 마이페이지 (My Page)

* 개인 정보 수정
* 공지사항
* 고객센터
* 로그아웃

---

## 🔐 로그인 및 온보딩

* Google · Kakao · Naver 소셜 로그인 구현
* 최초 로그인 사용자 온보딩 처리
* 로그인 상태 유지(Session 관리)

---

# 🔗 데이터 관리

* LocalStorage를 활용한 사용자 데이터 관리
* JSON 데이터를 활용한 강의 정보 관리
* NextAuth Session을 활용한 로그인 상태 관리

---

# 🛠 트러블 슈팅

## 🔐 소셜 로그인 후 온보딩 반복 실행 문제

### 문제 상황

소셜 로그인 이후 온보딩을 완료했음에도 로그인할 때마다 온보딩 화면이 다시 실행되는 문제가 발생하였습니다.

### 해결 방법

온보딩 완료 여부를 LocalStorage에 저장하고, 로그인 시 해당 값을 확인하여 최초 로그인 사용자만 온보딩을 진행하도록 개선하였습니다.

```javascript
const onboardingDone = localStorage.getItem("onboardingDone");

if (!onboardingDone) {
  router.push("/onboarding");
}
```

### 결과

* 최초 로그인 시에만 온보딩 실행
* 반복적인 온보딩 문제 해결
* 사용자 경험 향상

---

## ❤️ 관심 강의(LocalStorage) 중복 저장 문제

### 문제 상황

같은 강의를 여러 번 클릭하면 LocalStorage에 동일한 강의가 중복 저장되는 문제가 발생하였습니다.

### 해결 방법

기존 데이터를 확인한 후 동일한 강의가 존재하는지 검사하여 중복 저장을 방지하였습니다.

```javascript
const exists = likedCourses.some(
  (course) => course.id === selectedCourse.id
);

if (!exists) {
  likedCourses.push(selectedCourse);
}
```

### 결과

* 관심 강의 중복 저장 방지
* 데이터 무결성 향상
* 사용자 편의성 개선

---

## 🕒 최근 본 강의 중복 저장 문제

### 문제 상황

사용자가 같은 강의를 반복해서 조회하면 최근 본 강의 목록에 동일한 데이터가 계속 저장되는 문제가 발생하였습니다.

### 해결 방법

기존 데이터를 제거한 후 가장 앞에 다시 추가하고, 최대 10개의 데이터만 유지하도록 구현하였습니다.

```javascript
const recent = recentCourses.filter(
  (course) => course.id !== currentCourse.id
);

recent.unshift(currentCourse);

localStorage.setItem(
  "recentCourses",
  JSON.stringify(recent.slice(0, 10))
);
```

### 결과

* 최근 본 강의 중복 제거
* 최신 순 정렬 유지
* 불필요한 데이터 증가 방지

---

## 🔍 검색 및 필터 동기화 문제

### 문제 상황

검색어 입력 후 카테고리 필터를 변경하거나 정렬을 적용하면 검색 결과가 초기화되어 원하는 강의를 다시 검색해야 하는 문제가 발생하였습니다.

### 해결 방법

검색어, 카테고리, 정렬 조건을 각각 상태(State)로 관리하고 조건을 조합하여 필터링하도록 개선하였습니다.

### 결과

* 검색 조건 유지
* 필터 및 정렬 동시 적용
* 사용자 검색 편의성 향상
