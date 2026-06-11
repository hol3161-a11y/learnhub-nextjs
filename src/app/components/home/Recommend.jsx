"use client";

import React, { useEffect, useState } from "react";
import "@/styles/home.scss";
import "@/styles/course.scss";

import CourseCard from "../course/CourseCard";
import courses from "@/data/courses.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Recommend() {
  const [likedIds, setLikedIds] = useState([]);

  const recommendCourses = [
    ...courses
      .filter(
        (course) =>
          course.category === "프론트엔드" && course.status === "모집중",
      )
      .slice(0, 4),

    ...courses
      .filter(
        (course) => course.category === "백엔드" && course.status === "모집중",
      )
      .slice(0, 4),

    ...courses
      .filter(
        (course) =>
          course.category === "AI·데이터" && course.status === "모집중",
      )
      .slice(0, 4),

    ...courses
      .filter(
        (course) =>
          course.category === "모바일 개발" && course.status === "모집중",
      )
      .slice(0, 2),

    ...courses
      .filter(
        (course) => course.category === "디자인" && course.status === "모집중",
      )
      .slice(0, 2),
  ];

  useEffect(() => {
    const savedLiked = JSON.parse(localStorage.getItem("likedCourses")) || [];

    setLikedIds(savedLiked);
  }, []);

  const handleLike = (id) => {
    const updatedLiked = likedIds.includes(id)
      ? likedIds.filter((likedId) => likedId !== id)
      : [...likedIds, id];

    setLikedIds(updatedLiked);
    localStorage.setItem("likedCourses", JSON.stringify(updatedLiked));
  };

  return (
    <section className="RecommendedCourses">
      <div className="title">
        <div className="titleLeft">
          <p>BEST</p>
          <h3>추천 강의</h3>
        </div>

        <a href="/courses">
          더보기
          <img src="/image/ic_arrow.svg" alt="" />
        </a>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{
          type: "progressbar",
        }}
        slidesPerView={1.2}
        slidesPerGroup={1}
        spaceBetween={16}
        breakpoints={{
          480: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 24,
          },
        }}
        className="recommendSwiper"
      >
        {recommendCourses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard
              course={course}
              likedIds={likedIds}
              handleLike={handleLike}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Recommend;
