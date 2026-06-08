"use client";

import { handleSearchTask } from "@/hooks/api/task/task";
import useFetchTask from "@/hooks/api/task/useFetchTask";
import useSelectStatus from "@/hooks/api/task/useSelectStatus";
import useUpdatingTask from "@/hooks/api/task/useUpdatingTask";
import { CreateWindow } from "@/features/Task/CreateTask";
import SearchFilters from "@/features/Task/SearchFilters";
import TaskCards from "@/features/Task/TaskCards";
import TaskContainer from "@/features/Task/TaskContainer";
import UpdateTask from "@/features/Task/UpdateTask";
import { useState } from "react";

export default function TaskView() {
  const { taskList, setTasks, isCreating, setStatusCreate, updateValues, setUpdateState } = useFetchTask();

  const [layout, changeLayout] = useState<"cards" | "list">("cards");

  return (
    <div>
      {/* Create Window to displayed if button is clicked */}
      {isCreating && <CreateWindow setStatusCreate={setStatusCreate} />}

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
          Create +
        </button>

        <SearchFilters setTasks={setTasks} />
      </div>

      {
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
      }


    </div>
  );
}
