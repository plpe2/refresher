"use client";

import { AuthContext } from "@/context/auth-context";
import { useAuthProvider } from "@/context/jwt/auth-provider";
import { Task } from "@/types/Tasks";
import { authPlugins } from "mysql2";
import { useEffect, useState } from "react";

export default function TaskView() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);
  const [isCreating, setStatusCreate] = useState<boolean>(false);

  const createWindow = () => {
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
        <form onSubmit={() => alert("submitted")}>
          <button
            type="button"
            onClick={() => setStatusCreate((prev) => !prev)}
          >
            x
          </button>
          <p>Create Task</p>
          Title:
          <input type="text" />
          <br />
          Description:
          <input type="text" />
          <br />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  };

  const createTask = () => {
    setStatusCreate((prev) => !prev);
  };

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
      {isCreating && createWindow()}
      <div>
        <button>Manage</button>
        <button onClick={createTask}>Create + </button>
      </div>
      <p>Task View</p>

      <p>Status: {isCreating ? "creating task" : "not creating task"}</p>
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
          <p>Added: {task.timeAdded.toString()}</p>
          <p>Finished: {task.timeFinished.toString()}</p>
        </div>
      ))}
    </div>
  );
}
