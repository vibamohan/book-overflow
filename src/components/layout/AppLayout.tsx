import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { GoogleLoginButton } from "../GoogleLoginButton";
import Navbar from "./Navbar";

export default function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <GoogleLoginButton />;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
