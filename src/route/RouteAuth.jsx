import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/context";

export default function RouteAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}
