"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { Task } from "@/types/Tasks";
import { useEffect, useState } from "react";

export default function TaskView() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);
  const fetchingTask = async () => {
    if (!userData?.user?.id) return;
    const taskRequest = await fetch(`http://localhost:3000/api/v1/task/`, {
      method: "POST",
      body: JSON.stringify({ id: userData?.user?.id }),
    });

    const fetchedTasks = await taskRequest.json();
    setTasks(fetchedTasks.taskList);
  };
  useEffect(() => {
    fetchingTask();
  }, [userData]);
  return (
    <div>
      TaskView
      {taskList.map((task) => (
        <div key={task.taskId}>
          <p>{task.taskTitle}</p>
        </div>
      ))}
    </div>
  );
}
