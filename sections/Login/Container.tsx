import { SetStateAction } from "react";
import { LoginFields } from "./Login";
import { RegisterFields } from "./Register";

export const LogRegContainer = ({
  loginDisplay,
  modalDisplay,
}: {
  loginDisplay: {
    isLogin: boolean;
    setDisplay: React.Dispatch<SetStateAction<boolean>>;
  };
  modalDisplay: {
    isShown: boolean;
    setStatus: React.Dispatch<SetStateAction<boolean>>;
  };
}) => {
  return (
    <div
      style={{
        backgroundColor: loginDisplay.isLogin ? "green" : "teal",
        width: "30%",
        textAlign: "center",
        padding: "10px",
        display: modalDisplay.isShown ? "block" : "none",
        color: "white",
      }}
    >
      <button
        style={{ padding: "1%" }}
        onClick={() => modalDisplay.setStatus(!modalDisplay.isShown)}
      >
        x
      </button>
      {!loginDisplay.isLogin ? (
        <>
          <h2>Login</h2>
          <LoginFields setDisplay={loginDisplay.setDisplay} />
        </>
      ) : (
        <>
          <h2>Register</h2>
          <RegisterFields setDisplay={loginDisplay.setDisplay} />
        </>
      )}
    </div>
  );
};
