"use client";
import { UserTypes } from "@/types/Users";
import { redirect } from "next/navigation";
import React, { useState } from "react";

type UpdateType = {
  user: UserTypes;
  isUpdating: boolean;
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //prevent Submission of form
  e.preventDefault();

  //Getting the form values from input fields
  const formData = new FormData(e.currentTarget);

  //Initialize the fields from formData
  const id = formData.get("id");
  const name = formData.get("name");
  const age = formData.get("age");
  const password = formData.get("password");

  //fetch for POST new user data
  const request = await fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "POST",
    body: JSON.stringify({ name, age, password }),
  });

  //fetch the return value of redirection url and message
  const response = await request.json();

  alert(response.message);

  setTimeout(() => {
    redirect(response.redirect);
  }, 1.5);
};

const Updatefields = ({ Data }: { Data: UpdateType }) => {
  const formField = () => {
    if (!Data.isUpdating) {
      return (
        <>
          <p>Name: {Data.user.name}</p>
          <p>Age : {Data.user.age}</p>
          <p>Password: {Data.user.password}</p>
        </>
      );
    } else {
      return (
        <>
          <input type="text" name="id" defaultValue={Data.user.id} hidden />
          <p>
            Name:
            <input type="text" name="name" defaultValue={Data.user.name} />
          </p>
          <p>
            Age:
            <input type="text" name="age" defaultValue={`${Data.user.age}`} />
          </p>
          <p>
            Password:
            <input
              type="text"
              name="password"
              defaultValue={Data.user.password}
            />
          </p>
        </>
      );
    }
  };

  return (
    <form
      action={`/api/v1/users/${Data.user.id}`}
      method="POST"
      onSubmit={handleSubmit}
    >
      {formField()}
      {Data.isUpdating ? (
        <button type="submit">Save Changes</button>
      ) : (
        <button type="submit" disabled>
          Save Changes
        </button>
      )}
    </form>
  );
};

export default function Userprofile({ user }: { user: UserTypes }) {
  const [userData, setUser] = useState<UpdateType>({
    user: user,
    isUpdating: false,
  });

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setUser({ ...userData, isUpdating: !userData.isUpdating })
        }
      >
        {!userData.isUpdating ? "Update" : "View"}
      </button>
      <Updatefields Data={userData} />
    </div>
  );
}
