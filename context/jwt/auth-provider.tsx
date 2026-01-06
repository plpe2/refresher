"use client";
import { SetStateAction, useContext, useEffect, useState } from "react";
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

export function logout({
  setUser,
  setStatus,
}: {
  setUser: React.Dispatch<SetStateAction<UserTypes>>;
  setStatus: React.Dispatch<SetStateAction<boolean>>;
}) {
  localStorage.removeItem("token");
  setUser((prev) => ({ ...prev, user: null }));
  setStatus(false);
  window.location.href = "http://localhost:3000/";
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserTypes>({
    id: 0,
    name: "",
    age: 0,
    password: "",
  });
  const [isAuthenticated, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const LocalToken = localStorage.getItem("token");

    //Checking if Token is available
    if (!LocalToken) {
      // logout({ setData });
      return;
    }

    // console.log("Has Token"); If has token

    const decode = async () => {
      const callTokenVerifier = await getDecodedToken(LocalToken);
      if (!(callTokenVerifier?.status == 401)) {
        const {
          decoded: { id },
        } = callTokenVerifier;
        const userdataFetch = await fetch(
          `http://localhost:3000/api/v1/users/${id}`
        );
        const fetchedData = await userdataFetch.json();
        setUser(fetchedData);
        setStatus(true);
      } else {
        logout({ setUser, setStatus });
      }
    };
    decode();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        logout: () => logout({ setUser, setStatus }),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthProvider() {
  const context = useContext(AuthContext);
  if (!context) {
    Error("This should be used inside the children");
  }

  return context;
}
