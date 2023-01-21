import { Link } from "react-router-dom";

export default function ClientNav() {
  const user = sessionStorage.getItem("loggedInUser");
  console.log(user);
  return (
    <div className="nav">
      <h1>The Training Room</h1>
      {user && (
        <>
          <h3>Welcome {user}</h3>
          <div>
            <Link to="/client/profile" className="link">
              Profile
            </Link>
            <Link to="/client/schedule" className="link">
              Schedule
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
