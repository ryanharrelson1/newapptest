import { createContext, useContext, useState } from "react";

interface User {
  name: string;
  username: string;
  _id: string;
  profilePic: string;
}

interface AuthContextType {
  authUser: User | null;
  setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedUser = localStorage.getItem("auth-user");
  const [authUser, setAuthUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
  console.log("user here", authUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
