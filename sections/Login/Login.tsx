import React, { SetStateAction } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from "react-hook-form";
import { LoginValues } from "@/types/Users";



export const LoginFields = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit } = useForm<LoginValues>()

  const handleLogin = (data: LoginValues) => {
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}

      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}
    >
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
