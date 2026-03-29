"use client";

import { handleSearchTask } from "@/hooks/api/task/task";
import useFetchTask from "@/hooks/api/task/useFetchTask";
import useSelectStatus from "@/hooks/api/task/useSelectStatus";
import useUpdatingTask from "@/hooks/api/task/useUpdatingTask";
import { CreateWindow } from "@/sections/Task/CreateTask";
import SearchFilters from "@/sections/Task/SearchFilters";
import TaskCards from "@/sections/Task/TaskCards";
import TaskContainer from "@/sections/Task/TaskContainer";
import UpdateTask from "@/sections/Task/UpdateTask";
import { useState } from "react";

export default function TaskView() {
  const { taskList, setTasks, isCreating, setStatusCreate } = useFetchTask();
  const { updateValues, setUpdateState } = useUpdatingTask();

  const [layout, changeLayout] = useState<"Cards" | "List">("Cards");

  return (
    <div>
      {/* Create Window to displayed if button is clicked */}
      {isCreating && <CreateWindow setStatusCreate={setStatusCreate} />}

      <div>
        <button
          onClick={() =>
            changeLayout((prev) => (prev == "Cards" ? "List" : "Cards"))
          }
        >
          {layout}
        </button>
        <button>Manage</button>
        <button onClick={() => setStatusCreate((prev) => !prev)}>
          Create +
        </button>

        <SearchFilters setTasks={setTasks} />
      </div>

      <TaskContainer>
        {/* TaskCards displaying using map function from TaskList values */}
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <TaskCards
              key={task.taskId}
              task={task}
              setUpdateState={setUpdateState}
              layout={layout}
            />
          ))
        ) : (
          <p>No Task to show</p>
        )}
      </TaskContainer>

      {/* 
        Update window displaying if update button is clicked
        passedTask comes from the TaskCard viewing
      */}
      {updateValues.isUpdating && (
        <UpdateTask
          passedTask={updateValues.UpdatingTaskValue}
          setUpdateState={setUpdateState}
        />
      )}
    </div>
  );
}
