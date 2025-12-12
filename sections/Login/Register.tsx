"use client";
import React, { SetStateAction, useState } from "react";
import RegisterInput from "./components/RegisterInput";
import { handleRegister } from "@/hooks/api/users";

export type inputValidationTypes = {
  Name: boolean;
  Age: boolean;
  Password: boolean;
  CPassword: boolean;
};

export const RegisterFields = ({
  setShown,
}: {
  setShown: React.Dispatch<SetStateAction<boolean>>;
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
        handleRegister({ e, setStatus });
      }}
    >
      <RegisterInput
        type="Name"
        inputValidation={inputValidation}
        setStatus={setStatus}
      />
      <RegisterInput
        type="Age"
        inputValidation={inputValidation}
        setStatus={setStatus}
      />
      <RegisterInput
        type="Password"
        inputValidation={inputValidation}
        setStatus={setStatus}
      />
      <RegisterInput
        type="CPassword"
        inputValidation={inputValidation}
        setStatus={setStatus}
      />
      <div style={{ margin: "10px" }}>
        <button type="submit">Register</button>
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
            Already have an account?
          </button>
        </p>
      </div>
    </form>
  );
};
