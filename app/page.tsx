"use client";
import { SetStateAction, useState } from "react";

const LoginFields = ({
  setShown,
}: {
  setShown: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <p>Email:</p>
      <input type="text" name="Email" />
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

const RegisterFields = ({
  setShown,
}: {
  setShown: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <p>Name:</p>
      <input type="text" name="Name" />
      <p>Age:</p>
      <input type="text" name="Age" />
      <p>Password:</p>
      <input type="text" name="Password" />
      <p>Confirm Password:</p>
      <input type="text" name="CPassword" />
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
              console.log("Register");
            }}
          >
            Already have an account?
          </button>
        </p>
      </div>
    </form>
  );
};

const LogRegContainer = ({
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
        display: "block",
      }}
    >
      {!isShown ? (
        <>
          <h2>Login</h2>
          <LoginFields setShown={setShown} />
        </>
      ) : (
        <>
          <h2>Register</h2>
          <RegisterFields setShown={setShown} />
        </>
      )}
    </div>
  );
};

export default function Home() {
  const [isShown, setStatus] = useState<boolean>(false);
  return (
    <>
      <LogRegContainer isShown={isShown} setShown={setStatus} />
    </>
  );
}
