"use client";

import React, { useEffect } from "react";
import { useAuthProvider } from "./jwt/auth-provider";
import { useRouter } from "next/navigation";

type AuthGuardProps = { children: React.ReactNode };

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, loading } = useAuthProvider()!;
  const router = useRouter();
  useEffect(() => {
    if (loading) {
      return;
    }

    if (!isAuthenticated) {
      alert("Not logged in");
      router.replace("/");
    }
  }, [isAuthenticated, loading]);
  return <>{children}</>;
}
