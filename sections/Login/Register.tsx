"use client";
import React, { SetStateAction } from "react";

const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const age = formData.get("age");
  const password = formData.get("password");

  if (name === "") return;
  const registerRequest = await fetch(`http://localhost:3000/api/v1/users`, {
    method: "POST",
    body: JSON.stringify({ name, age, password }),
  });

  const registerResponse = await registerRequest.json();
  console.log(registerResponse);
  console.log("proceeded");
};

export const RegisterFields = ({
  setShown,
}: {
  setShown: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form method="POST" onSubmit={handleRegister}>
      <p>Name:</p>
      <input type="text" name="name" min={6} />
      <p>Age:</p>
      <input type="text" name="age" />
      <p>Password:</p>
      <input type="text" name="password" />
      <p>Confirm Password:</p>
      <input type="text" name="cpassword" />
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
