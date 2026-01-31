"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { Task } from "@/types/Tasks";
import { useEffect, useState } from "react";

export default function TaskView() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);
  const [isCreating, setStatusCreate] = useState<boolean>(false);

  const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const taskTitle = formData.get("Title");
    const taskBody = formData.get("Body");

    const createRequest = await fetch(
      `http://localhost:3000/api/v1/task/${userData?.user?.id}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: taskTitle, body: taskBody }),
      },
    );

    const createResponse = await createRequest.json();
    if (!createResponse.status) {
      console.log("Error creating task");
    }

    window.location.href = "http://localhost:3000/task";
  };

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
        <form onSubmit={handleCreateTask}>
          <button
            type="button"
            onClick={() => setStatusCreate((prev) => !prev)}
          >
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
          <p>Date Added: {new Date(task.timeAdded).toLocaleDateString()}</p>
          <p>Time Added: {new Date(task.timeAdded).toLocaleTimeString()}</p>
          <p>Finished: {task.timeFinished.toString()}</p>
        </div>
      ))}
    </div>
  );
}
