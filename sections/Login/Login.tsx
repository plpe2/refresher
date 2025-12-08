import { SetStateAction } from "react";

export const LoginFields = ({
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
