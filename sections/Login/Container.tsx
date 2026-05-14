import { SetStateAction } from "react";
import { LoginFields } from "./Login";
import { RegisterFields } from "./Register";
import Container from '@mui/material/Container'
import { Paper, Typography, Button } from "@mui/material";

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
        // backgroundColor: loginDisplay.isLogin ? "whitesmoke" : "whitesmoke",
        backgroundColor: "whitesmoke",
        width: {
          xs: "80%",
          sm: "50%",
          md: "25%",
        },
        textAlign: "center",
        display: modalDisplay.isShown ? "flex" : "none",
        color: "black",
        position: "fixed",
        justifySelf: "center",
        padding: 6,
        flexDirection: "column",
      }}>
        <Button variant="contained" color="error" sx={{ width: "5%", alignSelf: "flex-end", borderRadius: "50%" }}>
          X
        </Button>
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
