import { handleLogin } from "@/hooks/api/users/users";
import React, { SetStateAction, useState } from "react";

export const LoginFields = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [logStatus, setStatus] = useState<boolean>(false);
  return (
    <form
      onSubmit={(e) => {
        handleLogin({ e, setStatus });
      }}
    >
      <p style={{ color: "red" }}>
        {logStatus ? "Email or Password is incorrect" : ""}
      </p>
      <p>Email:</p>
      <input
        type="text"
        name="Name"
        onFocus={() => {
          setStatus(false);
        }}
      />
      <p>Password:</p>
      <input
        type="text"
        name="Password"
        onFocus={() => {
          setStatus(false);
        }}
      />
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
              setDisplay((prev) => !prev);
              console.log("Login");
            }}
          >
            Register
          </button>
        </p>
      </div>
    </form>
  );
};
