import { handleSearchTask } from "@/hooks/api/task/task";
import useFetchTask from "@/hooks/api/task/useFetchTask";
import useSelectStatus from "@/hooks/api/task/useSelectStatus";
import { Task } from "@/types/Tasks";
import React, { SetStateAction } from "react";

export default function SearchFilters({
  setTasks,
}: {
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
}) {
  const { selectTransform, selectStatus } = useSelectStatus();

  return (
    <div>
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
  );
}
