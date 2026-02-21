import { StatusChangeProps, StatusChangeReturnType } from "@/types/Tasks";

//
export async function StatusChange({
  taskId,
  changeStatus,
  setLoading,
  setCardValues,
}: StatusChangeProps): StatusChangeReturnType {
  setLoading?.(true);
  try {
    const updateToOngoingRequest = await fetch(
      `http://localhost:3000/api/v1/task/${taskId}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          request: "UpdatingStatus",
          status: changeStatus,
        }),
      },
    );

    const updateStatusRespond = await updateToOngoingRequest.json();
    if (!updateStatusRespond.status) {
      console.log("Failed");
    }

    // Potential to be removed but will retain if Loading display is created
    setCardValues((prev) => ({
      ...prev,
      isConfirming: !prev.isConfirming,
    }));

    return updateStatusRespond;
  } finally {
    setLoading?.(false);
  }
}
