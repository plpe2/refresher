import { SetStateAction } from "react";
import { LoginFields } from "./Login";
import { RegisterFields } from "./Register";
import Container from '@mui/material/Container'
import { Paper, Typography, Button, Box, Avatar } from "@mui/material";

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
        <Button variant="contained" color="error" sx={{ width: "5%", alignSelf: "flex-end", borderRadius: "50%" }} onClick={(prev) => modalDisplay.setStatus(!prev)}>
          X
        </Button>
        {!loginDisplay.isLogin ? (
          <>
            <Box sx={{ margin: 3, alignItems: "center", display: "flex", flexDirection: "column", gap: 3 }}>
              <Avatar>
                <img src="https://images.dog.ceo/breeds/bouvier/n02106382_1470.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Avatar>
              <Typography variant="h4" color="initial">Login</Typography>
            </Box>
            <LoginFields setDisplay={loginDisplay.setDisplay} />
          </>

        ) : (
          <>
            <Box sx={{ margin: 3, alignItems: "center", display: "flex", flexDirection: "column", gap: 3 }}>
              <Avatar>
                <img src="https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.jpg" alt="Dog" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Avatar>
              <Typography variant="h4" color="initial">Registration</Typography>
            </Box>
            <RegisterFields setDisplay={loginDisplay.setDisplay} />
          </>
        )}
      </Paper>
    </Container>


  );
};
