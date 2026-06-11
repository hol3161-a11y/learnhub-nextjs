"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "@/styles/auth.scss";
import { signIn } from "next-auth/react";

function LoginButton() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [recentLogin, setRecentLogin] = useState("");

  const [onboarding, setOnboarding] = useState({
    education: "",
    status: "",
    currentJob: "",
    hopeJob: "",
    card: "",
    jobSystem: "",
    agreeAge: false,
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  useEffect(() => {
    const savedLogin = localStorage.getItem("recentLogin");

    if (savedLogin) {
      setRecentLogin(savedLogin);
    }
  }, []);

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");

    if (searchParams.get("onboarding") === "true" && !savedProfile) {
      setStep(1);
      return;
    }

    setStep(0);
  }, [searchParams]);

  const isStep1Valid =
    onboarding.education &&
    onboarding.status &&
    onboarding.currentJob &&
    onboarding.hopeJob;

  const isStep2Valid =
    onboarding.card &&
    onboarding.jobSystem &&
    onboarding.agreeAge &&
    onboarding.agreeTerms &&
    onboarding.agreePrivacy;

  const handleAllAgree = (e) => {
    const checked = e.target.checked;

    setOnboarding({
      ...onboarding,
      agreeAge: checked,
      agreeTerms: checked,
      agreePrivacy: checked,
      agreeMarketing: checked,
    });
  };

  function handleLogin(provider, label) {
    const savedProfile = localStorage.getItem("userProfile");

    if (savedProfile) {
      localStorage.removeItem("pendingLogin");
      localStorage.setItem("recentLogin", label);

      signIn(provider, {
        callbackUrl: "/",
      });

      return;
    }

    localStorage.setItem("pendingLogin", label);

    signIn(provider, {
      callbackUrl: "/login?onboarding=true",
    });
  }

  return (
    <section className="Login">
      <div className="loginBox">
        <div className="loginText">
          <h2>
            나에게 맞는 강의를 <br />
            더 쉽게 찾아보세요.
          </h2>

          <p>
            관심 강의 저장부터 맞춤 추천까지
            <br />
            Learn<span>Hub</span>에서 간편하게 시작할 수 있어요.
          </p>

          <img src="/image/image_login.png" alt="로그인 이미지" />
        </div>

        <div className="loginBtn">
          <h2>로그인</h2>

          {recentLogin && (
            <p className="recentLoginText">
              최근 <strong>{recentLogin}</strong> 계정으로 로그인하셨습니다.
            </p>
          )}

          <button
            type="button"
            className="googleBtn"
            onClick={() => handleLogin("google", "구글")}
          >
            <img src="/image/ic_google.svg" alt="" />
            구글로 로그인
          </button>

          <button
            type="button"
            className="naverBtn"
            onClick={() => handleLogin("naver", "네이버")}
          >
            <img src="/image/ic_naver.svg" alt="" />
            네이버로 로그인
          </button>

          <button
            type="button"
            className="kakaoBtn"
            onClick={() => handleLogin("kakao", "카카오")}
          >
            <img src="/image/ic_kakao.svg" alt="" />
            카카오로 로그인
          </button>
        </div>
      </div>

      {step > 0 && (
        <div className="onboardingOverlay">
          <div className="onboardingModal">
            <button
              type="button"
              className="closeBtn"
              onClick={() => setStep(0)}
            >
              ×
            </button>

            <h2>
              Learn<span>Hub</span>
            </h2>

            {step === 1 && (
              <>
                <div className="progress">
                  <span className="step1"></span>
                </div>

                <div className="formGroup">
                  <h3>학력 및 전공</h3>

                  <div className="radioGrid">
                    <label>
                      <input
                        type="radio"
                        name="edu"
                        checked={onboarding.education === "중학교 졸업"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            education: "중학교 졸업",
                          })
                        }
                      />
                      중학교 졸업
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="edu"
                        checked={onboarding.education === "고등학교 졸업"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            education: "고등학교 졸업",
                          })
                        }
                      />
                      고등학교 졸업
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="edu"
                        checked={onboarding.education === "(2·3년제) 대학"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            education: "(2·3년제) 대학",
                          })
                        }
                      />
                      (2·3년제) 대학
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="edu"
                        checked={onboarding.education === "(4년제) 대학교"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            education: "(4년제) 대학교",
                          })
                        }
                      />
                      (4년제) 대학교
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="edu"
                        checked={
                          onboarding.education === "(수료/졸업) 석사 이상"
                        }
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            education: "(수료/졸업) 석사 이상",
                          })
                        }
                      />
                      (수료/졸업) 석사 이상
                    </label>
                  </div>
                </div>

                <div className="formGroup">
                  <h3>현재 상태</h3>

                  <div className="radioGrid">
                    <label>
                      <input
                        type="radio"
                        name="status"
                        checked={onboarding.status === "고등학생"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            status: "고등학생",
                          })
                        }
                      />
                      고등학생
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="status"
                        checked={onboarding.status === "대학교 1~2학년"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            status: "대학교 1~2학년",
                          })
                        }
                      />
                      대학교 1~2학년
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="status"
                        checked={onboarding.status === "대학교 3~4학년"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            status: "대학교 3~4학년",
                          })
                        }
                      />
                      대학교 3~4학년
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="status"
                        checked={onboarding.status === "취업준비생"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            status: "취업준비생",
                          })
                        }
                      />
                      취업 준비생
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="status"
                        checked={onboarding.status === "직장인 0~3년 미만"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            status: "직장인 0~3년 미만",
                          })
                        }
                      />
                      직장인 0~3년 미만
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="status"
                        checked={onboarding.status === "직장인 3~5년 미만"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            status: "직장인 3~5년 미만",
                          })
                        }
                      />
                      직장인 3~5년 미만
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="status"
                        checked={onboarding.status === "해당 없음"}
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            status: "해당 없음",
                          })
                        }
                      />
                      해당 없음
                    </label>
                  </div>
                </div>

                <div className="formGroup">
                  <h3>현재 직무</h3>
                  <input
                    className="textInput"
                    placeholder="현재 직무를 입력해 주세요."
                    value={onboarding.currentJob}
                    onChange={(e) =>
                      setOnboarding({
                        ...onboarding,
                        currentJob: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="formGroup">
                  <h3>희망 직무</h3>

                  <div className="tagList">
                    {[
                      "웹개발",
                      "모바일",
                      "데이터·AI",
                      "클라우드·보안",
                      "디자인·3D",
                      "기획·마케팅",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={onboarding.hopeJob === item ? "active" : ""}
                        onClick={() =>
                          setOnboarding({
                            ...onboarding,
                            hopeJob: item,
                          })
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="modalBtns">
                  <button type="button" onClick={() => setStep(0)}>
                    이전
                  </button>

                  <button
                    type="button"
                    className="nextBtn"
                    disabled={!isStep1Valid}
                    onClick={() => setStep(2)}
                  >
                    다음
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="progress">
                  <span className="step2"></span>
                </div>

                <div className="formGroup">
                  <h3>내일배움카드</h3>

                  <div className="radioColumn">
                    <label>
                      <input
                        type="radio"
                        name="card"
                        checked={
                          onboarding.card === "내일배움카드를 가지고 있어요"
                        }
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            card: "내일배움카드를 가지고 있어요",
                          })
                        }
                      />
                      내일배움카드를 가지고 있어요
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="card"
                        checked={
                          onboarding.card === "내일배움카드 가지고 있지 않아요"
                        }
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            card: "내일배움카드 가지고 있지 않아요",
                          })
                        }
                      />
                      내일배움카드를 가지고 있지 않아요
                    </label>
                  </div>
                </div>

                <div className="formGroup">
                  <h3>국민취업제도</h3>

                  <div className="radioColumn">
                    <label>
                      <input
                        type="radio"
                        name="job"
                        checked={
                          onboarding.jobSystem === "이용해본 경험이 있어요"
                        }
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            jobSystem: "이용해본 경험이 있어요",
                          })
                        }
                      />
                      이용해본 경험이 있어요
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="job"
                        checked={
                          onboarding.jobSystem === "이용해본 경험이 없어요"
                        }
                        onChange={() =>
                          setOnboarding({
                            ...onboarding,
                            jobSystem: "이용해본 경험이 없어요",
                          })
                        }
                      />
                      이용해본 경험이 없어요
                    </label>
                  </div>
                </div>

                <div className="agreeBox">
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        onboarding.agreeAge &&
                        onboarding.agreeTerms &&
                        onboarding.agreePrivacy &&
                        onboarding.agreeMarketing
                      }
                      onChange={handleAllAgree}
                    />
                    아래의 약관에 모두 동의합니다
                  </label>

                  <hr />

                  <label>
                    <input
                      type="checkbox"
                      checked={onboarding.agreeAge}
                      onChange={(e) =>
                        setOnboarding({
                          ...onboarding,
                          agreeAge: e.target.checked,
                        })
                      }
                    />
                    <b>[필수]</b> 만 14세 이상
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      checked={onboarding.agreeTerms}
                      onChange={(e) =>
                        setOnboarding({
                          ...onboarding,
                          agreeTerms: e.target.checked,
                        })
                      }
                    />
                    <b>[필수]</b> 서비스 약관 동의
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      checked={onboarding.agreePrivacy}
                      onChange={(e) =>
                        setOnboarding({
                          ...onboarding,
                          agreePrivacy: e.target.checked,
                        })
                      }
                    />
                    <b>[필수]</b> 개인정보처리방침 및 제3자 제공 동의
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      checked={onboarding.agreeMarketing}
                      onChange={(e) =>
                        setOnboarding({
                          ...onboarding,
                          agreeMarketing: e.target.checked,
                        })
                      }
                    />
                    <span>[선택]</span> 마케팅 및 광고성 정보 수신 동의
                  </label>
                </div>

                <div className="modalBtns">
                  <button type="button" onClick={() => setStep(1)}>
                    이전
                  </button>

                  <button
                    type="button"
                    className="completeBtn"
                    disabled={!isStep2Valid}
                    onClick={() => {
                      const pendingLogin = localStorage.getItem("pendingLogin");

                      localStorage.setItem(
                        "userProfile",
                        JSON.stringify(onboarding)
                      );

                      if (pendingLogin) {
                        localStorage.setItem("recentLogin", pendingLogin);
                        localStorage.removeItem("pendingLogin");
                      }

                      router.push("/");
                    }}
                  >
                    회원가입 완료
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default LoginButton;