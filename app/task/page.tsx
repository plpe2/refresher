"use client";

import { useAuthProvider } from "@/context/jwt/auth-provider";
import { fetchingTask } from "@/hooks/api/task/task";
import { CreateWindow } from "@/sections/Task/CreateTask";
import TaskCards from "@/sections/Task/TaskCards";
import UpdateTask from "@/sections/Task/UpdateTask";
import { CreatingTaskType, Task } from "@/types/Tasks";
import { useEffect, useState } from "react";

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
        <button>Manage</button>
        <button onClick={() => setStatusCreate((prev) => !prev)}>
          Create +{" "}
        </button>
      </div>

      {/* TaskCards displaying using map function from TaskList values */}
      {taskList.map((task) => (
        <TaskCards
          key={task.taskId}
          task={task}
          setStatusUpdate={setStatusUpdate}
          UpdatingTask={UpdatingTask}
          setTaskDetails={setTaskDetails}
        />
      ))}

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
