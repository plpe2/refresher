"use client";
import { useContext, useState } from "react";

import { LogRegContainer } from "../Login/Container";
import Link from "next/link";
import { AuthContext } from "@/context/auth-context";

export default function Navbar() {
  const userData = useContext(AuthContext);
  const [isShown, setStatus] = useState<boolean>(false);
  const [isLogin, setDisplay] = useState<boolean>(false);

  const btnDisplay = () => {
    if (!userData?.isAuthenticated) {
      return (
        <button
          style={{ padding: "10px" }}
          type="button"
          onClick={() => setStatus((prev) => !prev)}
        >
          Login/Register
        </button>
      );
    } else {
      return (
        <button
          style={{ padding: "10px" }}
          type="button"
          onClick={userData.logout}
        >
          Logout
        </button>
      );
    }
  };
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
            <ul>{btnDisplay()}</ul>
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
