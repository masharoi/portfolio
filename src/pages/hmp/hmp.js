import React from "react";
import "./hmp.scss";
import NavBar from "../../components/nav-bar/nav-bar";
import Footer from "../../components/footer/footer";
import hero from "../../assets/hmp/hero.svg";
import sitemap from "../../assets/hmp/sitemap.svg";
import colors from "../../assets/hmp/colors.svg";
import type from "../../assets/hmp/type.svg";
import components from "../../assets/hmp/components.svg";
import screens from "../../assets/hmp/screens.svg";

function HomeMonitoring() {
  return (
    <div>
      <NavBar />
      <div id="hmp-container">
        <div id="hmp-intro-container">
          <div id="hmp-intro">
            <h1>
              <strong>Home Monitoring</strong>
            </h1>
            <h1>Mobile App</h1>
          </div>
        </div>
        <div id="hmp-main">
          <div className="hmp-section">
            <h1 className="sub-title">Project Details</h1>
            <p className="paragraph">
              While working at Boston Children’s Hospital I designed a mobile
              application to help patients keep track of their clinical
              information and share it with their providers. The current
              platform had outdated design and was badly adopted for mobile
              screen sizes. The Heart Center needed an app that would be
              intuitive for the users and have a modern look and feel.
            </p>
          </div>
          <div className="hmp-section">
            <h1 className="sub-title">Users</h1>
            <p className="paragraph">
              The primary users are parents of young patients, who need to keep
              track of medical data of their children. Other type of users are
              the patients themselves, that who are around 14-21 years old and
              are capable to input their health data themselves.
            </p>
          </div>
          <div className="hmp-section">
            <h1 className="sub-title">Sitemap</h1>
            <img src={sitemap} id="hmp-sitemap-img" />
          </div>
          <div className="hmp-section">
            <h1 className="sub-title">Colors & Typography</h1>
            <img src={colors} id="hmp-colors-img" />
            <img src={type} id="hmp-type-img" />
          </div>
          <div className="hmp-section">
            <h1 className="sub-title">UI Components</h1>
            <img src={components} id="hmp-components-img" />
          </div>
          <div className="hmp-section">
            <img src={screens} id="hmp-screens-img" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeMonitoring;
