import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./views/Dashboard/Dashboard";
import Logout from "./views/Logout/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<AboutUs />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
