import React, { SetStateAction } from "react";
import { Task } from "@/types/Tasks";
import { useAuthProvider } from "@/context/jwt/auth-provider";

//function that displays the task in Viewing Task page
export async function fetchingTask({
  userId,
  setTask,
}: {
  userId: number | undefined;
  setTask: React.Dispatch<SetStateAction<Task[]>>;
}) {
  if (!userId) return;
  const taskRequest = await fetch(`http://localhost:3000/api/v1/task/`, {
    method: "POST",
    body: JSON.stringify({ userId: userId }),
  });

  const fetchedTasks = await taskRequest.json();
  if (!fetchedTasks.status) {
    return;
  }
  setTask(fetchedTasks.taskList);
}

//----------------------------------------------------------------------

// function that calls when creating Task
export async function handleCreateTask({
  e,
  id,
}: {
  e: React.FormEvent<HTMLFormElement>;
  id: number;
}) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const taskTitle = formData.get("Title");
  const taskBody = formData.get("Body");

  const createRequest = await fetch(`http://localhost:3000/api/v1/task/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: taskTitle, body: taskBody }),
  });

  const createResponse = await createRequest.json();

  if (!createResponse.status) {
    console.log("Error creating task");
  } else {
    console.log("Created");
  }

  window.location.href = "http://localhost:3000/task";
}

//----------------------------------------------------------------------

// function that handles the updates the task
export async function handleUpdateTask({
  e,
  userId,
}: {
  e: React.FormEvent<HTMLFormElement>;
  userId: number | undefined;
}) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const newTaskTitle = formData.get("newTitle");
  const newTaskBody = formData.get("newBody");

  const updateTaskRequest = await fetch(
    `http://localhost:3000/api/v1/task/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ newTaskTitle, newTaskBody }),
    },
  );

  const updateTaskResponse = await updateTaskRequest.json();

  // Handle Unsuccessful Update of Task
  if (!updateTaskResponse.status) {
    return;
  }

  // Handle Displaying of Toast before relocating the page
  window.location.href = updateTaskResponse.redirect;
}
