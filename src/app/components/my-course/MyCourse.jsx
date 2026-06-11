"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "@/styles/mycourse.scss";
import MyCourseCard from "./MyCourseCard";
import CourseTabs from "./CourseTabs";
import courses from "@/data/courses.json";

function MyCourse() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabFromUrl = searchParams.get("tab") || "learning";
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [activeTab, setActiveTab] = useState(tabFromUrl);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [learningIds, setLearningIds] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [recentIds, setRecentIds] = useState([]);

  useEffect(() => {
    setActiveTab(tabFromUrl);
    setCurrentPage(pageFromUrl);
  }, [tabFromUrl, pageFromUrl]);

  const handleLike = (id) => {
    const updatedLiked = likedIds.includes(id)
      ? likedIds.filter((likedId) => likedId !== id)
      : [...likedIds, id];

    setLikedIds(updatedLiked);
    localStorage.setItem("likedCourses", JSON.stringify(updatedLiked));
  };

  useEffect(() => {
    const savedLearning =
      JSON.parse(localStorage.getItem("learningCourses")) || [];

    const savedLiked = JSON.parse(localStorage.getItem("likedCourses")) || [];

    const savedRecent = JSON.parse(localStorage.getItem("recentCourses")) || [];

    setLearningIds(savedLearning);
    setLikedIds(savedLiked);
    setRecentIds(savedRecent);
  }, []);

  const likedCourses = courses.filter((course) => likedIds.includes(course.id));

  const learningCourses = courses.filter((course) =>
    learningIds.includes(course.id)
  );

  const recentCourses = [];

  recentIds.forEach((id) => {
    const course = courses.find((course) => course.id === id);

    if (course) {
      recentCourses.push(course);
    }
  });

  let filteredCourses = [];

  if (activeTab === "learning") {
    filteredCourses = learningCourses;
  } else if (activeTab === "liked") {
    filteredCourses = likedCourses;
  } else {
    filteredCourses = recentCourses;
  }

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  const pageGroupSize = 3;
  const currentGroup = Math.ceil(safeCurrentPage / pageGroupSize);
  const startPage = (currentGroup - 1) * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;

  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const changeTab = (tab) => {
    router.push(`/my-course?tab=${tab}&page=1`);
  };

  const movePage = (page) => {
    router.push(`/my-course?tab=${activeTab}&page=${page}`);

    setTimeout(() => {
      const element = document.getElementById("mycourse");

      if (element) {
        const offset = 100;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <section className="mycourse" id="mycourse">
      <div className="mycourseInner">
        <h2>나의 강의</h2>
        <p className="myCourseDesc">
          내가 수강 중인 강의, 찜한 강의, 최근 본 강의를
          <br />
          <span>한 곳에서 확인할 수 있어요.</span>
        </p>

        <CourseTabs
          activeTab={activeTab}
          setActiveTab={changeTab}
          learningCount={learningCourses.length}
          likedCount={likedCourses.length}
          recentCount={recentCourses.length}
        />

        <div className="courseArea">
          <div className="CourseList">
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <MyCourseCard
                  key={course.id}
                  course={course}
                  likedIds={likedIds}
                  handleLike={handleLike}
                />
              ))
            ) : (
              <div className="emptyState">
                <img
                  src={
                    activeTab === "learning"
                      ? "/image/ic_empty.svg"
                      : activeTab === "liked"
                        ? "/image/ic_heart.png"
                        : "/image/ic_clock.svg"
                  }
                  alt=""
                />

                <h3>
                  {activeTab === "learning" && "수강 중인 강의가 없습니다."}
                  {activeTab === "liked" && "찜한 강의가 없습니다."}
                  {activeTab === "recent" && "최근 본 강의가 없습니다."}
                </h3>

                <p>
                  {activeTab === "learning" &&
                    "관심 있는 강의를 신청해 보세요."}
                  {activeTab === "liked" && "마음에 드는 강의를 찜해 보세요."}
                  {activeTab === "recent" &&
                    "강의를 둘러보면 여기에 표시됩니다."}
                </p>

                <a href="/courses">강의 둘러보기</a>
              </div>
            )}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            {currentGroup > 1 && (
              <button
                className="arrowBtn"
                onClick={() => movePage(startPage - pageGroupSize)}
              >
                &lt;
              </button>
            )}

            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
              const page = startPage + index;

              return (
                <button
                  key={page}
                  className={safeCurrentPage === page ? "active" : ""}
                  onClick={() => movePage(page)}
                >
                  {page}
                </button>
              );
            })}

            {endPage < totalPages && (
              <button
                className="arrowBtn"
                onClick={() => movePage(endPage + 1)}
              >
                &gt;
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyCourse;