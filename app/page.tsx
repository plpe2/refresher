"use client";
import { SetStateAction, useState } from "react";

const LoginElement = ({
  isShown,
  setShown,
}: {
  isShown: boolean;
  setShown: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "30%",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h2>Login</h2>
      <form>
        <p>Email:</p>
        <input type="text" name="Email" id="" />
        <p>Password:</p>
        <input type="text" name="Password" id="" />
        <div style={{ margin: "10px" }}>
          <button type="submit">Login</button>
          <hr />
          <p>
            No account yet?{" "}
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
                padding: 0,
              }}
              onClick={() => {
                setShown((prev) => !prev);
              }}
            >
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default function Home() {
  const [isLogin, setStatus] = useState<boolean>(false);
  return (
    <>
      <LoginElement isShown={isLogin} setShown={setStatus} />
    </>
  );
}
