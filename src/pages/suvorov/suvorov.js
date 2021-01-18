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
import {SiReact, SiFigma} from "react-icons/si";

function Suvorov() {
  return (
    <div id="suvorov-container">
      <NavBar />
      <div id="suvorov-intro-container">
        <div id="intro-details">
          <h1>
            <strong>Suvorov Park Website</strong>
          </h1>
          <div className="intro-subsection">
            <h3>
              <strong>Timeline</strong>
            </h3>
            <h3>July - September 2019</h3>
          </div>
          <div className="intro-subsection">
            <h3>
              <strong>Role</strong>
            </h3>
            <h3>Web design & development </h3>
          </div>
          <div className="intro-subsection">
            <h3>
              <strong>Tools</strong>
            </h3>
            <SiReact className="icon" />
            <SiFigma className="icon" />
          </div>
          <div className="intro-subsection">
            <a
              target="_blank"
              href="https://github.com/masharoi/suvorov-park-website"
            >
              View source code
            </a>
          </div>
        </div>

        <img src={hero} id="suvorov-hero-img" />
      </div>
      <div className="suvorov-section">
        <h1 className="sub-title">Overview</h1>
        <p>
          For this side project I designed and developed a website for the
          «Suvorov Park» homeowner association. The goal of this project was to
          develop a fully functioning responsive website that would allow the
          homeowners to vote, participate in forums, order services and contact
          the administration.
        </p>
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
