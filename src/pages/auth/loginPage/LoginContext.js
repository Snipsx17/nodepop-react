import { createContext, useContext, useState } from "react";
import storageLocalHost from "../../../utils/storage";

const AuthContext = createContext(false);

export const useIsLogged = () => {
  const isLogged = useContext(AuthContext);
  return isLogged;
};

export const AuthContextProvider = ({ children, initiallyLogged }) => {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const authData = {
    isLogged,
    loginHandler: () => setIsLogged(true),
    logoutHandler: () => {
      storageLocalHost.remove("auth");
      setIsLogged(false);
    },
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
