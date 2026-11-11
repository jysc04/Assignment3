import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();

  // Redirect users who are not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect users who do not have the required role (Member or Admin)
  if (allowedRole && user.role !== allowedRole) {
    if (user.role === "admin") {
      return <Navigate to="/admin-dashboard" replace />;
    }

    return <Navigate to="/member-dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
