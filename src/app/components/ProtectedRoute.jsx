"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      alert("로그인 후 이용 가능합니다.");
      router.replace("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return null;
  }

  if (!session) {
    return null;
  }

  return children;
}

export default ProtectedRoute;