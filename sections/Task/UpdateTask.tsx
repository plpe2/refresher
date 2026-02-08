import { useAuthProvider } from "@/context/jwt/auth-provider";
import { handleUpdateTask } from "@/hooks/api/task/task";
import { UpdatingTaskType } from "@/types/Tasks";
import { Task } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";

export default function UpdateTask({
  passedTask,
  setStatusUpdate,
}: {
  passedTask: UpdatingTaskType;
  setStatusUpdate: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [taskDetails, setDetails] = useState<UpdatingTaskType>(passedTask);
  const userData = useAuthProvider();
  return (
    <div
      style={{
        display: "flex",
        padding: "100px",
        margin: "10px",
        backgroundColor: "red",
        width: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form onSubmit={(e) => handleUpdateTask(e)}>
        <button
          onClick={() => {
            setStatusUpdate((prev) => !prev);
            setDetails({
              ...taskDetails,
              taskId: 0,
              taskTitle: "",
              taskDesc: "",
              userId: 0,
            });
          }}
          style={{ float: "right" }}
        >
          x
        </button>
        <p>UpdateTask</p>
        {/* <input type="text" name="userId" defaultValue={userData?.user?.id} /> */}
        <input type="text" name="taskId" defaultValue={taskDetails.taskId} />
        <p>Title: </p>
        <input
          type="text"
          name="newTitle"
          defaultValue={taskDetails?.taskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDetails({ ...taskDetails, taskTitle: e.target.value })
          }
        />
        <p>Body:</p>
        <input
          type="text"
          name="newBody"
          defaultValue={taskDetails?.taskDesc}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDetails({ ...taskDetails, taskDesc: e.target.value })
          }
        />
        <br />
        <button style={{ marginTop: "10px", padding: "5px", float: "right" }}>
          Update
        </button>
      </form>
    </div>
  );
}
