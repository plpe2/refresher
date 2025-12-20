"use client";
import { useState } from "react";

import { LogRegContainer } from "../Login/Container";
import Link from "next/link";

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
            <Link href={`http://localhost:3000/`}>
              <p>Home</p>
            </Link>
          </div>
          <div style={{ flexGrow: 1 }}></div>
          <div style={{ display: "flex" }}>
            <ul>
              <button style={{ padding: "10px" }} type="button">
                About Us
              </button>
            </ul>
            <ul>
              <button style={{ padding: "10px" }} type="button">
                Contact Us
              </button>
            </ul>
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
