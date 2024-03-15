import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import { auth } from "../services/authentication";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthed(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={useMemo(() => isAuthed, [isAuthed])}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
