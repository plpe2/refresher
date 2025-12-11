"use client";
import React, { SetStateAction, useState } from "react";
import RegisterInput from "./components/RegisterInput";

export type inputValidationTypes = {
  Name: boolean;
  Age: boolean;
  Password: boolean;
  CPassword: boolean;
};

const ResetState = (
  setStatus: React.Dispatch<
    React.SetStateAction<{
      Name: boolean;
      Age: boolean;
      Password: boolean;
      CPassword: boolean;
    }>
  >
) => {
  setStatus((prev) => ({
    ...prev,
    Name: false,
    Age: false,
    Password: false,
    CPassword: false,
  }));
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

  const nameValue = formData.get("Name")?.valueOf() as string;
  const ageValue = formData.get("Age")?.valueOf() as number;
  const passwordValue = formData.get("Password")?.valueOf() as string;
  const cpasswordValue = formData.get("CPassword")?.valueOf() as string;

  const nameValidation = nameValue === "" || nameValue.length <= 6;
  const ageValidation = ageValue <= 0;
  const passwordValidation = passwordValue.length <= 7;
  const cpasswordValidation =
    cpasswordValue !== passwordValue || cpasswordValue === "";

  if (cpasswordValidation) {
    setStatus((prev) => ({ ...prev, CPassword: false }));
  }

  if (passwordValidation) {
    setStatus((prev) => ({ ...prev, Password: false }));
  }

  if (ageValidation) {
    setStatus((prev) => ({ ...prev, Age: false }));
  }

  if (nameValidation) {
    setStatus((prev) => ({ ...prev, Name: false }));
  }

  if (
    !(
      nameValidation ||
      ageValidation ||
      passwordValidation ||
      cpasswordValidation
    )
  ) {
    const registerRequest = await fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      body: JSON.stringify({ nameValue, ageValue, passwordValue }),
    });
    const registerResponse = await registerRequest.json();
    console.log(registerResponse);
  }

  // return console.log({ name: inputValidation.Name, namefield: nameValue });
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
