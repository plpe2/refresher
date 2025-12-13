import { handleLogin } from "@/hooks/api/users";
import React, { SetStateAction } from "react";

export const LoginFields = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form onSubmit={handleLogin}>
      <p>Email:</p>
      <input type="text" name="Name" />
      <p>Password:</p>
      <input type="text" name="Password" />
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
