import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../../utils/firebase";
import { loginRequest, registerRequest } from "./auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(({ user: authUser }) => setUser(authUser))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);

    if (password !== repeatedPassword) {
      return setError({ message: "Error: Passwords do not match" });
    }

    registerRequest(email, password, repeatedPassword)
      .then((registeredUser) => setUser(registeredUser))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  // onAuthStateChanged(auth, (usr) => {
  //   if (usr) {
  //     setUser(usr);
  //     setIsLoading(false);
  //   } else {
  //     setIsLoading(false);
  //   }
  // });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within a FavoritesProvider");
  }

  return context;
};
