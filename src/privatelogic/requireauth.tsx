import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authprovider";
export const RequireAuth = ({ children }: any) => {
  const auth = useContext(AuthContext);
  if (!auth.user) {
    return <Navigate to="/loginform" />;
  }
  return children;
};