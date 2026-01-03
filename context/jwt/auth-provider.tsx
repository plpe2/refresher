"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth-context";
import { UserTypes } from "@/types/Users";

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
  const [userData, setData] = useState<UserTypes>({
    id: 0,
    name: "",
    age: 0,
    password: "",
  });

  useEffect(() => {
    const LocalToken = localStorage.getItem("token");

    if (!LocalToken) {
      console.log("No Token");
      return;
    }

    console.log("Has Token");

    const decode = async () => {
      const callTokenVerifier = await getDecodedToken(LocalToken);
      const {
        decoded: { id },
      } = callTokenVerifier;
      const userdataFetch = await fetch(
        `http://localhost:3000/api/v1/users/${id}`
      );

      setData(await userdataFetch.json());
    };
    decode();
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
}

export function useAuthProvider() {
  const context = useContext(AuthContext);
  if (!context) {
    Error("This should be used inside the children");
  }

  return context;
}
