import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heroimg from "../assets/her.png";
import sam from "../assets/sam.png";
import "./hero.css";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="sam1" style={{ display: "flex", justifyContent: "end" }}>
        <img src={sam} alt="" height={100} />
      </div>
      <div className="hero">
        <div className="heroimg">
          <img src={Heroimg} alt="samquiz" height={300} />
        </div>

        <div className="hero1">
          <h1>
            Welcome to <span>SamQuiz</span>
          </h1>
          <p>Are you ready to play</p>
          <button onClick={openPopup}>play now</button>
        </div>

        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Guild</h2>
              <p>How to start the Quiz:</p>
              <ul>
                <li>Rule 1: Choose a course</li>
                <li>Rule 2: click on the course you want</li>
                <li>Rule 3: Click the Quiz On button to continue</li>
              </ul>
              <div className="popup-buttons">

                <button
                  onClick={closePopup}
                  style={{
                    background: "rgb(172,18,18)",
                    color: "rgb(222,222,222)",
                  }}
                >
                  Cancel
                </button>

                <Link to="/">
                  {" "}
                  <button
                    onClick={closePopup}
                    style={{
                      background: "rgb(67,104,159)",
                      color: "rgb(222,222,222)",
                    }}
                  >
                    Continue
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="sam">
        <img src={sam} alt="" height={100} />
      </div>
    </section>
  );
}

export default Hero;
