import { useAuthProvider } from "@/context/jwt/auth-provider";
import { handleCreateTask } from "@/hooks/api/task/task";
import { SetStateAction } from "react";
import Container from '@mui/material/Container'
import { Paper, TextField, Typography } from "@mui/material";

export const CreateWindow = ({
  setStatusCreate,
}: {
  setStatusCreate: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const userData = useAuthProvider();
  const id = userData?.user?.id;
  return (
    <Container maxWidth="lg" sx={{
      width: "auto",
      position: "absolute",
      justifySelf: "center",
    }}>
      <Paper elevation={4} sx={{ padding: 4 }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
          onSubmit={(e) =>
            handleCreateTask({
              e,
              id: id!,
            })
          }
        >
          <button
            type="button"
            style={{ float: "right" }}
            onClick={() => setStatusCreate((prev) => !prev)}
          >
            x
          </button>
          <Typography variant="body1" color="initial">Create Task</Typography>
          <TextField label="Task Name" variant="outlined" name="Title" fullWidth />
          <TextField label="Task Description" variant="outlined" name="Body" fullWidth />
          <br />
          <br />
          <button type="submit">Create</button>
        </form>
      </Paper>
    </Container>
  );
};
