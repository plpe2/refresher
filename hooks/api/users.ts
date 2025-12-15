import { inputValidationTypes } from "@/types/Users";

export const handleDelete = async (
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

export const handleRegister = async ({
  e,

  setStatus,
}: {
  e: React.FormEvent<HTMLFormElement>;
  setStatus: React.Dispatch<React.SetStateAction<inputValidationTypes>>;
}) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const nameValue = formData.get("Name")?.valueOf() as string;
  const ageValue = formData.get("Age")?.valueOf() as number;
  const passwordValue = formData.get("Password")?.valueOf() as string;
  const cpasswordValue = formData.get("CPassword")?.valueOf() as string;

  const nameValidation = nameValue === "" || nameValue.length <= 6;
  const ageValidation = ageValue <= 0;
  const passwordValidation = passwordValue.length <= 7;
  const cpasswordValidation =
    cpasswordValue !== passwordValue || cpasswordValue === "";

  if (cpasswordValidation) {
    setStatus((prev) => ({ ...prev, CPassword: false }));
  }

  if (passwordValidation) {
    setStatus((prev) => ({ ...prev, Password: false }));
  }

  if (ageValidation) {
    setStatus((prev) => ({ ...prev, Age: false }));
  }

  if (nameValidation) {
    setStatus((prev) => ({ ...prev, Name: false }));
  }

  if (
    !(
      nameValidation ||
      ageValidation ||
      passwordValidation ||
      cpasswordValidation
    )
  ) {
    const registerRequest = await fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      body: JSON.stringify({ nameValue, ageValue, passwordValue }),
    });
    const registerResponse = await registerRequest.json();

    alert(registerResponse.message);
    window.location.href = registerResponse.redirect;
  }

  // return console.log({ name: inputValidation.Name, namefield: nameValue });
};

export const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("Name");
  const password = formData.get("Password");

  const loginRequest = await fetch("http://localhost:3000/api/v1/login/", {
    method: "POST",
    body: JSON.stringify({ name, password }),
  });

  const loginResponse = await loginRequest.json();
  window.location.href = loginResponse.redirect;
};
