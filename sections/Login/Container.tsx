import { SetStateAction } from "react";
import { LoginFields } from "./Login";
import { RegisterFields } from "./Register";
import Container from '@mui/material/Container'
import { Box, Paper, Typography } from "@mui/material";

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
        backgroundColor: loginDisplay.isLogin ? "green" : "whitesmoke",
        width: {
          xs: "90%",
          sm: "60%",
          md: "35%",
        },
        textAlign: "center",
        display: modalDisplay.isShown ? "flex" : "none",
        color: "black",
        position: "fixed",
        justifySelf: "center",
        padding: 6,
        flexDirection: "column",
      }}>
        <button
          style={{ padding: "1%" }}
          onClick={() => modalDisplay.setStatus(!modalDisplay.isShown)}
        >
          x
        </button>
        {!loginDisplay.isLogin ? (
          <>
            <Typography variant="h4" color="initial">Login</Typography>
            <LoginFields setDisplay={loginDisplay.setDisplay} />
          </>

        ) : (
          <>
            <Typography variant="h4" color="initial">Registration</Typography>
            <RegisterFields setDisplay={loginDisplay.setDisplay} />
          </>
        )}
      </Paper>
    </Container>


  );
};
