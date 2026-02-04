export async function handleCreateTask({
  e,
  id,
}: {
  e: React.FormEvent<HTMLFormElement>;
  id: number;
}) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const taskTitle = formData.get("Title");
  const taskBody = formData.get("Body");

  const createRequest = await fetch(`http://localhost:3000/api/v1/task/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: taskTitle, body: taskBody }),
  });

  const createResponse = await createRequest.json();

  if (!createResponse.status) {
    console.log("Error creating task");
  } else {
    console.log("Created");
  }

  window.location.href = "http://localhost:3000/task";
}
