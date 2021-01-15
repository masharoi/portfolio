import React from "react";
import "./sop.scss";
import Footer from "../../components/footer/footer";
import sitemap from "../../assets/sop/sitemap.svg";
import userflow from "../../assets/sop/user-flow.svg";
import colors from "../../assets/sop/colors.svg";
import type from "../../assets/sop/type.svg";
import components from "../../assets/sop/components.svg";
import screens from "../../assets/sop/screens.svg";
import detailsImg from "../../assets/sop/detail-img.svg";
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
            <span>January – June 2020</span>
          </div>
        </div>
        <div id="sop-main">
          <div className="sop-section" id="sop-details-section">
            <div id="details-text">
              <h1 className="sop-header">Overview</h1>
              <p>
                In 2020 I worked as a UI designer for{" "}
                <a target="_blank" href="https://www.childrenshospital.org/">
                  Boston Children’s hospital
                </a>{" "}
                where I designed interfaces that were used by both the young
                patients and their parents. One of the platforms that I have
                designed was the Second Opinion application. Most of the parents
                need the reassurance that they are getting the best care for
                their child. This app connects them with experts from Boston
                Children's Hospital and allows them to get a Second Opinion
                online.
              </p>
              <h1 className="sop-header">The Problem</h1>
              <p>
                BCH already had a separate page on their website that allowed
                the users to request a Second Opinion. However, the design was
                outdated, the forms were overwhelming and it wasn’t clear which
                information was optional to include. There was a need to
                simplify the data input for the patients and find an easy way
                for coordinators to communicate with patients throughout the
                whole process.
              </p>

              <h1 className="sop-header">The Solution</h1>
              <p>
                An app that allows the users to input their personal data,
                upload their medical records and receive updates about their
                case.
              </p>
            </div>
            <img src={detailsImg} id="sop-details-img" />
          </div>

          <div className="sop-section">
            <h1 className="sop-header">User flow</h1>
            <p className="paragraph">
              One of the major goals of this project was to simplify the
              registration process. There were multiple ways how the user could
              complete the registration. They could choose to contact the
              coordinator and provide their personal information over the phone,
              fill out the paper form or input all of their information through
              the app. That meant that in some cases, the users only used the
              app for uploading their medical files, contacting the coordinators
              and keeping track of the updates, while other users relied on the
              app to fully complete the registration.
              <span className="bold">
                {" "}
                After completing the user flow, our team had a better
                understanding of multiple paths that the users could take when
                registering for the Second Opinion.
              </span>
            </p>

            <img src={userflow} id="sop-flow-img" />
          </div>

          <div className="sop-section" id="style-guides-container">
            <div id="colors">
              <h1 className="sop-header">Colors</h1>
              <img src={colors} className="img" />
            </div>
            <div id="type">
              <h1 className="sop-header">Typography</h1>
              <img src={type} className="img" />
            </div>
          </div>

          <div className="sop-section">
            <h1 className="sop-header">UI components</h1>
            <img src={components} id="sop-components-img" />
          </div>
          <div className="sop-section">
            <img src={screens} id="sop-screens-img" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SecondOpinion;
