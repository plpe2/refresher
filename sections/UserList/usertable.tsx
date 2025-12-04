"use client";
import { UserTypes } from "@/types/Users";
import Link from "next/link";
import { useState } from "react";

export default function Usertable({ users }: { users: UserTypes[] }) {
  const [usersData, setUsers] = useState(users);

  const Linkstyle = {
    textDecoration: "none",
    color: "black",
  };

  const divStyle = {
    backgroundColor: "gray",
  };

  return (
    <div>
      {usersData.map((key, i) => {
        return (
          <Link key={i} href={`user/${key.id}`} style={Linkstyle}>
            <div style={divStyle}>
              <p>Name : {key.name}</p>
              <p>Age: {key.age}</p>
              <p>Password: {key.password}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
