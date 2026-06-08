import { ControlledTextField } from "@/components/Input-Fields/rhf-TextFields";
import { useAuthProvider } from "@/context/jwt/auth-provider";
import { handleUpdateTask } from "@/hooks/api/task/task";
import { updateTaskProps, UpdatingTaskType } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Avatar, Box, ClickAwayListener, Container, Paper } from "@mui/material";


export default function UpdateTask({
  passedTask,
  setUpdateState,
}: {
  passedTask: UpdatingTaskType;
  setUpdateState: React.Dispatch<SetStateAction<updateTaskProps>>;
}) {
  const [taskDetails, setDetails] = useState<UpdatingTaskType>(passedTask);
  const userData = useAuthProvider();
  const userId = userData?.user?.id;
  const { control } = useForm<{ taskId: number, newTitle: string, newBody: string }>({ defaultValues: { taskId: taskDetails.taskId, newTitle: taskDetails.taskTitle, newBody: taskDetails.taskDesc } })
  return (
    <ClickAwayListener onClickAway={() => {
      setUpdateState((prev) => ({ ...prev, isUpdating: false }));
      setDetails({
        ...taskDetails,
        taskId: 0,
        taskTitle: "",
        taskDesc: "",
        userId: 0,
      });
    }} >
      <Container
        maxWidth="lg"
        sx={{ width: { sx: "90%", sm: "70%", md: "30%" }, position: "absolute", justifySelf: "center", textAlign: "center" }}
      >
        <Paper elevation={4} sx={{ padding: 4 }}>
          <form
            onSubmit={(e) => {
              handleUpdateTask({ e, userId });
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4.5 }}>
              <Avatar sx={{ alignSelf: "center" }} />
              <Typography variant="h5" color="initial">Update Task</Typography>
              {/* Hiddent Task Id */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <ControlledTextField name="taskId" control={control} sx={{ display: "none" }} />
                <ControlledTextField name="newTitle" control={control} label="Task Title" />
                <ControlledTextField name="newBody" control={control} label="Task Description" />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Button variant="contained" color="success" type="submit" sx={{ width: "70%" }}>
                  Update
                </Button>
                <Button variant="contained" color="error" onClick={() => {
                  setUpdateState((prev) => ({ ...prev, isUpdating: false }));
                  setDetails({
                    ...taskDetails,
                    taskId: 0,
                    taskTitle: "",
                    taskDesc: "",
                    userId: 0,
                  });
                }} sx={{ width: "30%" }}>
                  X
                </Button>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>
    </ClickAwayListener>
  );
}
