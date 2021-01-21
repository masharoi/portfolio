import React from "react";
import "./illustrations.scss";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/nav-bar/nav-bar";
import newLand from "../../assets/illustrations/new-land.jpg";
import encounter from "../../assets/illustrations/encounter.jpg";
import run from "../../assets/illustrations/run.jpg";
import cyberBoy from "../../assets/illustrations/cyber-boy.jpg";
import StackGrid from "react-stack-grid";

function Illustrations() {
  return (
    <div>
      <NavBar />
      <div id="gallery-intro">
        <h1>Digital Illustration</h1>
        <p>
          When I am not designing, I am usually drawing in Procreate. I enjoy
          creating fantasy/sci-fi scenes and characters. One of the latest works
          was creating a banner for the{" "}
          <a
            className="link"
            target="_blank"
            href="https://www.youtube.com/channel/UCkn01kQ4--zROZxZFqLt4KA"
          >
            КиберПоц
          </a>{" "}
          youtube channel.
        </p>
      </div>
      <div id="gallery">
        <StackGrid columnWidth={"25%"} gutterWidth={"30"} gutterheight={"30"}>
          <div key="key1">
            {" "}
            <img src={newLand} className="image" />
          </div>
          <div key="key2">
            <img src={encounter} className="image" />
          </div>
          <div key="key3">
            <img src={run} className="image" />
          </div>
          <div key="key4">
            <img src={cyberBoy} className="image" />
          </div>
        </StackGrid>
      </div>
      <Footer />
    </div>
  );
}

export default Illustrations;