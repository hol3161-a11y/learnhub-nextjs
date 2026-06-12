"use client";

import Link from "next/link";
import "@/styles/mypage.scss";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

function Layout({ children }) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <section className="mypage">
      <div className="mypageInner">
        <aside className="mypageAside">
          <h2>마이페이지</h2>

          {!session && (
            <p className="mypageGuide">
              로그인 후 개인 정보 수정 및 학습 관리를 이용할 수 있습니다.
            </p>
          )}

          <nav className="mypageNav">
            {session && (
              <Link
                href="/mypage"
                className={pathname === "/mypage" ? "active" : ""}
              >
                <img
                  src={
                    pathname === "/mypage"
                      ? "/image/ic_mypage_active-person.svg"
                      : "/image/ic_mypage-person.svg"
                  }
                />{" "}
                개인 정보 수정
              </Link>
            )}

            <Link
              href="/mypage/notice"
              className={pathname === "/mypage/notice" ? "active" : ""}
            >
              <img
                src={
                  pathname === "/mypage/notice"
                    ? "/image/ic_mypage_active-bell.svg"
                    : "/image/ic_mypage-bell.svg"
                }
              />{" "}
              공지사항
            </Link>

            <Link
              href="/mypage/customer"
              className={pathname === "/mypage/customer" ? "active" : ""}
            >
              <img
                src={
                  pathname === "/mypage/customer"
                    ? "/image/ic_mypage_active-headset.svg"
                    : "/image/ic_mypage-headset.svg"
                }
              />{" "}
              고객센터
            </Link>

            {session && (
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  signOut({ callbackUrl: "/" });
                }}
              >
                <img src="/image/ic_mypage-logout.svg" />
                로그아웃
              </Link>
            )}
          </nav>
        </aside>

        <div className="mypageContent">{children}</div>
      </div>
    </section>
  );
}

export default Layout;