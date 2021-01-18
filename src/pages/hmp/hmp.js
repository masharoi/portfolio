import React from "react";
import "./hmp.scss";
import NavBar from "../../components/nav-bar/nav-bar";
import Footer from "../../components/footer/footer";
import hero from "../../assets/hmp/hero.svg";
import sitemap from "../../assets/hmp/sitemap.png";
import colors from "../../assets/hmp/colors.svg";
import type from "../../assets/hmp/type.svg";
import components from "../../assets/hmp/components.svg";
import screens from "../../assets/hmp/screens.svg";
import screens2 from "../../assets/hmp/screens2.svg";
import {SiFigma} from "react-icons/si";

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
            <div className="intro-subsection">
              <h3>
                <strong>Timeline</strong>
              </h3>
              <h3>January – June 2020</h3>
            </div>
            <div className="intro-subsection">
              <h3>
                <strong>Role</strong>
              </h3>
              <h3>UI/UX design </h3>
            </div>
            <div className="intro-subsection">
              <h3>
                <strong>Tools</strong>
              </h3>
              <SiFigma className="icon" />
            </div>
          </div>
        </div>
        <div id="hmp-main">
          <div id="hmp-details-section" className="hmp-section">
            <div className="hmp-details-subsection">
              <h1 className="sop-header">Overview</h1>
              <p className="paragraph">
                While working at Boston Children’s Hospital I designed a mobile
                application to help patients keep track of their clinical
                information and share it with their providers. Interesting
                aspect of this project was the fact that some of the patients
                were too young to input the data themselves and their parents
                had to do it for them. That is why we had to develop an app that
                was suitable for both teenagers and the parents of younger
                patients.
              </p>
            </div>
            <div className="hmp-details-subsection">
              <h1 className="sop-header">The Problem</h1>
              <p className="paragraph">
                The current platform had outdated design and was badly adopted
                for mobile screen sizes. The Heart Center needed an app that
                would be intuitive for the users and have a modern look and
                feel.
              </p>
              <h1 className="sop-header">The Solution</h1>
              <p className="paragraph">
                An app that allows the users to log their data on a regular
                basis and explore how their parameters, such as weight, fluid
                intake and others, change over time. Moreover, the patients can
                upload pictures if needed.
              </p>
            </div>
          </div>

          <div className="hmp-section">
            <h1 className="sop-header center">UX design</h1>
            <img src={sitemap} id="hmp-sitemap-img" />
          </div>
          <div className="hmp-section">
            <h1 className="sop-header center">Colors & Typography</h1>
            <div id="styleguides-container">
              <img src={colors} id="hmp-colors-img" />
              <img src={type} id="hmp-type-img" />
            </div>
          </div>
          <div className="hmp-section">
            <h1 className="sop-header center">UI Components</h1>
            <img src={components} id="hmp-components-img" />
          </div>
          <div className="hmp-section hmp-screens">
            <div className="details">
              <h1 className="">Log data</h1>
              <p className="paragraph">
                The users can log their health data, such as weight, fluid
                intake, oxygen saturation, heart rate, add comments and answer
                questions related to their health. They can also edit their logs
                and upload images if necessary.
              </p>
            </div>
            <img src={screens} className="hmp-screens-img" />
          </div>
          <div className="hmp-section hmp-screens">
            <img src={screens2} className="hmp-screens-img" />
            <div className="details">
              <h1 className="">Explore graphs & tables</h1>
              <p className="paragraph">
                The users can view how their health data changes over time. They
                can switch between graph and table view, see if they have
                uploaded a picture on the same day, any additional notes and
                what tags they used to describe their condition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeMonitoring;
