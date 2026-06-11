import React from "react";

function CourseTabs({
  activeTab,
  setActiveTab,
  learningCount,
  likedCount,
  recentCount,
}) {
  return (
    <div className="courseTab">
      <button
        className={activeTab === "learning" ? "active" : ""}
        onClick={() => setActiveTab("learning")}
      >
        수강 중<span>{learningCount}</span>
      </button>
      <button
        className={activeTab === "liked" ? "active" : ""}
        onClick={() => setActiveTab("liked")}
      >
        찜한 강의
        <span>{likedCount}</span>
      </button>
      <button className={activeTab === "recent" ? "active" : ""} onClick={()=> setActiveTab("recent")}>
        최근 본 강의
        <span>{recentCount}</span>
      </button>
    </div>
  );
}

export default CourseTabs;
