"use client";
import React, { SetStateAction } from "react";
import { Task } from "@/types/Tasks";
import { taskValTypes } from "@/sections/Task/CreateTask";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
    method: "GET",
  });

  const fetchedTasks = await taskRequest.json();
  if (!fetchedTasks.status) {
    return;
  }
  setTask(fetchedTasks.taskList);
}

//--------------------------------------------------------------------------------------------------------------------------------------------

// function that calls when creating Task
export async function handleCreateTask(
  id: number,
  data: taskValTypes,
  router: AppRouterInstance,
) {
  const createRequest = await fetch(`http://localhost:3000/api/v1/task/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const createResponse = await createRequest.json();

  if (!createResponse.status) {
    console.log("Error creating task");
  }
  console.log("Created");

  // router.replace("/task");
  window.location.href = "/task";
}

//--------------------------------------------------------------------------------------------------------------------------------------------

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
  const taskId = formData.get("taskId");
  const newTaskTitle = formData.get("newTitle");
  const newTaskBody = formData.get("newBody");

  const updateTaskRequest = await fetch(
    `http://localhost:3000/api/v1/task/${taskId}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        request: "UpdatingTask",
        newTaskTitle,
        newTaskBody,
      }),
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

//--------------------------------------------------------------------------------------------------------------------------------------------

// function that handles Searching Task
export async function handleSearchTask({
  e,
  setTask,
}: {
  e: React.FormEvent<HTMLFormElement>;
  setTask: React.Dispatch<SetStateAction<Task[]>>;
}) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  let filter;
  let searchValue;

  const formFilterValue = formData.get("filter")?.toString();
  const formsearchValue = formData.get("searchValue")?.toString();
  const formTaskStatus = formData.get("taskStatus")?.toString();

  if (formTaskStatus && formTaskStatus.length > 0) {
    filter = "status";
    searchValue = formTaskStatus;
  } else {
    filter = formFilterValue;
    searchValue = formsearchValue;
  }

  const urlParams = new URLSearchParams({
    filter: filter || "",
    searchValue: searchValue || "",
  });

  const searchRequest = await fetch(
    `http://localhost:3000/api/v1/task?${urlParams.toString()}`,
    {
      method: "GET",
    },
  );

  const searchRespond = await searchRequest.json();
  setTask(searchRespond.taskList);
}

//--------------------------------------------------------------------------------------------------------------------------------------------

// function that handles Pagination on displayed Task
export async function handlePaginationTask({
  e,
  setPaginationValue,
}: {
  e: React.FormEvent<HTMLFormElement>;
  setPaginationValue: React.Dispatch<SetStateAction<number>>;
}) {
  // e.preventDefault();

  // const formData = new FormData(e.currentTarget);
  // const PaginationValue = formData.get("PaginationValue")?.toString();

  console.log("hello");
}
