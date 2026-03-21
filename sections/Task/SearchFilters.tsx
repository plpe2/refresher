import { handlePaginationTask, handleSearchTask } from "@/hooks/api/task/task";
import useFetchTask from "@/hooks/api/task/useFetchTask";
import useSelectStatus from "@/hooks/api/task/useSelectStatus";
import { Task } from "@/types/Tasks";
import React, { SetStateAction, useEffect, useState } from "react";

export default function SearchFilters({
  setTasks,
}: {
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
}) {
  const { selectTransform, selectStatus } = useSelectStatus();
  const [pagination, setPaginationValue] = useState<number>(1);

  const decreasePagination = () => {
    setPaginationValue((prev) => prev - 1);
  };

  useEffect(() => {
    handlePaginationTask;
  }, [pagination]);

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

      {pagination}
      <form
      // onSubmit={(e) => {
      //   handlePaginationTask({ e, setPaginationValue });
      // }}
      >
        <button type="submit">{pagination <= 1 ? 1 : pagination - 10}</button>
        <input
          type="text"
          defaultValue={pagination}
          name="PaginationValue"
          onSubmit={(e) => {
            setPaginationValue(parseInt(e.currentTarget.value));
            e.preventDefault();
          }}
        />
        <button type="submit" name="increasePagination" value={pagination + 1}>
          {pagination + 1}
        </button>
      </form>
    </div>
  );
}
