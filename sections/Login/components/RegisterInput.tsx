import { inputValidationTypes } from "../Register";

type FieldName = "Name" | "Age" | "Password";

export default function RegisterInput({
  type,
  inputValidation,
  setStatus,
}: {
  type: FieldName;
  inputValidation: inputValidationTypes;
  setStatus: React.Dispatch<React.SetStateAction<inputValidationTypes>>;
}) {
  return (
    <>
      <p>{type}:</p>
      <input
        type="text"
        name={type}
        onClick={() => setStatus({ ...inputValidation, [type]: false })}
      />
      <p
        style={{
          color: "red",
          display: inputValidation[type] ? "block" : "none",
        }}
      >
        {type} is required!
      </p>
    </>
  );
}
