import React from "react";
import "./sop.scss";
import Footer from "../../components/footer/footer";
import sitemap from "../../assets/sop/sitemap.svg";
import userflow from "../../assets/sop/user-flow.svg";
import colors from "../../assets/sop/colors.svg";
import type from "../../assets/sop/type.svg";
import components from "../../assets/sop/components.svg";
import screens from "../../assets/sop/screens.svg";
import NavBar from "../../components/nav-bar/nav-bar";

function SecondOpinion() {
  return (
    <div>
        <NavBar />
      <div id="sop-container">
        <div id="sop-intro-container">
          <div id="sop-intro">
            <h1>
              <strong>Second Opinion</strong>
            </h1>
            <h1>Mobile App</h1>
          </div>
        </div>
        <div id="sop-main">
          <div className="sop-section">
            <h1 className="sub-title">Project Details</h1>
            <p className="paragraph">
              Most of the parents need the reassurance that they are getting the
              best care for their child. This app connects them with experts
              from Boston Children's Hospital and allows them to get a Second
              Opinion online.
            </p>
          </div>
          <div className="sop-section">
            <h1 className="sub-title">Sitemap</h1>
            <img src={sitemap} id="sop-sitemap-img" />
          </div>
          <div className="sop-section">
            <h1 className="sub-title">User flow</h1>
            <img src={userflow} id="sop-flow-img" />
          </div>
          <div className="sop-section" id="style-guides-container">
            <div id="colors">
              <h1 className="sub-title">Colors</h1>
              <img src={colors} className="img" />
            </div>
            <div id="type">
              <h1 className="sub-title">Typography</h1>
              <img src={type} className="img" />
            </div>
          </div>
          <div className="sop-section">
            <h1 className="sub-title">UI components</h1>
            <img src={components} id="sop-components-img" />
          </div>
        </div>
      </div>
      <div className="sop-section">
        <img src={screens} id="sop-screens-img" />
      </div>

      <Footer />
    </div>
  );
}

export default SecondOpinion;
