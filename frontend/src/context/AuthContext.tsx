import { ReactNode, createContext, useState } from "react";
import { loginApi } from "../services/api";

type User = {
  name: string;
  email: string;
  // password: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
};
//creating context
const AuthContext = createContext<UserAuth | null>(null);

export const GlobalAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email: string, password: string) => {
    const data = await loginApi(email, password);
    console.log(data, "data");
    if (data) {
      setUser({ email: data?.email, name: data?.name });
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    console.log("hi");
  };
  const signup = async (email: string, password: string) => {
    console.log(email, password, "in signup");
  };
  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
