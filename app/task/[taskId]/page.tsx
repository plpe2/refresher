import React from "react";

export default async function TaskView({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const taskId = (await params).taskId;
  return <div>TaskView {taskId}</div>;
}
