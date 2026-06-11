"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

function CourseDetail({ course }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [likedIds, setLikedIds] = useState([]);
  const [learnIds, setLearnIds] = useState([]);
  const [recentIds, setRecentIds] = useState([]);
  const isLiked = session && likedIds.includes(course.id);

  useEffect(() => {
    window.scrollTo(0, 0);

    const savedLiked = JSON.parse(localStorage.getItem("likedCourses")) || [];
    const savedLearning =
      JSON.parse(localStorage.getItem("learningCourses")) || [];
    const savedRecent = JSON.parse(localStorage.getItem("recentCourses")) || [];

    setLikedIds(savedLiked);
    setLearnIds(savedLearning);
    setRecentIds(savedRecent);

    if (status === "authenticated" && session) {
      const updatedRecent = [
        course.id,
        ...savedRecent.filter((id) => id !== course.id),
      ].slice(0, 20);

      setRecentIds(updatedRecent);
      localStorage.setItem("recentCourses", JSON.stringify(updatedRecent));
    }
  }, [course.id, session, status]);

  const handleLike = (id) => {
    if (!session) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    const updatedLiked = likedIds.includes(id)
      ? likedIds.filter((likedId) => likedId !== id)
      : [...likedIds, id];

    setLikedIds(updatedLiked);
    localStorage.setItem("likedCourses", JSON.stringify(updatedLiked));
  };

  const handleLearning = (id) => {
    if (!session) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    const updatedLearning = learnIds.includes(id)
      ? learnIds
      : [...learnIds, id];

    setLearnIds(updatedLearning);
    localStorage.setItem("learningCourses", JSON.stringify(updatedLearning));
  };

  return (
    <section className="courseDetail">
      <div className="detailInner">
        <button className="backBtn" onClick={() => router.back()}>
          <img src="/image/ic_arrow-left.svg" alt="뒤로가기" />
          뒤로가기
        </button>

        <div className="detailTop">
          <div className="detailImg">
            <img src={course.thumbnail} alt={course.title} />
            <span>{course.status}</span>
          </div>

          <div className="detailInfo">
            <div className="detailTag">
              {course.tags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))}
            </div>

            <p className="detailcategory">{course.category}</p>

            <h3>{course.title}</h3>

            <p className="desc">{course.shortDesc}</p>

            <ul className="detailList">
              <li>
                <span>모집 마감일</span>
                <p>{course.deadline}</p>
              </li>

              <li>
                <span>수업 기간</span>
                <p>{course.period}</p>
              </li>

              <li>
                <span>수업 방식</span>
                <p>{course.type}</p>
              </li>

              <li>
                <span>교육비</span>
                <p>{course.price}</p>
              </li>
            </ul>

            <div className="btnWrap">
              <button
                type="button"
                className="applyBtn"
                onClick={() => {
                  handleLearning(course.id);

                  if (session) {
                    window.open(course.courseLink, "_blank");
                  }
                }}
              >
                교육과정 신청하기
              </button>

              <button
                type="button"
                className="detailheartBtn"
                onClick={() => handleLike(course.id)}
              >
                <img
                  src={
                    isLiked
                      ? "/image/ic_heart_active.png"
                      : "/image/ic_red-heart.svg"
                  }
                  alt="찜하기"
                />
                찜하기
              </button>
            </div>
          </div>
        </div>

        <div className="detailcontent">
          <div className="detailLeft">
            <div className="education">
              <h3>과정 소개</h3>

              <p>{course.intro}</p>

              <h3>이런 분들께 추천해요</h3>

              <ul>
                {course.recommendFor.map((item) => (
                  <li key={item}>
                    <img src="/image/ic_check.svg" alt="" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="learnSection">
              <h3>배울 수 있는 내용</h3>

              <div className="learnGrid">
                {course.curriculum.map((item, idx) => (
                  <div className="learnCard" key={idx}>
                    <img src={item.icon} alt="" />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="detailRight">
            <div className="sideCard">
              <h3>교육 기관</h3>

              <div className="agencyBox">
                <img src="/image/ic_building.svg" alt="" />

                <div>
                  <h4>{course.academyInfo.name}</h4>
                  <p>{course.academyInfo.desc}</p>
                </div>
              </div>

              <Link
                href={course.academyInfo.link}
                target="_blank"
                className="agencyBtn"
              >
                기관 홈페이지 바로가기
              </Link>
            </div>

            <div className="sideCard">
              <h3>수강 정보</h3>

              <ul className="sideInfoList">
                <li>
                  <span>모집 마감일</span>
                  <b>{course.deadline}</b>
                </li>

                <li>
                  <span>수업 기간</span>
                  <b>{course.period}</b>
                </li>

                <li>
                  <span>수업 방식</span>
                  <b>{course.type}</b>
                </li>

                <li>
                  <span>교육비</span>
                  <b>{course.price}</b>
                </li>

                <li>
                  <span>정원</span>
                  <b>{course.capacity}</b>
                </li>

                <li>
                  <span>현재 신청자</span>
                  <b>{course.currentApplicants}</b>
                </li>
              </ul>
            </div>

            <div className="sideCard">
              <h3>관련 태그</h3>

              <div className="sideTags">
                {course.relatedTags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;
