import React from "react";
import "./suvorov.scss";
import NavBar from "../../components/nav-bar/nav-bar";
import Footer from "../../components/footer/footer";
import hero from "../../assets/suvorov/hero.svg";
import colors from "../../assets/suvorov/colors.svg";
import type from "../../assets/suvorov/type.svg";
import home from "../../assets/suvorov/home-page.svg";
import profile from "../../assets/suvorov/profile.svg";
import mobile from "../../assets/suvorov/mobile.svg";

function Suvorov() {
  return (
    <div id="suvorov-container">
      <NavBar />
      <div id="suvorov-intro-container">
        <h1>
          <strong>Suvorov Park</strong>
        </h1>
        <h1>Website</h1>
        <p>
          This website is a platform for «Suvorov Park» homeowner association.
          The homeowners can vote, participate in forum, order services and
          contact the administration.
        </p>
        <img src={hero} id="suvorov-hero-img" />
      </div>
      <div className="suvorov-section">
        <h1 className="sub-title">Colors</h1>
        <img src={colors} id="suvorov-colors-img" />
      </div>
      <div className="suvorov-section">
        <h1 className="sub-title">Typography</h1>
        <img src={type} id="suvorov-type-img" />
      </div>
      <div className="suvorov-section">
        <h1 className="sub-title">Home Page</h1>
        <p>
          This website is a platform for «Suvorov Park» homeowner association.
          The homeowners can vote, participate in forum, order services and
          contact the administration.
        </p>
        <img src={home} className="suvorov-screens-img" />
      </div>
      <div className="suvorov-section">
        <h1 className="sub-title">Profile Page</h1>
        <p>
          This website is a platform for «Suvorov Park» homeowner association.
          The homeowners can vote, participate in forum, order services and
          contact the administration.
        </p>
        <img src={profile} className="suvorov-screens-img" />
      </div>
      <div className="suvorov-section">
        <h1 className="sub-title">Mobile</h1>
        <p>
          This website is a platform for «Suvorov Park» homeowner association.
          The homeowners can vote, participate in forum, order services and
          contact the administration.
        </p>
        <img src={mobile} id="suvorov-screens-img" />
      </div>
      <Footer />
    </div>
  );
}

export default Suvorov;
