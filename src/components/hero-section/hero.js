import React from "react";
import "./hero.scss";
import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";

function Hero() {
  return (
    <div className="intro" id="home">
      <div className="intro-details ">
        <h1 className="details-name ">Hi, I'm Maria.</h1>
        <h2 className="details-profession ml-1">User interface designer</h2>
        <div className="d-flex mt-2 ml-2 details-social-links">
          <a target="_blank" href="https://www.behance.net/roi_mar">
            <FaBehance className="mr-3 ml-1 social-media-link" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/maria-zaytseva-63a373136/"
          >
            <FaLinkedinIn className="mr-3 social-media-link" />
          </a>
          <a target="_blank" href="https://dribbble.com/roi-mar">
            <FaDribbble />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
