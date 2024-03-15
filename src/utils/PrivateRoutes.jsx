import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../services/authentication";

function PrivateRoutes() {
  return auth != null ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoutes;
