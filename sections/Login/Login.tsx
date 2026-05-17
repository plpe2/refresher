"use client"
import React, { SetStateAction, useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from "react-hook-form";
import { LoginValues } from "@/types/Users";
import { handleLogin } from "@/hooks/api/users/users";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";

export const LoginFields = ({
  setDisplay,
  setStatus,
}: {
  setDisplay: React.Dispatch<SetStateAction<boolean>>,
  setStatus: React.Dispatch<SetStateAction<boolean>>
}) => {
  const { register, handleSubmit } = useForm<LoginValues>()
  const [loginAttempt, setAttempt] = useState<boolean>(true)

  return (
    <form
      onSubmit={handleSubmit(((data) => handleLogin({ data: data, setStatus: setStatus, setAttempt: setAttempt })))}

      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}
    >
      <Box sx={{ display: loginAttempt ? "none" : "flex", width: "95%", backgroundColor: "#FFDCE0", padding: 1, alignSelf: "center", border: "1px solid #df889e", alignItems: "center", justifyContent: "flex-end" }}>
        <Typography variant="body2" color="initial" sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}>Incorrect email or password</Typography>
        <Button variant="text" color="primary" sx={{ borderRadius: "50%" }} onClick={() => { setAttempt(true) }} >
          x
        </Button>
      </Box>
      <TextField
        label="Email"
        fullWidth
        {...register("name")}
      />
      <TextField
        label="Password"
        fullWidth
        {...register("password")}
      />
      <div style={{ margin: "10px" }}>
        <Button variant="contained" color="primary" type="submit" sx={{}}>
          Login
        </Button>
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
              setDisplay((prev) => !prev);
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
