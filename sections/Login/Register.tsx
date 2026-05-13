"use client";
import React, { SetStateAction, useState } from "react";
import RegisterInput from "./components/RegisterInput";
import { handleRegister } from "@/hooks/api/users/users";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const RegisterFields = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [inputValidation, setStatus] = useState({
    Name: true,
    Age: true,
    Password: true,
    CPassword: true,
  });

  return (
    <form
      method="POST"
      onSubmit={(e) => {
        // handleRegister({ e, setStatus });
        e.preventDefault()
        alert("HEllo")
      }}

      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}
    >
      <TextField
        label="Name"
        name=""
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Age"
        name=""
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        name=""
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Confirm Password"
        name=""
        variant="outlined"
        fullWidth
      />
      <div style={{ margin: "10px" }}>
        <Button variant="contained" color="success" type="submit">
          Register
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
            }}
          >
            Already have an account?
          </button>
        </p>
      </div>
    </form>
  );
};
