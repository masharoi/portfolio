import React from "react";
import "./illustrations.scss";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/nav-bar/nav-bar";
import newLand from "../../assets/illustrations/new-land.jpg";
import encounter from "../../assets/illustrations/encounter.jpg";
import run from "../../assets/illustrations/run.jpg";
import cyberBoy from "../../assets/illustrations/cyber-boy.jpg";
import StackGrid from "react-stack-grid";
import {useState, useEffect} from "react";

function getWidth() {
  const {innerWidth: width} = window;
  return {
    width
  };
}

function useWidth() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function Illustrations() {
  const {width} = useWidth();
  return (
    <div>
      <NavBar />
      <div id="gallery-intro">
        <h1>Digital Illustration</h1>
        <p>
          When I am not designing, I am usually drawing in Procreate. I enjoy
          creating fantasy/sci-fi scenes and characters. The latest project that
          I was working on was creating a banner for {" "}
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
        <StackGrid
          columnWidth={"25%"}
          gutterWidth={width <= 800 ? "10" : "30"}
          gutterheight={width <= 800 ? "10" : "30"}
        >
          <div key="key1">
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
      <div id="column-gallery">
        <div className="img-container">
          <img src={newLand} className="image" />
        </div>
        <div className="img-container">
          <img src={encounter} className="image" />
        </div>
        <div className="img-container">
          <img src={run} className="image" />
        </div>
        <div className="img-container">
          <img src={cyberBoy} className="image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Illustrations;
