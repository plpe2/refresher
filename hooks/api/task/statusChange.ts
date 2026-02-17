import { StatusChangeReturnType } from "@/types/Tasks";

export async function StatusChange({
  taskId,
  changeStatus,
}: {
  taskId: number;
  changeStatus: string;
}): StatusChangeReturnType {
  const updateToOngoingRequest = await fetch(
    `http://localhost:3000/api/v1/task/${taskId}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ request: "UpdatingStatus", status: changeStatus }),
    },
  );

  const updateStatusRespond = await updateToOngoingRequest.json();
  if (!updateStatusRespond.status) {
    console.log("Failed");
  }

  return updateStatusRespond;
}
