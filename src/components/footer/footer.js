import React from "react";
import "./footer.scss";
import Contact from "../contact/contact";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h2 className="secondary-header">Connect</h2>
        <div className="footer-social-links">
          <a
            className="social-link"
            target="_blank"
            href="https://www.behance.net/roi_mar"
          >
            Behance
          </a>
          <a
            className="social-link"
            target="_blank"
            href="https://www.linkedin.com/in/maria-zaytseva-63a373136/"
          >
            Linkedin
          </a>
          <a
            className="social-link"
            target="_blank"
            href="https://dribbble.com/roi-mar"
          >
            Dribbble
          </a>
          <a
            className="social-link"
            target="_blank"
            href="https://github.com/masharoi"
          >
            Github
          </a>
        </div>
      </div>
      <Contact className="footer-section" />
    </div>
  );
};

export default Footer;
