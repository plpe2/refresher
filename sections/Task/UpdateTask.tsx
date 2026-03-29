import { useAuthProvider } from "@/context/jwt/auth-provider";
import { handleUpdateTask } from "@/hooks/api/task/task";
import { updateTaskProps, UpdatingTaskType } from "@/types/Tasks";
import { Task } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";

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
      <form
        onSubmit={(e) => {
          handleUpdateTask({ e, userId });
        }}
      >
        <button
          onClick={() => {
            setUpdateState((prev) => ({ ...prev, isUpdating: false }));
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
        {/* Hiddent Task Id */}
        <input
          type="text"
          name="taskId"
          hidden
          defaultValue={taskDetails.taskId}
        />

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
