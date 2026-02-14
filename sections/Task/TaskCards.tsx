import { UpdatingTaskType, Task } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";
import ValidationWindow from "./ValidationWindow";

const ChangeStatusArea = ({
  changeConfirming,
}: {
  changeConfirming: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div style={{ position: "absolute", display: "grid" }}>
      <button
        style={{ padding: "10px", width: "137%" }}
        onClick={() => changeConfirming((prev) => !prev)}
      >
        Ongoing
      </button>
      <button style={{ padding: "10px", width: "137%" }}>Finished</button>
      <button style={{ padding: "10px", width: "137%" }}>Cancel</button>
    </div>
  );
};

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
  const [isConfirming, changeConfirming] = useState<boolean>(false);
  const [isStatusChanging, changeDisplayStatus] = useState<boolean>(false);

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
      <div style={{ display: "flex" }}>
        {/* <button
          type="button"
          style={{ padding: "10px" }}
          onClick={() => setStatus((prev) => !prev)}
        >
          Done
        </button> */}
        <button
          style={{ padding: "10px" }}
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
        {isConfirming && <ValidationWindow setStatus={changeConfirming} />}
        <div>
          <button
            style={{ padding: "10px" }}
            onClick={() => changeDisplayStatus((prev) => !prev)}
          >
            Change Status
          </button>
          {isStatusChanging && (
            <ChangeStatusArea changeConfirming={changeConfirming} />
          )}
        </div>
      </div>
    </div>
  );
}
