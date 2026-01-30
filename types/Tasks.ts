export type Task = {
  taskId: number;
  title: string;
  body: string;
  status: string;
  timeAdded: Date;
  timeFinished: Date;
  ownerId: number;
};
