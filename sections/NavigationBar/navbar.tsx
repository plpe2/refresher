"use client";
import { useState } from "react";

import { LogRegContainer } from "../Login/Container";

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
