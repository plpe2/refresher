"use client";
import { UserTypes } from "@/types/Users";
import { useState } from "react";

export default function Userprofile({ user }: { user: UserTypes }) {
  const [userData, setUser] = useState(user);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Age : {userData.age}</p>
      <p>Password: {userData.password}</p>
    </div>
  );
}
