// 메인 비주얼
"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "@/styles/home.scss";
import { useRouter } from "next/navigation";

function Hero() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    router.push(`/courses?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="hero">
      <div className="heroinner">
        <div className="heroLeft">
          <h1>
            당신의 성장을 위한 <br />
            최고의 <span>교육과정</span>을 찾아보세요
          </h1>
          <h3>
            국비지원부터 온라인 강의까지, <br />
            다양한 교육과정을 한 곳에서 검색하고 비교하세요.
          </h3>

          <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{
              display: "flex",
              alignItems: "center",

              width: "500px",
              maxWidth: "100%",

              "@media (max-width:1024px)": {
                width: "83%",
              },

              "@media (max-width:900px)": {
                width: "91%",
              },

              "@media (max-width:768px)": {
                width: "90%",
              },

              "@media (max-width:480px)": {
                width: "100%",
              },

              height: 50,

              border: "1px solid #e5e5e5",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "none",
            }}
          >
            <InputBase
              sx={{
                ml: {
                  xs: 1.5,
                  md: 2,
                },

                flex: 1,
                minWidth: 0,

                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "15px",
                },
              }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="어떤 교육과정을 찾고 계신가요?"
              inputProps={{
                "aria-label": "교육 검색",
              }}
            />

            <IconButton
              type="submit"
              aria-label="search"
              sx={{
                width: {
                  xs: 48,
                  sm: 52,
                  md: 56,
                },

                height: "100%",

                borderRadius: 0,
                background: "#d9001b",
                color: "#fff",

                "&:hover": {
                  background: "#b80017",
                },
              }}
            >
              <SearchIcon
                sx={{
                  fontSize: {
                    xs: 22,
                    md: 24,
                  },
                }}
              />
            </IconButton>
          </Paper>
          <div className="searchTag">
            <p>#React</p>
            <p>#Next.js</p>
            <p>#국비과정</p>
            <p>#부트캠프</p>
            <p>#AI</p>
            <p>#Figma</p>
          </div>
        </div>
        <div className="heroRight">
          <img src="./image/image_hero.png" />
        </div>
      </div>

      <div className="herobox">
        <div className="box">
          <img src="./image/ic_education.svg" />
          <div className="boxText">
            <b>다양한 교육과정</b>
            <p>
              <span>국비지원, 온라인, 오프라인</span>
              <span>다양한 과정 검색</span>
            </p>
          </div>
        </div>
        <div className="box">
          <img src="./image/ic_search.svg" />
          <div className="boxText">
            <b>정확한 필터링</b>
            <p>
              <span>원하는 조건으로</span>
              <span>정확하게 검색</span>
            </p>
          </div>
        </div>
        <div className="box">
          <img src="./image/ic_line-up.svg" />
          <div className="boxText">
            <b>비교하기</b>
            <p>
              <span>여러 교육과정을</span>
              <span>한눈에 비교</span>
            </p>
          </div>
        </div>
        <div className="box">
          <img src="./image/ic_heart.svg" />
          <div className="boxText">
            <b>관심과정 저장</b>
            <p>
              <span>찜한 교육과정을</span>
              <span>저장하고 관리</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
