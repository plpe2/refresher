"use client";
import { UserTypes } from "@/types/Users";
import Link from "next/link";
import { SetStateAction, useState } from "react";

const handleDelete = async (
  e: React.FormEvent<HTMLFormElement>,
  id: number
) => {
  e.preventDefault();

  const delSelectedUser = await fetch(
    `http://localhost:3000/api/v1/users/${id}`,
    {
      method: "DELETE",
      body: JSON.stringify(id),
    }
  );

  const response = await delSelectedUser.json();

  alert(response.message);
  window.location.href = response.redirect;
};

const ModalElement = ({
  delId,
  isShown,
  setDelUser,
}: {
  delId: number;
  isShown: boolean;
  setDelUser: React.Dispatch<
    SetStateAction<{
      id: number;
      isShown: boolean;
    }>
  >;
}) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "20%",
        textAlign: "center",
        display: isShown ? "block" : "none",
      }}
    >
      <p>Confirm Deleting this user?</p>
      <form
        onSubmit={(e) => {
          handleDelete(e, delId);
        }}
      >
        <input type="text" defaultValue={delId} hidden />
        <button type="submit">Yes, Delete</button>
        <button
          onClick={() => {
            setDelUser({ id: 0, isShown: false });
          }}
          type="button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default function Usertable({ users }: { users: UserTypes[] }) {
  const [usersData, setUsers] = useState(users);
  const [delUser, setDelUser] = useState({
    id: 0,
    isShown: false,
  });

  const Linkstyle = {
    textDecoration: "none",
    color: "black",
  };

  const divStyle = {
    backgroundColor: "gray",
    display: "flex",
    margin: "2px",
  };

  return (
    <div>
      <ModalElement
        delId={delUser.id}
        isShown={delUser.isShown}
        setDelUser={setDelUser}
      />
      {usersData.map((key, i) => {
        return (
          <div key={i} style={{ width: "20%" }}>
            <div style={divStyle}>
              <div style={{ width: "80%" }}>
                <p>Name : {key.name}</p>
                <p>Age: {key.age}</p>
                <p>Password: {key.password}</p>
              </div>
              <div style={{ width: "20%" }}>
                <Link href={`user/${key.id}`} style={Linkstyle}>
                  <button
                    style={{
                      height: "30%",
                      backgroundColor: "green",
                      marginTop: "20px",
                      color: "white ",
                      border: "solid 1px white",
                      borderRadius: "5px",
                    }}
                  >
                    Update
                  </button>
                </Link>
                <button
                  style={{
                    height: "30%",
                    backgroundColor: "red",
                    marginTop: "20px",
                    color: "white ",
                    border: "solid 1px white",
                    borderRadius: "5px",
                  }}
                  onClick={() => {
                    setDelUser({
                      ...delUser,
                      isShown: !delUser.isShown,
                      id: key.id,
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
