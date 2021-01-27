import React from "react";
import "./about-section.scss";
import profile_img from "../../assets/profile-pic 1.png";
import Contact from "../contact/contact";

const AboutSection = () => {
  return (
    <div className="about-container m-0" id="about">
      <div className="about-col-pic">
        <img src={profile_img} className="about-pic" />
      </div>
      <div className="about-col-descrp">
        <div className="descrp-container">
          <h1 className="main-header">About</h1>
          <p>
            I’m a user interface designer with a strong background in front-end
            development. When I am not designing, I draw in Procreate, do yoga
            or cook my next masterpiece.
          </p>
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
