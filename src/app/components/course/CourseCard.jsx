"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function CourseCard({ course, handleLike, likedIds }) {
  const { data: session } = useSession();
  const router = useRouter();
  const isLiked = session && likedIds.includes(course.id);

  const handleLikeClick = () => {
    if (!session) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    handleLike(course.id);
  };

  return (
    <div className="courseItem">
      <div className="courseThumbnail">
        <img src={course.thumbnail} alt={course.title} />
        <span className={`category ${course.status}`}>{course.status}</span>
      </div>

      <div className="courseContent">
        <div className="courseTags">
          {course.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>

        <p className="courseCompany">{course.academy}</p>

        <div className="courseTitleWrap">
          <h3>{course.title}</h3>

          <button
            type="button"
            className="courseHeartBtn"
            onClick={handleLikeClick}
          >
            <img
              src={
                isLiked ? "/image/ic_heart_active.png" : "/image/ic_heart.png"
              }
              alt="찜하기"
            />
          </button>
        </div>

        <ul className="courseInfoList">
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

        <Link href={`/courses/${course.id}`} className="courseDetailBtn">
          강의 살펴보기
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
