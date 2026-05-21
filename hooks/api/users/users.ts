import { RegValType } from "@/sections/Login/Register";
import { LoginValues } from "@/types/Users";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleDelete = async (
  e: React.FormEvent<HTMLFormElement>,
  id: number,
) => {
  e.preventDefault();

  const delSelectedUser = await fetch(
    `http://localhost:3000/api/v1/users/${id}`,
    {
      method: "DELETE",
      body: JSON.stringify(id),
    },
  );

  const response = await delSelectedUser.json();

  alert(response.message);
  window.location.href = response.redirect;
};

export const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  window.location.href = response.redirect;
};

export const handleRegister = async (
  data: RegValType,
  router: AppRouterInstance,
) => {
  const registerRequest = await fetch(`http://localhost:3000/api/v1/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const registerResponse = await registerRequest.json();

  alert(registerResponse.message);
  router.replace(registerResponse.redirect);
};

export const handleLogin = async ({
  data,
  setStatus,
  setAttempt,
}: {
  data: LoginValues;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setAttempt: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const loginRequest = await fetch("http://localhost:3000/api/v1/login/", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const loginResponse = await loginRequest.json();
  if (!loginResponse.status) {
    setAttempt(false);
    return;
  }

  setStatus(false);
  localStorage.setItem("token", loginResponse.token);
  window.location.href = loginResponse.redirect;
};
