import { useAuthProvider } from "@/context/jwt/auth-provider";
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
  const userData = useAuthProvider();
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
              StatusChange({
                taskId: taskId,
                changeStatus: "Ongoing",
                setLoading: userData?.setLoading,
                setCardValues: setCardValues,
              }),
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
                StatusChange({
                  taskId: taskId,
                  changeStatus: "Finished",
                  setLoading: userData?.setLoading,
                  setCardValues: setCardValues,
                }),
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
              StatusChange({
                taskId: taskId,
                changeStatus: "Cancel",
                setLoading: userData?.setLoading,
                setCardValues: setCardValues,
              }),
          }));
        }}
      >
        Cancel
      </button>
    </div>
  );
};
