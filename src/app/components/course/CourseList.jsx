"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";
import courses from "@/data/courses.json";

function CourseList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const keywordFromUrl = searchParams.get("keyword") || "";
  const categoryFromUrl = searchParams.get("category") || "";
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [filterOpen, setFilterOpen] = useState(false);

  const getArrayParam = (key) => {
    const value = searchParams.get(key);
    return value ? value.split(",") : [];
  };

  const filters = {
    category: getArrayParam("category"),
    type: getArrayParam("type"),
    price: getArrayParam("price"),
    status: getArrayParam("status"),
  };

  const [searchText, setSearchText] = useState(keywordFromUrl);
  const [submittedKeyword, setSubmittedKeyword] = useState(keywordFromUrl);
  const [likedIds, setLikedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    const savedLiked = JSON.parse(localStorage.getItem("likedCourses")) || [];
    setLikedIds(savedLiked);
  }, []);

  useEffect(() => {
    setSearchText(keywordFromUrl);
    setSubmittedKeyword(keywordFromUrl);
    setCurrentPage(pageFromUrl);
  }, [keywordFromUrl, categoryFromUrl, pageFromUrl]);

  const handleLike = (id) => {
    const updatedLiked = likedIds.includes(id)
      ? likedIds.filter((likedId) => likedId !== id)
      : [...likedIds, id];

    setLikedIds(updatedLiked);
    localStorage.setItem("likedCourses", JSON.stringify(updatedLiked));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = searchText.trim();

    if (keyword) {
      router.push(`/courses?keyword=${encodeURIComponent(keyword)}&page=1`);
    } else {
      router.push("/courses?page=1");
    }
  };

  const filteredCourses = courses.filter((course) => {
    const keyword = submittedKeyword.toLowerCase();

    const matchKeyword =
      !submittedKeyword ||
      course.title.toLowerCase().includes(keyword) ||
      course.category.toLowerCase().includes(keyword) ||
      course.academy.toLowerCase().includes(keyword) ||
      course.tags.some((tag) => tag.toLowerCase().includes(keyword));

    const matchCategory =
      filters.category.length === 0 ||
      filters.category.includes(course.category);

    const matchType =
      filters.type.length === 0 ||
      filters.type.some((type) => {
        if (type === "온라인") return course.type === "온라인";
        if (type === "오프라인") return course.type.includes("오프라인");
        return false;
      });

    const matchPrice =
      filters.price.length === 0 ||
      filters.price.some((price) => {
        if (price === "무료") {
          return course.price === "무료" || course.price === "전액무료";
        }

        if (price === "유료") {
          return course.price !== "무료" && course.price !== "전액무료";
        }

        return false;
      });

    const matchStatus =
      filters.status.length === 0 || filters.status.includes(course.status);

    return (
      matchKeyword && matchCategory && matchType && matchPrice && matchStatus
    );
  });

  const itemsPerPage = 6;

  const sortedCourses = [...filteredCourses].sort(
    (a, b) => new Date(b.deadline) - new Date(a.deadline),
  );

  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  const pageGroupSize = 5;
  const currentGroup = Math.ceil(safeCurrentPage / pageGroupSize);
  const startPage = (currentGroup - 1) * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const startIndex = (safeCurrentPage - 1) * itemsPerPage;

  const currentCourses = sortedCourses.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const movePage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);

    router.push(`/courses?${params.toString()}`);

    setTimeout(() => {
      const element = document.getElementById("course");

      if (element) {
        const offset = 100;

        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <section className="course" id="course">
      <div className="courseInner">
        {filterOpen && (
          <div
            className="filterOverlay"
            onClick={() => setFilterOpen(false)}
          ></div>
        )}

        <CourseFilter
          filters={filters}
          searchParams={searchParams}
          router={router}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
        />

        <div className="coursecontent">
          <div className="courseResultTop">
            <div className="resultTitle">
              {submittedKeyword ? (
                <h2>검색 결과 - {submittedKeyword}</h2>
              ) : filters.category.length > 0 ? (
                <h2>카테고리 - {filters.category.join(", ")}</h2>
              ) : (
                <h2>전체 강의</h2>
              )}

              <p>총 {sortedCourses.length}개의 결과</p>
            </div>

            <form className="resultSearch" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="예) 프론트엔드, React, 부트캠프"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button type="submit">
                <img src="/image/ic_search.svg" alt="검색" />
              </button>
            </form>
          </div>

          <div className="allSrchBtn">
            <button type="button" onClick={() => setFilterOpen(true)}>
              <img src="/image/ic_filter.svg" alt="필터" /> 필터
            </button>
          </div>

          {currentCourses.length > 0 ? (
            <>
              <div className="courseGrid">
                {currentCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    likedIds={likedIds}
                    handleLike={handleLike}
                  />
                ))}
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

                  {Array.from(
                    { length: endPage - startPage + 1 },
                    (_, index) => {
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
                    },
                  )}

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
            </>
          ) : (
            <div className="emptyResult">
              <h3>검색 결과가 없습니다.</h3>
              <p>
                다른 검색어를 입력하거나
                <br />
                카테고리를 변경해 보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CourseList;
