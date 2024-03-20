import React from "react";
import Countdown from "react-countdown";
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
      <div className="HomeNavbar">
        <div className="HomeNavbarTitle">THE QUADRANT</div>
        <button type="submit" className="Login" onClick={login}>
          Login
        </button>
      </div>
      <div className="HomeContent">
        <div className="QuadrantTitle">We Are The Quadrant</div>
        <div className="HomeCountdownContainer">
          <div className="HomeComingSoonTitle">
            Watch This Space. Coming Soon.
          </div>
          <Countdown
            date={new Date("2024-05-01")}
            renderer={(props) => (
              <div className="QuadrantCountdown">
                {props.days} days {props.hours} hrs {props.minutes}
                {" "} mins {props.seconds} secs
              </div>
            )}
          />
        </div>

        <div className="AboutQuadrantText">
          The Quadrant is an NUS College student-run magazine that aspires to
          capture the vibrancy, creativity and diversity of our student body.
        </div>
      </div>

      <div className="HomeFooter">© 2024 THE QUADRANT</div>
    </div>
  );
}

export default Home;
