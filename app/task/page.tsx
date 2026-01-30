"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { Task } from "@/types/Tasks";
import { useEffect, useState } from "react";

export default function TaskView() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchingTask = async () => {
      if (!userData?.user?.id) return;
      const taskRequest = await fetch(`http://localhost:3000/api/v1/task/`, {
        method: "POST",
        body: JSON.stringify({ id: userData?.user?.id }),
      });

      const fetchedTasks = await taskRequest.json();
      if (!fetchedTasks.status) {
        return;
      }
      setTasks(fetchedTasks.taskList);
    };
    fetchingTask();
  }, [userData]);
  return (
    <div>
      TaskView
      {taskList.map((task) => (
        <div
          key={task.taskId}
          style={{
            backgroundColor: "gray",
            display: "inline-block",
            padding: "10px",
            border: "1px solid black",
            margin: "10px",
            borderRadius: "10px 10px",
          }}
        >
          <h4>{task.title}</h4>
          <p>- {task.body}</p>
          <p>Status: {task.status}</p>
          <p>{task.timeAdded.toString()}</p>
        </div>
      ))}
    </div>
  );
}
