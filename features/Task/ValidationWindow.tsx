import { SetStateAction } from "react";
import { taskCardState } from "@/types/Tasks";
import { useRouter } from "next/navigation";
import { useAuthProvider } from "@/context/jwt/auth-provider";

export default function ValidationWindow({
  taskCardValues,
  setCardValues,
}: {
  taskCardValues: taskCardState;
  setCardValues: React.Dispatch<SetStateAction<taskCardState>>;
}) {
  const userData = useAuthProvider();
  const router = useRouter();
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
        onClick={async () => {
          try {
            const result = await taskCardValues.taskAction();

            alert(result.message);
          } finally {
            router.refresh();
          }
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
