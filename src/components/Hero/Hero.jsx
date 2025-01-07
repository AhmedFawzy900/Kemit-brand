// src/components/Hero.js
import React from "react";
import { FaArrowDown } from "react-icons/fa"; // Icon for the animation
import "./Hero.css"; // Custom CSS for styling and animations
import logo from "../../assets/logo2.png"; // Logo image
import icon from "../../assets/icon.png"; // Logo image
const Hero = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-evenly align-items-center">
      {/* Logo */}
      <div className="logo text-center">
        <img src={logo} alt="Logo" className="" />
      </div>

      {/* Tagline */}
      <div className="row  justify-content-between w-100">
        <div className="col-md-8">
          <div className="title">
            <p className="title-text ">
              This is <span className="fw-bold">KEMIT</span>BRAND
              <sup className="fw-bold ">
                TM
              </sup>
            </p>
          </div>
          <div className="description">
            <p>We redefine perceptions by creating <br/> powerful brands that tell inspiring <br/> stories deserving to be shared.</p>
          </div>
        </div>
        <div className="col-md-3 d-md-flex justify-content-center align-items-center icon">
            <img src={icon} alt="icon" className="rotate" />
            <div className="text text-center">
                Scroll to <br/> <span className="fw-bold">KEMIT</span>BRAND
            </div>
        </div>
      </div>
      
      {/* Blue Line with Animation */}
      <div className="blue-line mt-5"></div>
    </section>
  );
};

export default Hero;
