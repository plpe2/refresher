"use client";
import React, { SetStateAction } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from "react-hook-form";
import { handleRegister } from "@/hooks/api/users/users";
import { useRouter } from "next/navigation";
import { string, number, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


const RegValSchema = z.object({
  name: string().min(1, "Enter your Fullname"),
  age: number("Please enter a number"),
  password: string().min(8, "Password should atleast 8 characters."),
  cpassword: string().min(8, "Password should atleast 8 characters."),
}).refine((data) => data.password === data.cpassword, { message: "Please comfirm your password.", path: ["cpassword"], })

export type RegValType = z.infer<typeof RegValSchema>

export const RegisterFields = ({
  setDisplay,
}: {
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<RegValType>({ resolver: zodResolver(RegValSchema) })


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
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Age"
        variant="outlined"
        fullWidth
        {...register("age", { valueAsNumber: true })}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        fullWidth
        {...register("cpassword")}
        error={!!errors.cpassword}
        helperText={errors.cpassword?.message}
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
