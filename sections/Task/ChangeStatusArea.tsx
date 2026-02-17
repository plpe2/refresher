import { StatusChange } from "@/hooks/api/task/statusChange";
import { taskCardState } from "@/types/Tasks";
import { SetStateAction } from "react";

export const ChangeStatusArea = ({
  taskId,
  setCardValues,
}: {
  taskId: number;
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
            taskAction: () =>
              StatusChange({ taskId: taskId, changeStatus: "Ongoing" }),
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
              taskAction: () =>
                StatusChange({ taskId: taskId, changeStatus: "Finished" }),
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
            taskAction: () =>
              StatusChange({ taskId: taskId, changeStatus: "Cancel" }),
          }));
        }}
      >
        Cancel
      </button>
    </div>
  );
};
