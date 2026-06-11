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

function NewCourses() {
  const [likedIds, setLikedIds] = useState([]);

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

  const newCourses = [...courses]
    .sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
    .slice(0, 4);

  return (
    <section className="newCourses">
      <div className="title">
        <div className="titleLeft">
          <p>NEW</p>
          <h3>신규 강의</h3>
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
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
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
        className="newCourseSwiper"
      >
        {newCourses.map((course) => (
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

export default NewCourses;