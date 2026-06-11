"use client";
import Link from "next/link";

function MyCourseCard({ course, likedIds, handleLike }) {
  return (
    <div className="mycourseCard">
      <div className="courseImg">
        <img src={course.thumbnail} alt={course.title} />
        <span className="category">{course.category}</span>
      </div>

      <div className="courseInfo">
        <h3>{course.title}</h3>
        <p className="academy">{course.academy}</p>

        <div className="courseMeta">
          <div className="metaLeft">
            <span>
              <img
                src={
                  course.type === "온라인"
                    ? "/image/ic_online.svg"
                    : "/image/ic_offline.svg"
                }
              />
              {course.type}
            </span>
            <span>
              <img src="/image/ic_clock.svg" />
              {course.period}
            </span>
          </div>

          <button className="heartBtn" onClick={() => handleLike(course.id)}>
            <img
              src={
                likedIds.includes(course.id) ? "/image/ic_heart_active.png" : "/image/ic_heart.png"
              }
              alt="찜하기"
            />
          </button>
        </div>

        <Link href={`/courses/${course.id}`} className="detailBtn">
          강의 살펴보기
        </Link>
      </div>
    </div>
  );
}

export default MyCourseCard;
