import React, { SetStateAction } from "react";

const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("Name");
  const password = formData.get("Password");

  const loginRequest = await fetch("http://localhost:3000/api/v1/login/", {
    method: "POST",
    body: JSON.stringify({ name, password }),
  });

  const loginResponse = await loginRequest.json();
  alert(loginResponse.message);
  window.location.href = loginResponse.redirect;
};

export const LoginFields = ({
  setShown,
}: {
  setShown: React.Dispatch<SetStateAction<boolean>>;
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
              setShown((prev) => !prev);
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
