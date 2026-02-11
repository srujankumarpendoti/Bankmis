import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const user = localStorage.getItem("user");

  // 🔥 If user not exists → redirect immediately
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
