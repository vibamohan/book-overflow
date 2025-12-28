import { Link } from "react-router-dom";
import { signOut } from "../../services/authService";

export default function Navbar() {
  return (
    <nav className="border-b p-5 flex justify-between">
      <Link to="/">BookShare</Link>
      <Link to="/post">Post</Link>
      <Link to="/listings">Listings</Link>
      <button onClick={signOut}>Sign out</button>
    </nav>
  );
}
