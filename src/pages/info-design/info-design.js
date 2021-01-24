import React from "react";
import "./info-design.scss";
import NavBar from "../../components/nav-bar/nav-bar";
import Footer from "../../components/footer/footer";
import elections from "../../assets/info-design/elections.png";
import votingRights from "../../assets/info-design/voting-rights.png";
import conceptMap from "../../assets/info-design/concept-map.png";
import electionsPDF from "../../assets/info-design/elections.pdf";
import votingRightsPDF from "../../assets/info-design/voting-rights.pdf";
import {DiIllustrator} from "react-icons/di";
import {SiMicrosoftexcel} from "react-icons/si";

function InfoDesign() {
  return (
    <div id="info-container">
      <NavBar />
      <div id="info-intro-container">
        <h1>
          <strong>Information design</strong>
        </h1>
        <div className="intro-subsection">
          <h3>
            <strong>Timeline</strong>
          </h3>
          <h3>September - December 2020</h3>
        </div>
        <div className="intro-subsection">
          <h3>
            <strong>Tools</strong>
          </h3>
          <DiIllustrator  className="icon"/>
          <SiMicrosoftexcel className="icon"/>
        </div>
      </div>
      <div className="info-container">
        <div className="info-text">
          <h1>
            United States <br /> general election
          </h1>
          <p>
            For my information design course I created this infographic to
            represent the data related to the US 2020 General Election. The main
            goal of my project was to show how the election results and turnout
            rates differed across different regions and states. Moreover, I
            explored how financial factors and advertising affected the results
            of the election. <br />
            <a target="_blank" href={electionsPDF} className="info-link">
              View this project
            </a>
          </p>
        </div>
        <div className="info-img-container">
          <img src={elections} id="info-elections-img" />
        </div>
      </div>

      <div className="info-container">
        <div className="info-text">
          <h1>
            Timeline of <br /> voting rights
          </h1>
          <p>
            Timeline of voting rights was another project that I worked on
            during my information design course. This project required a
            thorough research of the history of voting rights and in the end I
            compiled a {" "}
            <a target="_blank" href={conceptMap} className="info-link">
              concept map
            </a>
            , which helped me get a better understanding of the context of the
            voting and election laws that have been passed through the last two
            hundred years in the United States. My goal for this project was to
            show how different groups of the population gained more voting
            rights throughout the years and what events and social movements
            contributed to this change.
            <br />
            <a target="_blank" href={votingRightsPDF} className="info-link">
              View this project
            </a>
          </p>
        </div>
        <div className="info-img-container">
          <img src={votingRights} id="info-elections-img" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InfoDesign;
