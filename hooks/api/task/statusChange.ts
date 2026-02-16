export async function TaskintoOngoing({ taskId }: { taskId: number }) {
  const updateToOngoingRequest = await fetch(
    `http://localhost:3000/api/v1/task/${taskId}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ request: "UpdatingStatus", status: "Ongoing" }),
    },
  );

  const updateStatusRespond = await updateToOngoingRequest.json();
  if (!updateStatusRespond.status) {
    console.log("Failed");
  }

  console.log(updateStatusRespond.message);
}

export async function TaskintoFinished() {
  console.log("Finished");
}

export async function TaskintoCancel() {
  console.log("Cancel");
}
