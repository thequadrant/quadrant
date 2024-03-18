import React, { useEffect, createContext, useContext, useState } from "react";
import { auth } from "../services/authentication";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(true);
  const [authedUser, setAuthedUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthed(true);
        setAuthedUser(user);
      } else {
        setIsAuthed(false);
        setAuthedUser(null);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isAuthed, authedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
