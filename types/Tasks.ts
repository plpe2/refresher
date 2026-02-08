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
