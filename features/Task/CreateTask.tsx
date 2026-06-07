"use client";
import { useAuthProvider } from "@/context/jwt/auth-provider";
import { handleCreateTask } from "@/hooks/api/task/task";
import { SetStateAction } from "react";
import Container from '@mui/material/Container'
import { Paper, TextField, Typography } from "@mui/material";
import { string, z } from "zod"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const taskValSchema = z.object({
  title: string().min(1, "Enter the Task title."),
  body: string().min(1, "Enter Task Description."),
})

export type taskValTypes = z.infer<typeof taskValSchema>

export const CreateWindow = ({
  setStatusCreate,
}: {
  setStatusCreate: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const userData = useAuthProvider();
  const id = userData?.user?.id;
  const { register, handleSubmit, formState: { errors } } = useForm<taskValTypes>({ resolver: zodResolver(taskValSchema) })

  return (
    <Container maxWidth="lg" sx={{
      width: "auto",
      position: "absolute",
      justifySelf: "center",
    }}>
      <Paper elevation={4} sx={{ padding: 4 }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
          onSubmit={handleSubmit(async (data) => handleCreateTask(id!, data, router))}
        >
          <button
            type="button"
            style={{ float: "right" }}
            onClick={() => setStatusCreate((prev) => !prev)}
          >
            x
          </button>
          <Typography variant="body1" color="initial">Create Task</Typography>
          <TextField label="Task Name" variant="outlined" {...register("title")} error={!!errors.title} helperText={errors.title?.message} fullWidth />
          <TextField label="Task Description" variant="outlined" {...register("body")} error={!!errors.body} helperText={errors.body?.message} fullWidth />
          <br />
          <br />
          <button type="submit">Create</button>
        </form>
      </Paper>
    </Container>
  );
};
