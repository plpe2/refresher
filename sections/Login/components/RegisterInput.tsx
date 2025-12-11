import { inputValidationTypes } from "../Register";

type FieldName = "Name" | "Age" | "Password" | "CPassword";

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
      <p>{type != "CPassword" ? type : "Confirm Password"}:</p>
      <input
        type="text"
        name={type}
        onClick={() => setStatus({ ...inputValidation, [type]: true })}
      />
      <p
        style={{
          color: "red",
          display: !inputValidation[type] ? "block" : "none",
        }}
      >
        {type != "CPassword" ? type : "Confirm Password"} is required!
      </p>
    </>
  );
}
