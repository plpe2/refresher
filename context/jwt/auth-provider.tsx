"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth-context";

type Props = {
  children: React.ReactNode;
};

async function getDecodedToken(token: string) {
  const checkToken = await fetch(`http://localhost:3000/api/v1/auth`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token: token }),
  });

  return await checkToken.json();
}

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const LocalToken = localStorage.getItem("token");

    if (!LocalToken) {
      console.log("No Token");
      return;
    }

    console.log("Has Token");

    const decode = async () => {
      const callTokenVerifier = await getDecodedToken(LocalToken);
      console.log(callTokenVerifier);
    };
    decode();
  }, []);

  return (
    <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>
  );
}

export function useAuthProvider() {
  const context = useContext(AuthContext);
  if (!context) {
    Error("This should be used inside the children");
  }

  return context;
}
