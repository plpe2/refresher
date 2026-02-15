export default function ValidationWindow({
  changeConfirming,
  message,
  // onSubmitFunction,
}: {
  changeConfirming: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  // onSubmitFunction: () => void;
}) {
  return (
    <div
      style={{
        backgroundColor: "teal",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "5%",
      }}
    >
      <h3>
        Are you sure you want to
        <br /> put Task into {message}?
      </h3>
      <button onClick={() => changeConfirming((prev) => !prev)}>
        Yes, put <br /> Task into {message}
      </button>
      <button onClick={() => changeConfirming((prev) => !prev)}>
        Do not put <br /> Task into {message}
      </button>
    </div>
  );
}
