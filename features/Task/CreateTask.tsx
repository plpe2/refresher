"use client";
import { useAuthProvider } from "@/context/jwt/auth-provider";
import { handleCreateTask } from "@/hooks/api/task/task";
import { SetStateAction } from "react";
import Container from '@mui/material/Container'
import { Box, ClickAwayListener, Paper, TextField, Typography, Button, Avatar } from "@mui/material";
import { string, z } from "zod"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledTextField } from "@/components/Input-Fields/rhf-TextFields";

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
  const { register, control, handleSubmit, formState: { errors } } = useForm<taskValTypes>({ defaultValues: { title: "", body: "" }, resolver: zodResolver(taskValSchema) })

  return (
    <ClickAwayListener onClickAway={() => setStatusCreate((prev) => !prev)}>
      <Container maxWidth="lg"
        sx={{
          width: { sx: "90%", sm: "70%", md: "30%" },
          position: "absolute",
          justifySelf: "center",
        }}>
        <Paper elevation={4} sx={{ padding: 4 }} >
          <form
            style={{ display: "flex", flexDirection: "column", gap: 25, textAlign: "center" }}
            onSubmit={handleSubmit(async (data) => handleCreateTask(id!, data, router))}
          >
            <Avatar sx={{ alignSelf: "center" }}></Avatar>
            <Typography variant="h5" color="initial">Create Task</Typography>
            <ControlledTextField control={control} name="title" label="Task Title" autoFocus />
            <ControlledTextField name="body" control={control} label="Task Description" />
            <Box sx={{ display: "flex" }}>
              <Button sx={{ width: "70%" }} type="submit" variant="contained" color="primary" fullWidth>
                Create
              </Button>
              <Button sx={{ width: "30%" }} variant="contained" color="error" onClick={() => setStatusCreate((prev) => !prev)} fullWidth>
                X
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </ClickAwayListener>
  );
};
