import React, { useEffect, createContext, useContext, useState } from "react";
import { auth } from "../services/authentication";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isAuthed }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
