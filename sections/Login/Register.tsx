"use client";
import React, { SetStateAction, useState } from "react";
import RegisterInput from "./components/RegisterInput";

export type inputValidationTypes = {
  Name: boolean;
  Age: boolean;
  Password: boolean;
};

const handleRegister = async ({
  e,
  inputValidation,
  setStatus,
}: {
  e: React.FormEvent<HTMLFormElement>;
  inputValidation: inputValidationTypes;
  setStatus: React.Dispatch<React.SetStateAction<inputValidationTypes>>;
}) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const nameValue = formData.get("Name");
  const ageValue = formData.get("Age");
  const passwordValue = formData.get("Password");

  if (!passwordValue) {
    setStatus((prev) => ({ ...prev, Password: true }));
  }

  if (!ageValue) {
    setStatus((prev) => ({ ...prev, Age: true }));
  }

  if (!nameValue) {
    setStatus((prev) => ({ ...prev, Name: true }));
  }
  // const registerRequest = await fetch(`http://localhost:3000/api/v1/users`, {
  //   method: "POST",
  //   body: JSON.stringify({ name, age, password }),
  // });

  // const registerResponse = await registerRequest.json();
  // console.log(registerResponse);
};

export const RegisterFields = ({
  setShown,
}: {
  setShown: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [inputValidation, setStatus] = useState({
    Name: false,
    Age: false,
    Password: false,
  });

  return (
    <form
      method="POST"
      onSubmit={(e) => {
        handleRegister({ e, inputValidation, setStatus });
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
