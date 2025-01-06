// src/components/MouseFollower.js
import React, { useState, useEffect } from "react";
import "./MouseFollower.css"; // CSS for the square

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // State to store cursor position

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default MouseFollower;