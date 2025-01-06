import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className=" container p-4  d-flex justify-content-between align-items-center">
      {/* Logo */}
      <div className="logo d-flex text-light">
        <h2 className="fw-bold">KEMIT</h2>
        <h2 className="fw-normal">BRAND</h2>
      </div>
      <div>
        {/* Toggle Button */}
        <button className="talk_btn btn-outline-primary mx-2">
          LETS TALK
        </button>
        <button
          className="custom-toggle-btn"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <div className={`line ${isSidebarOpen ? "line-1-open" : ""}`}></div>
          <div className={`line ${isSidebarOpen ? "line-2-open" : ""}`}></div>
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div
        className={`sidebar bg-light p-3 position-fixed top-0 end-0 h-100 shadow ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <button
          className="btn btn-close d-block ms-auto mb-3"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        ></button>
        <nav>
          <ul className="list-unstyled">
            <li>
              <a href="#about" className="text-decoration-none text-dark">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-decoration-none text-dark">
                Our Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-decoration-none text-dark">
                Our Portfolio
              </a>
            </li>
            <li>
              <a href="#partners" className="text-decoration-none text-dark">
                Partners
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
