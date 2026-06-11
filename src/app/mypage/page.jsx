// 마이페이지 메인
// 개인정보 수정

import React from "react";
import ProfileEdit from "../components/mypage/ProfileEdit";
import ProtectedRoute from "../components/ProtectedRoute";

function page() {
  return (
    <ProtectedRoute>
      <ProfileEdit />
    </ProtectedRoute>
  );
}

export default page;
