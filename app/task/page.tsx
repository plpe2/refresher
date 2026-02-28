"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { fetchingTask, handleSearchTask } from "@/hooks/api/task/task";
import useSelectStatus from "@/hooks/api/task/useSelectStatus";
import { CreateWindow } from "@/sections/Task/CreateTask";
import TaskCards from "@/sections/Task/TaskCards";
import TaskContainer from "@/sections/Task/TaskContainer";
import UpdateTask from "@/sections/Task/UpdateTask";
import { CreatingTaskType, Task } from "@/types/Tasks";
import React, { FormEvent, useEffect, useState } from "react";

export default function TaskView() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);
  const [isCreating, setStatusCreate] = useState<boolean>(false);
  const [isUpdating, setStatusUpdate] = useState<boolean>(false);
  const [UpdatingTask, setTaskDetails] = useState<CreatingTaskType>({
    taskId: 0,
    taskTitle: "",
    taskDesc: "",
    userId: 0,
  });

  const [layout, changeLayout] = useState<"cards" | "list">("cards");

  const { selectStatus, setStatus, selectTransform } = useSelectStatus();

  // fetching task using hook
  useEffect(() => {
    var userId = userData?.user?.id;
    fetchingTask({ userId: userId, setTask: setTasks });
  }, [userData]);

  return (
    <div>
      {/* Create Window to displayed if button is clicked */}
      {isCreating && <CreateWindow setStatusCreate={setStatusCreate} />}

      <p>Task View</p>
      <div>
        <button
          onClick={() =>
            changeLayout((prev) => (prev == "cards" ? "list" : "cards"))
          }
        >
          {layout == layout ? "Card" : "List"}
        </button>
        <button>Manage</button>
        <button onClick={() => setStatusCreate((prev) => !prev)}>
          Create +{" "}
        </button>

        <form onSubmit={(e) => handleSearchTask({ e, setTask: setTasks })}>
          <p>Search</p>
          <select name="filter" onChange={(e) => selectTransform(e)}>
            <option value="taskTitle">Title</option>
            <option value="taskDesc">Body</option>
            <option value="Status">Status</option>
          </select>
          {selectStatus ? (
            <select name="taskStatus">
              <option value="Ongoing">Ongoing</option>
              <option value="Finished">Finished</option>
              <option value="Cancel">Cancelled</option>
            </select>
          ) : (
            <input type="text" name="searchValue" />
          )}
          <button type="submit">Go</button>
        </form>
      </div>

      {
        <TaskContainer>
          {/* TaskCards displaying using map function from TaskList values */}
          {taskList.length > 0 ? (
            taskList.map((task) => (
              <TaskCards
                key={task.taskId}
                task={task}
                setStatusUpdate={setStatusUpdate}
                UpdatingTask={UpdatingTask}
                setTaskDetails={setTaskDetails}
                layout={layout}
              />
            ))
          ) : (
            <p>No Task to show</p>
          )}
        </TaskContainer>
      }

      {/* 
        Update window displaying if update button is clicked
        passedTask comes from the TaskCard viewing
      */}
      {isUpdating && (
        <UpdateTask
          passedTask={UpdatingTask}
          setStatusUpdate={setStatusUpdate}
        />
      )}
    </div>
  );
}
