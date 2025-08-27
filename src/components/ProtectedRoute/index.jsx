import { Navigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";

export const PrivateRoute=({children})=>{
  const { token } = useLogin();

    if (!token.access_token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}