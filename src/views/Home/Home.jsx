import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../services/authentication";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const login = () => {
    signInWithGoogle().then((user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="HomeContainer">
      <div className="QuadrantTitle">The Quadrant</div>
      <div className="ComingSoonTitle">coming soon...</div>
      <div className="AboutQuadrantText">
        The Quadrant is an NUS College student-run magazine that aspires to
        capture the vibrancy, creativity and diversity of our student body.
      </div>
      <button type="submit" className="AdminLogin" onClick={login}>
        Admin Login
      </button>
    </div>
  );
}

export default Home;
