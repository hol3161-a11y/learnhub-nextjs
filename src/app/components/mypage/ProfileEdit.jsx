"use client";

import "@/styles/mypage.scss";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function ProfileEdit() {
  const { data: session } = useSession();

  const [profile, setProfile] = useState({
    education: "",
    status: "",
    currentJob: "",
    hopeJob: "",
    card: "",
    jobSystem: "",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem("userProfile", JSON.stringify(profile));

    alert("저장되었습니다.");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="profileEdit">
      <h2>개인 정보 수정</h2>

      <form className="profileForm" onSubmit={handleSave}>
        <div className="formRow">
          <label>이름</label>
          <input type="text" value={session?.user?.name || ""} readOnly />
        </div>

        {session?.user?.email && (
          <div className="formRow">
            <label>이메일</label>
            <input
              type="email"
              value={session.user.email}
              readOnly
            />
          </div>
        )}

        <div className="formRow">
          <label>학력</label>
          <select
            value={profile.education || ""}
            onChange={(e) =>
              setProfile({ ...profile, education: e.target.value })
            }
          >
            <option value="">선택해주세요.</option>
            <option value="중학교 졸업">중학교 졸업</option>
            <option value="고등학교 졸업">고등학교 졸업</option>
            <option value="(2·3년제) 대학">(2·3년제) 대학</option>
            <option value="(4년제) 대학교">(4년제) 대학교</option>
            <option value="(수료/졸업) 석사 이상">(수료/졸업) 석사 이상</option>
          </select>
        </div>

        <div className="formRow">
          <label>현재 상태</label>
          <select
            value={profile.status || ""}
            onChange={(e) => setProfile({ ...profile, status: e.target.value })}
          >
            <option value="">선택해주세요.</option>
            <option value="고등학생">고등학생</option>
            <option value="대학교 1~2학년">대학교 1~2학년</option>
            <option value="대학교 3~4학년">대학교 3~4학년</option>
            <option value="취업준비생">취업 준비생</option>
            <option value="직장인 0~3년 미만">직장인 0~3년 미만</option>
            <option value="직장인 3~5년 미만">직장인 3~5년 미만</option>
            <option value="해당 없음">해당 없음</option>
          </select>
        </div>

        <div className="formRow">
          <label>현재 직무</label>
          <input
            type="text"
            placeholder="현재 직무를 입력해주세요."
            value={profile.currentJob || ""}
            onChange={(e) =>
              setProfile({ ...profile, currentJob: e.target.value })
            }
          />
        </div>

        <div className="formRow">
          <label>희망 직무</label>
          <select
            value={profile.hopeJob || ""}
            onChange={(e) =>
              setProfile({ ...profile, hopeJob: e.target.value })
            }
          >
            <option value="">선택해주세요.</option>
            <option value="웹개발">웹개발</option>
            <option value="모바일">모바일</option>
            <option value="데이터·AI">데이터·AI</option>
            <option value="클라우드·보안">클라우드·보안</option>
            <option value="디자인·3D">디자인·3D</option>
            <option value="기획·마케팅">기획·마케팅</option>
          </select>
        </div>

        <div className="formRow">
          <label>내일배움카드</label>
          <select
            value={profile.card || ""}
            onChange={(e) => setProfile({ ...profile, card: e.target.value })}
          >
            <option value="">선택해주세요</option>
            <option value="내일배움카드를 가지고 있어요">
              내일배움카드를 가지고 있어요
            </option>
            <option value="내일배움카드 가지고 있지 않아요">
              내일배움카드를 가지고 있지 않아요
            </option>
          </select>
        </div>

        <div className="formRow">
          <label>국민취업제도</label>
          <select
            value={profile.jobSystem || ""}
            onChange={(e) =>
              setProfile({ ...profile, jobSystem: e.target.value })
            }
          >
            <option value="">선택해주세요</option>
            <option value="이용해본 경험이 있어요">
              이용해본 경험이 있어요
            </option>
            <option value="이용해본 경험이 없어요">
              이용해본 경험이 없어요
            </option>
          </select>
        </div>

        <button type="submit" className="saveBtn">
          저장하기
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;
