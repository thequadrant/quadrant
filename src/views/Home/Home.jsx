import React from "react";
import { signInWithGoogle } from "../../services/authentication";
import "./Home.css";

function Home() {
  const login = () => {
    signInWithGoogle();
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
