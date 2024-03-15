import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

function PrivateRoutes() {
  const { isAuthed } = useAuth();

  return isAuthed ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
