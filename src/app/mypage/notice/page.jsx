// 공지사항
"use client";
import React, { useState } from "react";
import "@/styles/mypage.scss";
import notices from "@/data/NoticePage.json";

function NoticePage() {
  const [openIndex, setOpenIndex] = useState([]);

  return (
    <div className="noticePage">
      <h2>공지사항</h2>
      <p className="noticeDesc">
        LearnHub의 새로운 소식과 안내사항을 확인하세요.
      </p>

      <div className="noticeList">
        {notices.map((notice, i) => (
          <div className="noticeItem" key={i}>
            <button
              className="noticeTop"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="noticeLeft">
                <span>공지</span>
                <strong>{notice.title}</strong>
              </div>
              <div className="noticeRight">
                <p>{notice.date}</p>
                <img
                  src="/image/ic_category.svg"
                  className={openIndex === i ? "arrow up" : "arrow"}
                />
              </div>
            </button>
            {openIndex === i && (
              <div className="noticeContent">
                <p>{notice.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticePage;
