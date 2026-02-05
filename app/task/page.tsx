"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { CreateWindow } from "@/sections/Task/CreateTask";
import UpdateTask from "@/sections/Task/UpdateTask";
import { Task } from "@/types/Tasks";
import { useEffect, useState } from "react";

export type UpdatingTaskType = {
  taskId: number;
  taskTitle: string;
  taskDesc: string;
  ownerId: number;
};

export default function TaskView() {
  const userData = useAuthProvider();
  const [taskList, setTasks] = useState<Task[]>([]);
  const [isCreating, setStatusCreate] = useState<boolean>(false);
  const [isUpdating, setStatusUpdate] = useState<boolean>(false);
  const [UpdatingTask, setTaskDetails] = useState({
    taskId: 0,
    taskTitle: "",
    taskDesc: "",
    ownerId: 0,
  });

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
      {isCreating && <CreateWindow setStatusCreate={setStatusCreate} />}
      <div>
        <button>Manage</button>
        <button onClick={createTask}>Create + </button>
      </div>
      <p>Task View</p>

      <p>Status: {isCreating ? "creating task" : "not creating task"}</p>
      {taskList.map((task) => {
        return (
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
            <h4>{task.taskTitle}</h4>
            <p>- {task.taskDesc}</p>
            <p>Status: {task.status}</p>
            <p>Date Added: {new Date(task.timeAdded).toLocaleDateString()}</p>
            <p>Time Added: {new Date(task.timeAdded).toLocaleTimeString()}</p>
            <p>Finished: {task.timeFinished.toString()}</p>
            <button
              style={{ float: "right", padding: "10px" }}
              onClick={() => {
                setStatusUpdate((prev) => !prev);
                setTaskDetails({
                  ...UpdatingTask,
                  taskId: task.taskId,
                  taskTitle: task.taskTitle,
                  taskDesc: task.taskDesc,
                  ownerId: task.ownerId,
                });
              }}
            >
              Update
            </button>
          </div>
        );
      })}
      {isUpdating && (
        <UpdateTask
          passedTask={UpdatingTask}
          setStatusUpdate={setStatusUpdate}
        />
      )}
    </div>
  );
}
