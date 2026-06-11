import React from "react";

function CourseFilter({
  filters,
  searchParams,
  router,
  filterOpen,
  setFilterOpen,
}) {
  const handleCheck = (group, value) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentValues = params.get(group) ? params.get(group).split(",") : [];

    const isChecked = currentValues.includes(value);

    const nextValues = isChecked
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    if (nextValues.length > 0) {
      params.set(group, nextValues.join(","));
    } else {
      params.delete(group);
    }

    params.set("page", "1");

    router.push(`/courses?${params.toString()}`);
  };

  const resetFilter = () => {
    router.push("/courses?page=1");
    setFilterOpen(false);
  };

  return (
    <aside className={`filter ${filterOpen ? "active" : ""}`}>
      <div className="filterHandle"></div>

      <div className="mobileFilterTop">
        <h3>과정 필터</h3>
        <button type="button" onClick={() => setFilterOpen(false)}>
          닫기
        </button>
      </div>

      <strong>ALL</strong>

      <div className="filterTop">
        <h3>필터</h3>
        <button type="button" onClick={resetFilter}>
          초기화
          <img src="/image/ic_reset.svg" alt="" />
        </button>
      </div>

      <div className="filterGroup">
        <h4>카테고리</h4>

        {["프론트엔드", "백엔드", "AI·데이터", "디자인", "모바일 개발"].map(
          (category) => (
            <label className="checkBox" key={category}>
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleCheck("category", category)}
              />
              {category}
            </label>
          ),
        )}
      </div>

      <div className="filterGroup">
        <h4>교육형태</h4>

        {["온라인", "오프라인"].map((type) => (
          <label className="checkBox" key={type}>
            <input
              type="checkbox"
              checked={filters.type.includes(type)}
              onChange={() => handleCheck("type", type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="filterGroup">
        <h4>가격</h4>

        {["무료", "유료"].map((price) => (
          <label className="checkBox" key={price}>
            <input
              type="checkbox"
              checked={filters.price.includes(price)}
              onChange={() => handleCheck("price", price)}
            />
            {price}
          </label>
        ))}
      </div>

      <div className="filterGroup">
        <h4>상태</h4>

        <label className="checkBox">
          <input
            type="checkbox"
            checked={filters.status.includes("모집중")}
            onChange={() => handleCheck("status", "모집중")}
          />
          모집중
        </label>

        <label className="checkBox">
          <input
            type="checkbox"
            checked={filters.status.includes("모집마감")}
            onChange={() => handleCheck("status", "모집마감")}
          />
          모집마감
        </label>
      </div>
        <div className="filterBottom">
          <button type="button" className="resetBtn" onClick={resetFilter}>
            초기화
          </button>

          <button
            type="button"
            className="resultBtn"
            onClick={() => setFilterOpen(false)}
          >
            결과보기
          </button>
        </div>
    </aside>
  );
}

export default CourseFilter;
