import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function RoleProtectedRoute({ children, requiredRole }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (!authUser && !isAuthUserLoading) {
    return <Navigate to="/login" />;
  }

  if (authUser?.role !== requiredRole && !isAuthUserLoading) {
    return <Navigate to="/" />;
  }
  return children;
}
