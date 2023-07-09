import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    login: "",
    access: "",
    phone: "",
    hashid: "",
  });

  const signin = (newUser, cb) => {
    setUser(newUser);
    cb();
  };
  const signout = (cb) => {
    setTimeout(() => {
      setUser({ id: "", login: "", access: "", phone: "", hashid: "" });
    }, 1000);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
