import { useAuthProvider } from "@/context/jwt/auth-provider";
import { handleCreateTask } from "@/hooks/api/task/task";
import { SetStateAction } from "react";

export const CreateWindow = ({
  setStatusCreate,
}: {
  setStatusCreate: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const userData = useAuthProvider();
  const id = userData?.user?.id;
  return (
    <div
      style={{
        display: "flex",
        padding: "100px",
        margin: "10px",
        backgroundColor: "red",
        width: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form
        onSubmit={(e) =>
          handleCreateTask({
            e,
            id: id!,
          })
        }
      >
        <button
          type="button"
          style={{ float: "right" }}
          onClick={() => setStatusCreate((prev) => !prev)}
        >
          x
        </button>
        <p>Create Task</p>
        <p>Title:</p>
        <input name="Title" type="text" autoFocus />
        <br />
        <p>Description:</p>
        <input name="Body" type="text" />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
