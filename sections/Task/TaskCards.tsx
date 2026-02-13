import { UpdatingTaskType, Task } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";
import ValidationWindow from "./ValidationWindow";

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
  const [DoneTask, setStatus] = useState<boolean>(false);
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
        type="button"
        style={{ float: "right", padding: "10px" }}
        onClick={() => setStatus((prev) => !prev)}
      >
        Done
      </button>
      <button
        style={{ float: "right", padding: "10px" }}
        onClick={() => {
          setStatusUpdate((prev) => !prev);
          setTaskDetails({
            ...UpdatingTask,
            taskId: task.taskId,
            taskTitle: task.taskTitle,
            taskDesc: task.taskDesc,
            userId: task.userId,
          });
        }}
      >
        Update
      </button>
      {DoneTask && <ValidationWindow setStatus={setStatus} />}
    </div>
  );
}
