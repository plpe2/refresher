"use client";
import React, { SetStateAction } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from "react-hook-form";
import { UserRegValues } from "@/types/Users";
import { handleRegister } from "@/hooks/api/users/users";
import { useRouter } from "next/navigation";

export const RegisterFields = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<UserRegValues>()


  return (
    <form
      method="POST"
      onSubmit={handleSubmit((data) => handleRegister(data, router))}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        {...register("name")}
      />
      <TextField
        label="Age"
        variant="outlined"
        fullWidth
        {...register("age")}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        {...register("password")}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        fullWidth
        {...register("cpassword")}
      />
      <div style={{ margin: "10px" }}>
        <Button variant="contained" color="success" type="submit">
          Register
        </Button>
        <hr />
        <p>
          Already have an account? {" "}
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
            }}
          >
            Login here
          </button>
        </p>
      </div>
    </form>
  );
};
