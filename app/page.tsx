"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { LogRegContainer } from "@/features/Login/Container";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const userData = useAuthProvider();
  const router = useRouter();

  const [isLogin, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (!userData.isLoading && userData.isAuthenticated) {
      router.replace("/");
    }
  }, [userData?.isLoading, userData.isAuthenticated, router]);

  if (userData.isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData.isAuthenticated) {
    return (
      <LogRegContainer
        loginDisplay={{ isLogin, setDisplay }}
      />
    )
  }

  return <>Dashboard</>
}