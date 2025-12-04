import Userprofile from "@/sections/UserProfile/userprofile";

export default async function UserProfile({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const req = await fetch(`http://localhost:3000/api/v1/users/${userId}`, {
    method: "GET",
  });

  const data = await req.json();
  return (
    <div>
      <Userprofile user={data}></Userprofile>
    </div>
  );
}
