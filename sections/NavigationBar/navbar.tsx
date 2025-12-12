"use client";
import { SetStateAction, useState } from "react";
import { LoginFields } from "../Login/Login";
import { RegisterFields } from "../Login/Register";

export const LogRegContainer = ({
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

export default function Navbar() {
  const [isShown, setStatus] = useState<boolean>(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          height: "8vh",
          marginBottom: "1.5%",
          borderRadius: "0 0 10px 10px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ display: "flex", width: "90%" }}>
          <div style={{ display: "flex" }}>
            <p>Home</p>
          </div>
          <div style={{ flexGrow: 1 }}></div>
          <div style={{ display: "flex" }}>
            <ul>About Us</ul>
            <ul>Contact Us</ul>
            <ul>Login/Register</ul>
          </div>
        </div>
      </div>
      <LogRegContainer isShown={isShown} setShown={setStatus} />
    </>
  );
}
