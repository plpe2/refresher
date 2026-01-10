"use client";

import React, { useEffect } from "react";
import { useAuthProvider } from "./jwt/auth-provider";
import { useRouter } from "next/navigation";

type AuthGuardProps = { children: React.ReactNode };

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuthProvider()!;
  const router = useRouter();
  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated && !isLoading) {
      router.replace("/");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <div
        style={{
          border: "1px solid black",
          width: "10vh",
          height: "10vh",
          borderRadius: "50%",
          position: "relative",
          textAlign: "center",
          left: "50%",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }
  return <>{children}</>;
}
