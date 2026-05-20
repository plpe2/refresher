import { useAuthProvider } from "@/context/jwt/auth-provider";
import { useEffect, useState } from "react";
import { fetchingTask } from "./task";
import { Task } from "@/types/Tasks";

export default function useFetchTask() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);
  const [isCreating, setStatusCreate] = useState<boolean>(true);

  useEffect(() => {
    const userId = userData?.user?.id;
    fetchingTask({ userId: userId, setTask: setTasks });
  }, [userData]);

  return { taskList, setTasks, isCreating, setStatusCreate };
}
