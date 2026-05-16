import { inputValidationTypes, UserRegValues } from "@/types/Users";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/router";

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
  data: UserRegValues,
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
  e,
  setStatus,
}: {
  e: React.FormEvent<HTMLFormElement>;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("Name")?.valueOf() as string;
  const password = formData.get("Password")?.valueOf() as string;

  const nameValue = name.length <= 0;
  const passValue = password.length <= 0;

  if (nameValue || passValue) {
    setStatus(true);
  }

  const loginRequest = await fetch("http://localhost:3000/api/v1/login/", {
    method: "POST",
    body: JSON.stringify({ name, password }),
  });

  const loginResponse = await loginRequest.json();
  if (loginResponse.status != "success") {
    setStatus(true);
    return console.log("gello");
  }

  setStatus(false);
  localStorage.setItem("token", loginResponse.token);
  window.location.href = loginResponse.redirect;
};
