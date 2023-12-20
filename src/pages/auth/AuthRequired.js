import { Navigate } from "react-router-dom";
import { useIsLogged } from "./loginPage/LoginContext";

const AuthRequired = ({ children }) => {
  const { isLogged } = useIsLogged();
  return isLogged ? children : <Navigate to="/login" />;
};

export default AuthRequired;
