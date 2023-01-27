
import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const logIn = (newUser: any, callback: any) => {
    setUser(newUser);
    callback();
  };

  const logOut = (callback: any) => {
    setUser(null);
    callback();
  };

  const value = { user, logIn, logOut } as any;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};