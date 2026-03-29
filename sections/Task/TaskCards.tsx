import { Task, taskCardState, updateTaskProps } from "@/types/Tasks";
import React, { SetStateAction, useState } from "react";
import ValidationWindow from "./ValidationWindow";
import { ChangeStatusArea } from "./ChangeStatusArea";
import styles from "@/styles/Task/TaskCard.module.css";

export default function TaskCards({
  task,
  setUpdateState,
  layout,
}: {
  task: Task;
  setUpdateState: React.Dispatch<SetStateAction<updateTaskProps>>;
  layout: "Cards" | "List";
}) {
  const [taskCardValues, setCardValues] = useState<taskCardState>({
    isConfirming: false,
    isStatusChanging: false,
    passedMessage: "",
    taskAction: async () => ({ status: true, message: "" }),
  });

  return (
    <div className={layout === "Cards" ? styles.taskCard : styles.taskList}>
      <h4>{task.taskTitle}</h4>
      <p>- {task.taskDesc}</p>
      <p>Status: {task.status}</p>
      <p>Date Added: {new Date(task.timeAdded).toLocaleDateString()}</p>
      <p>Time Added: {new Date(task.timeAdded).toLocaleTimeString()}</p>
      <p>Finished: {new Date(task.timeFinished).toLocaleDateString()}</p>
      <div style={{ display: "flex" }}>
        <button
          style={{ padding: "10px" }}
          onClick={() => {
            setUpdateState((prev) => ({
              ...prev,
              isUpdating: !prev.isUpdating,
              UpdatingTaskValue: {
                taskId: task.taskId,
                taskTitle: task.taskTitle,
                taskDesc: task.taskDesc,
                userId: task.userId,
              },
            }));
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
            <ChangeStatusArea
              setCardValues={setCardValues}
              taskId={task.taskId}
            />
          )}
        </div>
      </div>
    </div>
  );
}
