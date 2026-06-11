"use client";

import "@/styles/header.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const router = useRouter();

  const [openCategory, setOpenCategory] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenCategory(false);
  };

  const handleProtectedMove = (path) => {
    closeMenu();

    if (!session) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    router.push(path);
  };

  return (
    <header className="header">
      <div className="inner">
        <h1>
          <img src="/image/footer_icon.svg" alt="LearnHub 로고" />

          <Link href="/" onClick={closeMenu}>
            Learn <b>Hub</b>
          </Link>
        </h1>

        <button
          type="button"
          className={`menuBtn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`menuBar ${menuOpen ? "active" : ""}`}>
          <nav className="nav">
            <Link href="/" onClick={closeMenu}>
              홈
            </Link>
            <Link href="/courses" onClick={closeMenu}>
              강의
            </Link>

            <div className={`categoryMenu ${openCategory ? "active" : ""}`}>
              <button
                type="button"
                className="categoryBtn"
                onClick={() => setOpenCategory(!openCategory)}
              >
                카테고리
                <img src="/image/ic_category.svg" alt="" />
              </button>

              <div className="dropdown">
                <Link href="/courses?category=프론트엔드" onClick={closeMenu}>
                  프론트엔드
                </Link>
                <Link href="/courses?category=백엔드" onClick={closeMenu}>
                  백엔드
                </Link>
                <Link href="/courses?category=AI·데이터" onClick={closeMenu}>
                  AI•데이터
                </Link>
                <Link href="/courses?category=디자인" onClick={closeMenu}>
                  디자인
                </Link>
                <Link href="/courses?category=모바일 개발" onClick={closeMenu}>
                  모바일 개발
                </Link>
              </div>
            </div>

            <button
              type="button"
              className="navBtn"
              onClick={() => handleProtectedMove("/my-course")}
            >
              나의 강의
            </button>

            <button
              type="button"
              className="navBtn"
              onClick={() => handleProtectedMove("/mypage")}
            >
              마이페이지
            </button>
          </nav>

          <div className="userMenu">
            {session ? (
              <button
                className="logoutBtn"
                onClick={() =>
                  signOut({
                    callbackUrl: "/login",
                  })
                }
              >
                로그아웃
              </button>
            ) : (
              <Link href="/login" className="login" onClick={closeMenu}>
                로그인
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
