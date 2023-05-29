import React from "react";
import "./Feedback.css";
import Feedbackimg from "../assets/feedback.png";
import sam from "../assets/sam.png";

function Feedback() {
  return (
    <section>
      <div className="fee">
        <div className="feedimg">
          <img src={Feedbackimg} alt="quiz" height={300} />
        </div>
        <div className="feed">
          <h2>
            Please We Need Your <span>Feedback</span>
          </h2>
          <form action="" method="Post">
            <input type="text" name="Name" id="name" placeholder="Your Name" />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Your EMail address..."
            />
            <input
              type="tel"
              name="Number"
              id="number"
              placeholder="Your Phone Number.."
            />
            <input
              type="text"
              name="Message"
              id="message"
              placeholder="Feedback please..."
              cols={60}
            />
            <input className="sub" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
