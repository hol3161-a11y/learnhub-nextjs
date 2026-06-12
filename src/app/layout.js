// 전체 공통 레이아웃
// Header + Footer + children

import "@/styles/globals.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AuthProvider from "./components/AuthProvider";
import { Suspense } from "react";

export const metadata = {
  title: "Learn Hub",
  description: "교육 플랫폼 웹사이트",
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
