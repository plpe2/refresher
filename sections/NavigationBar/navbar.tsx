const NavbarStyle = {};

export default function navbar() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "8vh",
        marginBottom: "1.5%",
        borderRadius: "0 0 10px 10px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <div style={{ display: "flex", width: "90%" }}>
        <div style={{ display: "flex" }}>
          <p>Home</p>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div style={{ display: "flex" }}>
          <ul>About Us</ul>
          <ul>Contact Us</ul>
          <ul>Login/Register</ul>
        </div>
      </div>
    </div>
  );
}
