"use client";
import { LoginFields } from "@/sections/Login/Login";
import { RegisterFields } from "@/sections/Login/Register";
import { SetStateAction, useState } from "react";

const LogRegContainer = ({
  isShown,
  setShown,
}: {
  isShown: boolean;
  setShown: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      style={{
        backgroundColor: isShown ? "green" : "teal",
        width: "30%",
        textAlign: "center",
        padding: "10px",
        display: "block",
        color: "white",
      }}
    >
      {!isShown ? (
        <>
          <h2>Login</h2>
          <LoginFields setShown={setShown} />
        </>
      ) : (
        <>
          <h2>Register</h2>
          <RegisterFields setShown={setShown} />
        </>
      )}
    </div>
  );
};

export default function Home() {
  const [isShown, setStatus] = useState<boolean>(false);
  return (
    <>
      <LogRegContainer isShown={isShown} setShown={setStatus} />
    </>
  );
}
