"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";

export default function Home() {
  const userData = useAuthProvider();
  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          textAlign: "center",
          padding: "10%",
          border: "1px solid ",
        }}
      >
        <h1>Dashboard {userData?.name}</h1>
      </div>
    </>
  );
}
