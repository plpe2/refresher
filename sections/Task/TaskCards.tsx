import { UpdatingTaskType, Task } from "@/types/Tasks";
import React, { SetStateAction } from "react";

export default function TaskCards({
  task,
  setStatusUpdate,
  UpdatingTask,
  setTaskDetails,
}: {
  task: Task;
  setStatusUpdate: React.Dispatch<SetStateAction<boolean>>;
  UpdatingTask: UpdatingTaskType;
  setTaskDetails: React.Dispatch<SetStateAction<Partial<Task>>>;
}) {
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "inline-block",
        padding: "10px",
        border: "1px solid black",
        margin: "10px",
        borderRadius: "10px 10px",
      }}
    >
      <h4>{task.taskTitle}</h4>
      <p>- {task.taskDesc}</p>
      <p>Status: {task.status}</p>
      <p>Date Added: {new Date(task.timeAdded).toLocaleDateString()}</p>
      <p>Time Added: {new Date(task.timeAdded).toLocaleTimeString()}</p>
      <p>Finished: {task.timeFinished.toString()}</p>
      <button
        style={{ float: "right", padding: "10px" }}
        onClick={() => {
          setStatusUpdate((prev) => !prev);
          setTaskDetails({
            ...UpdatingTask,
            taskId: task.taskId,
            taskTitle: task.taskTitle,
            taskDesc: task.taskDesc,
            ownerId: task.ownerId,
          });
        }}
      >
        Update
      </button>
    </div>
  );
}
