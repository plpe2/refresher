import { SetStateAction } from "react";

export type Task = {
  taskId: number;
  taskTitle: string;
  taskDesc: string;
  status: string;
  timeAdded: Date;
  timeFinished: Date;
  userId: number;
};

export type UpdatingTaskType = Partial<Task>;

export type CreatingTaskType = Partial<Task>;

export type StatusChangeProps = {
  taskId: number;
  changeStatus: string;
  setLoading: React.Dispatch<SetStateAction<boolean>> | undefined;
  setCardValues: React.Dispatch<SetStateAction<taskCardState>>;
};

export type StatusChangeReturnType = Promise<{
  status: boolean;
  message: string;
}>;

export type taskCardState = {
  isConfirming: boolean;
  isStatusChanging: boolean;
  passedMessage: string;
  taskAction: () => StatusChangeReturnType;
};

export type updateTaskProps = {
  isUpdating: boolean;
  UpdatingTaskValue: CreatingTaskType;
};
