// 하단 푸터
'use client'

import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";

function Footer() {
  
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerLogo">
          <h2>
            <img src="/image/footer_icon.svg" alt="LearnHub 로고" />
            Learn<span>Hub</span>
          </h2>

          <p>
            배우고 성장하는 온라인 클래스 플랫폼 <br />
            나에게 맞는 강의를 쉽고 빠르게 찾아보세요.
          </p>
        </div>

        <div className="footerLink">
          <div className="footerMenu">
            <h3>서비스</h3>
            <Link
              href="/courses"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              강의
            </Link>

            <Link
              href="/courses"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              카테고리
            </Link>

            <Link
              href="/my-course"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              나의 강의
            </Link>

            <Link
              href="/mypage"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              마이페이지
            </Link>
          </div>

          <div className="footerMenu">
            <h3>고객지원</h3>
            <Link href="/mypage/notice">공지사항</Link>
            <Link href="/mypage/customer">고객센터</Link>
          </div>

          <div className="footerMenu">
            <h3>문의</h3>
            <p>
              <img src="/image/ic_footer-email.svg" /> support@learnhub.com
            </p>
            <p>
              <img src="/image/ic_footer-call.svg" />
              02-1234-5678
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">© 2026 LearnHub. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
