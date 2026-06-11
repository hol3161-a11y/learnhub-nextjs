// 전체 공통 레이아웃
// Header + Footer + children

import "@/styles/globals.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AuthProvider from "./components/AuthProvider";
import { Suspense } from "react";

export const metadata = {
  title: "LearnHub",
  description: "온라인 교육 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          <Header />
          <Suspense>
            {children}
          </Suspense>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
