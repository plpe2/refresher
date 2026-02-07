import React, { SetStateAction } from "react";
import { Task } from "@/types/Tasks";

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
    body: JSON.stringify({ id: userId }),
  });

  const fetchedTasks = await taskRequest.json();
  if (!fetchedTasks.status) {
    return;
  }
  setTask(fetchedTasks.taskList);
}
