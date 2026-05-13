import { handleLogin } from "@/hooks/api/users/users";
import React, { SetStateAction, useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



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

      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}
    >
      <p style={{ color: "red" }}>
        {logStatus ? "Email or Password is incorrect" : ""}
      </p>
      <TextField
        id=""
        name="Name"
        label="Email"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        name="Password"
        onFocus={() => {
          setStatus(false);
        }}
        fullWidth
      />
      <div style={{ margin: "10px" }}>
        <Button variant="contained" color="primary" type="submit" sx={{}}>
          Login
        </Button>
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
