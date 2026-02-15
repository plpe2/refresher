import { UpdatingTaskType, Task, taskCardState } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";
import ValidationWindow from "./ValidationWindow";
import {
  TaskintoCancel,
  TaskintoFinished,
  TaskintoOngoing,
} from "@/hooks/api/task/statusChange";

const ChangeStatusArea = ({
  setCardValues,
}: {
  setCardValues: React.Dispatch<SetStateAction<taskCardState>>;
}) => {
  return (
    <div style={{ position: "absolute", display: "grid" }}>
      <button
        style={{ padding: "10px", width: "150%" }}
        onClick={() => {
          setCardValues((prev) => ({
            ...prev,
            isConfirming: !prev.isConfirming,
            passedMessage: "Ongoing",
            taskAction: TaskintoOngoing,
          }));
        }}
      >
        Ongoing
      </button>
      <button
        style={{ padding: "10px", width: "150%" }}
        onClick={() => {
          {
            setCardValues((prev) => ({
              ...prev,
              isConfirming: !prev.isConfirming,
              passedMessage: "Finished",
              taskAction: TaskintoFinished,
            }));
          }
        }}
      >
        Finished
      </button>
      <button
        style={{ padding: "10px", width: "150%" }}
        onClick={() => {
          setCardValues((prev) => ({
            ...prev,
            isConfirming: !prev.isConfirming,
            passedMessage: "Cancel",
            taskAction: TaskintoCancel,
          }));
        }}
      >
        Cancel
      </button>
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
  // const [isConfirming, changeConfirming] = useState<boolean>(false);
  // const [isStatusChanging, changeDisplayStatus] = useState<boolean>(false);
  // const [passedMessage, updateMessage] = useState<string>("");
  // const [taskAction, changeAction] = useState<() => void>(() => {});

  const [taskCardValues, setCardValues] = useState<taskCardState>({
    isConfirming: false,
    isStatusChanging: false,
    passedMessage: "",
    taskAction: () => {},
  });

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
        {taskCardValues.isConfirming && (
          <ValidationWindow
            taskCardValues={taskCardValues}
            setCardValues={setCardValues}
          />
        )}
        <div>
          <button
            style={{ padding: "10px" }}
            onClick={() =>
              setCardValues((prev) => ({
                ...prev,
                isStatusChanging: !taskCardValues.isStatusChanging,
              }))
            }
          >
            Change Status
          </button>
          {taskCardValues.isStatusChanging && (
            <ChangeStatusArea setCardValues={setCardValues} />
          )}
        </div>
      </div>
    </div>
  );
}
