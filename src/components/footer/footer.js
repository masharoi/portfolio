import React from "react";
import "./footer.scss";
import { FaBehance, FaDribbble, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container d-flex flex-column">
      <p>Let's connect! </p>
      <div className="d-flex mt-2 footer-social-links">
        <a target="_blank" href="https://www.behance.net/roi_mar">
          <FaBehance className="mr-3 ml-1" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/maria-zaytseva-63a373136/"
        >
          <FaLinkedinIn className="mr-3" />
        </a>
        <a target="_blank" href="https://dribbble.com/roi-mar">
          <FaDribbble />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
