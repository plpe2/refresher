"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { LogRegContainer } from "@/features/Login/Container";
import { useState } from "react";

export default function Home() {
  const userData = useAuthProvider();
  const [isLogin, setDisplay] = useState<boolean>(false);

  if (!userData?.isAuthenticated) {
    return <LogRegContainer loginDisplay={{ isLogin, setDisplay }} />
  }

  return (
    <>
      <p>Dashboard</p>
    </>
  );
}
