import { SetStateAction } from "react";
import { LoginFields } from "./Login";
import { RegisterFields } from "./Register";
import Container from '@mui/material/Container'
import { Paper } from "@mui/material";

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
    <Container maxWidth="lg" >
      <Paper elevation={4} sx={{
        backgroundColor: loginDisplay.isLogin ? "green" : "teal",
        width: {
          xs: "90%",
          sm: "60%",
          md: "35%",
        },
        textAlign: "center",
        display: modalDisplay.isShown ? "block" : "none",
        color: "white",
        position: "fixed",
        justifySelf: "center",
        padding: 10,
      }}>
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
      </Paper>
    </Container>


  );
};
