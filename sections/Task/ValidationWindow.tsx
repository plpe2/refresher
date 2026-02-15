import { SetStateAction } from "react";
import { taskCardState } from "./TaskCards";

export default function ValidationWindow({
  taskCardValues,
  setCardValues,
}: {
  taskCardValues: taskCardState;
  setCardValues: React.Dispatch<SetStateAction<taskCardState>>;
}) {
  return (
    <div
      style={{
        backgroundColor: "teal",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "5%",
      }}
    >
      <h3>
        Are you sure you want to
        <br /> put Task into {taskCardValues.passedMessage}?
      </h3>
      <button
        onClick={() => {
          taskCardValues.taskAction();
          setCardValues((prev) => ({
            ...prev,
            isConfirming: !prev.isConfirming,
          }));
        }}
      >
        Yes, put <br /> Task into {taskCardValues.passedMessage}
      </button>
      <button
        onClick={() =>
          setCardValues((prev) => ({
            ...prev,
            isConfirming: !prev.isConfirming,
          }))
        }
      >
        Do not put <br /> Task into {taskCardValues.passedMessage}
      </button>
    </div>
  );
}
