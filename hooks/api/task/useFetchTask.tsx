import { useAuthProvider } from "@/context/jwt/auth-provider";
import { useEffect, useState } from "react";
import { fetchingTask } from "./task";
import { Task, updateTaskProps } from "@/types/Tasks";

export default function useFetchTask() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);
  const [isCreating, setStatusCreate] = useState<boolean>(false);
  const [updateValues, setUpdateState] = useState<updateTaskProps>({
    isUpdating: false,
    UpdatingTaskValue: {
      taskId: 0,
      taskTitle: "",
      taskDesc: "",
      userId: 0,
    },
  });

  useEffect(() => {
    const userId = userData?.user?.id;
    fetchingTask({ userId: userId, setTask: setTasks });
  }, [userData]);

  return { taskList, setTasks, isCreating, setStatusCreate, updateValues, setUpdateState };
}
