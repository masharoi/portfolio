import React from "react";
import "./info-design.scss";
import NavBar from "../../components/nav-bar/nav-bar";
import Footer from "../../components/footer/footer";
import elections from "../../assets/info-design/elections.svg";
import electionsLeft from "../../assets/info-design/elections-left.svg";
import electionsRight from "../../assets/info-design/elections-right.svg";
import votingRights from "../../assets/info-design/voting-rights.svg";

function InfoDesign() {
  return (
    <div id="info-container">
      <NavBar />
      <div id="info-intro-container">
        <h1>
          <strong>Information design</strong>
        </h1>
      </div>
      <div id="elections-container">
        <div id="elections-img-container">
          <img src={elections} id="info-elections-img" />
          <div id="elections-details-container">
            <img src={electionsLeft} id="info-elections-img" />
            <img src={electionsRight} id="info-elections-img" />
          </div>
        </div>
        <div id="elections-info">
          <h1>2020 United States <br/> General Election</h1>
          <p>
            The primary users of the website are those who like to do active and
            potentially dangerous sports or/and like to travel to unconventional
            destinations like Artica or Mount Everest. Travelling to the Moon is
            also requires acceptable physical and mental condition.
          </p>
        </div>
      </div>

      <div id="elections-container">
        <div id="elections-img-container">
          <img src={votingRights} id="info-elections-img" />
          <div id="elections-details-container">
            <img src={electionsLeft} id="info-elections-img" />
            <img src={electionsRight} id="info-elections-img" />
          </div>
        </div>
        <div id="elections-info">
          <h1>Timeline of <br/> Voting Rights</h1>
          <p>
            The primary users of the website are those who like to do active and
            potentially dangerous sports or/and like to travel to unconventional
            destinations like Artica or Mount Everest. Travelling to the Moon is
            also requires acceptable physical and mental condition.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InfoDesign;
