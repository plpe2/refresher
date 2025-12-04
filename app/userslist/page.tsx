import Usertable from "@/sections/UserList/usertable";

export default async function UserList() {
  const req = await fetch("http://localhost:3000/api/v1/users", {
    method: "GET",
  });

  const usersData = await req.json();
  return (
    <div>
      <Usertable users={usersData} />
    </div>
  );
}
