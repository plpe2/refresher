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
        padding: "10px",
        margin: "10px",
        backgroundColor: "red",
        width: "auto",
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
        <button type="button" onClick={() => setStatusCreate((prev) => !prev)}>
          x
        </button>
        <p>Create Task</p>
        Title:
        <input name="Title" type="text" />
        <br />
        Description:
        <input name="Body" type="text" />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
