import { updateTaskProps } from "@/types/Tasks";
import { useState } from "react";

export default function useUpdatingTask() {
  const [updateValues, setUpdateState] = useState<updateTaskProps>({
    isUpdating: false,
    UpdatingTaskValue: {
      taskId: 0,
      taskTitle: "",
      taskDesc: "",
      userId: 0,
    },
  });

  return { updateValues, setUpdateState };
}
