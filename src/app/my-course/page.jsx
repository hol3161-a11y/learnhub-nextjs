// 나의 강의
// 수강한 강의 + 찜한 강의 + 최근 본 강의

import React from "react";
import MyCourse from "../components/my-course/MyCourse";
import ProtectedRoute from "../components/ProtectedRoute";

function page() {
  return (
    <ProtectedRoute>
      <MyCourse />
    </ProtectedRoute>
  );
}

export default page;
