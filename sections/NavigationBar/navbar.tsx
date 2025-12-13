"use client";
import { SetStateAction, useState } from "react";
import { LoginFields } from "../Login/Login";
import { RegisterFields } from "../Login/Register";

export const LogRegContainer = ({
  loginDisplay,
  modalDisplay,
}: {
  loginDisplay: {
    isLogin: boolean;
    setDisplay: React.Dispatch<SetStateAction<boolean>>;
  };
  modalDisplay: {
    isShown: boolean;
    setStatus: React.Dispatch<SetStateAction<boolean>>;
  };
}) => {
  return (
    <div
      style={{
        backgroundColor: loginDisplay.isLogin ? "green" : "teal",
        width: "30%",
        textAlign: "center",
        padding: "10px",
        display: modalDisplay.isShown ? "block" : "none",
        color: "white",
      }}
    >
      <button
        style={{ padding: "1%" }}
        onClick={() => modalDisplay.setStatus(!modalDisplay.isShown)}
      >
        x
      </button>
      {!loginDisplay.isLogin ? (
        <>
          <h2>Login</h2>
          <LoginFields setDisplay={loginDisplay.setDisplay} />
        </>
      ) : (
        <>
          <h2>Register</h2>
          <RegisterFields setDisplay={loginDisplay.setDisplay} />
        </>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isShown, setStatus] = useState<boolean>(false);
  const [isLogin, setDisplay] = useState<boolean>(false);
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
            <ul>
              <button
                style={{ padding: "10px" }}
                type="button"
                onClick={() => setStatus((prev) => !prev)}
              >
                Login/Register
              </button>
            </ul>
          </div>
        </div>
      </div>
      <LogRegContainer
        loginDisplay={{ isLogin, setDisplay }}
        modalDisplay={{ isShown, setStatus }}
      />
    </>
  );
}
