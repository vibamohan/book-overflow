import { Link } from "react-router-dom";
import { signOut } from "../../services/authService";

export default function Navbar() {
  return (
    <nav className="border-b p-4 flex justify-between">
      <Link to="/">BookShare</Link>
      <Link to="/post">Post</Link>
      <button onClick={signOut}>Sign out</button>
    </nav>
  );
}
