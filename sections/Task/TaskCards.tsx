import { UpdatingTaskType, Task } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";
import ValidationWindow from "./ValidationWindow";
import { ChangeStatusFunction } from "@/hooks/api/task/statusChange";

const ChangeStatusArea = ({
  changeConfirming,
  updateMessage,
  changeAction,
}: {
  changeConfirming: React.Dispatch<SetStateAction<boolean>>;
  updateMessage: React.Dispatch<SetStateAction<string>>;
  changeAction: React.Dispatch<SetStateAction<() => void>>;
}) => {
  return (
    <div style={{ position: "absolute", display: "grid" }}>
      <button
        style={{ padding: "10px", width: "150%" }}
        onClick={() =>
          ChangeStatusFunction({
            changeConfirming,
            updateMessage,
            DisplayedMessage: "Ongoing",
            changeAction: changeAction,
          })
        }
      >
        Ongoing
      </button>
      <button
        style={{ padding: "10px", width: "150%" }}
        onClick={() =>
          ChangeStatusFunction({
            changeConfirming,
            updateMessage,
            DisplayedMessage: "Finished",
            changeAction: changeAction,
          })
        }
      >
        Finished
      </button>
      <button
        style={{ padding: "10px", width: "150%" }}
        onClick={() =>
          ChangeStatusFunction({
            changeConfirming,
            updateMessage,
            DisplayedMessage: "Cancel",
            changeAction: changeAction,
          })
        }
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
  const [isConfirming, changeConfirming] = useState<boolean>(false);
  const [isStatusChanging, changeDisplayStatus] = useState<boolean>(false);
  const [passedMessage, updateMessage] = useState<string>("");
  const [taskAction, changeAction] = useState<() => void>(() => {});

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
        {isConfirming && (
          <ValidationWindow
            changeConfirming={changeConfirming}
            message={passedMessage}
            onSubmitFunction={taskAction}
          />
        )}
        <div>
          <button
            style={{ padding: "10px" }}
            onClick={() => changeDisplayStatus((prev) => !prev)}
          >
            Change Status
          </button>
          {isStatusChanging && (
            <ChangeStatusArea
              changeConfirming={changeConfirming}
              updateMessage={updateMessage}
              changeAction={changeAction}
            />
          )}
        </div>
      </div>
    </div>
  );
}
