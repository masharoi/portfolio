import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/nav-bar/nav-bar";

import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import AboutSection from "./components/about-section/about-section";
import WorkSection from "./components/work-section/work-section";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="container-main">
      <NavBar />
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

      <AboutSection />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default App;
