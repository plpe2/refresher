"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth-context";
import { UserTypes } from "@/types/Users";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [userData, setData] = useState<UserTypes>({
    id: 1,
    name: "Philip Villanueva",
    age: 23,
    password: "12345",
  });

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const LocalToken = localStorage.getItem("token");
    if (!LocalToken) {
      console.log("hello");
    } else {
      console.log("hi");
    }
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
