"use client";
import { UserTypes } from "@/types/Users";
import { useState } from "react";

type UpdateType = {
  user: UserTypes;
  isUpdating: boolean;
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
    <form action={`/api/v1/users/${Data.user.id}`} method="POST">
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
