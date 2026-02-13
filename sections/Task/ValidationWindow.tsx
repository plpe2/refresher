export default function ValidationWindow({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
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
      <h3>Window validation</h3>
      <p>Are you sure want to `message`</p>
      <button>Yes `message`</button>
      <button onClick={() => setStatus((prev) => !prev)}>
        No cancel `message`
      </button>
    </div>
  );
}
