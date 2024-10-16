import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../utils";
import { useAuth } from "../hooks";

export default function PrivateLayout() {
  const { user } = useAuth();

  if (!user) return <Navigate to={PATHS.LOGIN} />;

  return <Outlet />;
}
