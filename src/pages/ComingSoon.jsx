import React from "react";
import "./ComingSoon.css"; // Import your CSS file for styling
import logo from "../assets/KB Icon.svg";
import bar from "../assets/Bar.svg";
const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <img src={logo} alt="" width={100} height={100} />
      <h1>COMING SOON</h1>
      <div className="notify-section w-full">
        <h6>GET NOTIFIED WHEN IT'S READY</h6>
        <div
          className="input-group bar-btn"
          style={{ position: "relative",}}
        >
          <img
            src={bar}
            alt="Bar Background"
            width="600"
            height="80"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              "@media (max-width: 768px)": {
                width: "300px",
              },
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              width: "70%", // Adjust width to fit inside
              height: "60%",
              border: "none",
              outline: "none",
              zIndex: 2,
            }}
          />

          <button
            className="btn"
            type="button"
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              height: "60%",
              border: "none",
              cursor: "pointer",
              zIndex: 2,
              color: "white",
            }}
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
