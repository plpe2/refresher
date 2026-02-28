"use client";

import { handleSearchTask } from "@/hooks/api/task/task";
import useFetchTask from "@/hooks/api/task/useFetchTask";
import useSelectStatus from "@/hooks/api/task/useSelectStatus";
import useUpdatingTask from "@/hooks/api/task/useUpdatingTask";
import { CreateWindow } from "@/sections/Task/CreateTask";
import TaskCards from "@/sections/Task/TaskCards";
import TaskContainer from "@/sections/Task/TaskContainer";
import UpdateTask from "@/sections/Task/UpdateTask";
import { useState } from "react";

export default function TaskView() {
  const { taskList, setTasks } = useFetchTask();
  const { updateValues, setUpdateState } = useUpdatingTask();
  const { selectStatus, selectTransform } = useSelectStatus();

  const [isCreating, setStatusCreate] = useState<boolean>(false);
  const [layout, changeLayout] = useState<"cards" | "list">("cards");

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
                setUpdateState={setUpdateState}
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
      {updateValues.isUpdating && (
        <UpdateTask
          passedTask={updateValues.UpdatingTaskValue}
          setUpdateState={setUpdateState}
        />
      )}
    </div>
  );
}
