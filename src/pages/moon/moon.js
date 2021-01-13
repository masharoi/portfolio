import React from "react";
import "./moon.scss";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/nav-bar/nav-bar";
import hero from "../../assets/moon-project/hero.png";
import white from "../../assets/moon-project/white-color.svg";
import gray from "../../assets/moon-project/gray-color.svg";
import yellow from "../../assets/moon-project/yellow-color.svg";
import green from "../../assets/moon-project/green-color.svg";
import home from "../../assets/moon-project/home.png";
import flight from "../../assets/moon-project/flight.png";
import destination from "../../assets/moon-project/destination.png";
import requirements from "../../assets/moon-project/requirements.png";
import activities from "../../assets/moon-project/activities.png";
import application from "../../assets/moon-project/application.png";
import mobile from "../../assets/moon-project/mobile.png";

function MoonProject() {
  return (
    <div>
      <NavBar />
      <div id="moon-container">
        <div id="moon-intro">
          <div id="intro-text">
            <h1>
              Experience <br />
              the <br />
              Moon
              <br />
            </h1>
            <p>
              Website that allows the users to sign up for the expedition to the
              Moon.
              <a
                target="_blank"
                href="https://www.figma.com/file/JOgPFiuguSIURfmuqQssfu/explore-the-moon?node-id=312%3A146"
              >
                View Figma file
              </a>
            </p>
          </div>
          <img src={hero} id="moon-hero-img" />
        </div>

        <div id="moon-about-section">
          <div className="moon-about-subsection">
            <h3 className="sub-title">About</h3>
            <p>
              In a distant future the humanity had already built multiple Moon
              bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
              travel company which organizes expeditions to the Moon. The goal
              of this project is to create an easy way for the users to sign up
              for the expedition and learn more about the trip and the
              conditions on the Moon.
            </p>
            <h3 className="sub-title">Users</h3>
            <p>
              The primary users of the website are those who like to do active
              and potentially dangerous sports or/and like to travel to
              unconventional destinations like Artica or Mount Everest.
              Travelling to the Moon is also requires acceptable physical and
              mental condition.
            </p>
          </div>
          <div className="moon-about-subsection">
            <h3 className="sub-title">Problem</h3>
            <p>
              There has always been people that crave unconventional and often
              times dangerous experiences. Travelling to remote places on our
              planet is one way to satisfy that need. However, when you have
              been everywhere, where else can you go?
            </p>
            <h3 className="sub-title">Solution</h3>
            <p>
              Travelling to the Moon is the ultimate destination for the thrill
              seaking adventurers.
            </p>
          </div>
        </div>

        <div className="moon-section">
          <h1 className="sub-title">Styleguide</h1>
          <div id="type-section">
            <h3>Typography</h3>
            <div id="type-inner">
              <div className="type-inner-subsection">
                <h1>Jura</h1>
                <p>
                  I have chosen this typeface to emphasize the technological and
                  futuristic mood of the experience.
                </p>
              </div>
              <div className="type-inner-subsection">
                Aa Bb Cc <br />0 1 2
              </div>
            </div>
          </div>
          <div id="color-section">
            <h3>Color palette</h3>
            <div id="color-inner">
              <div className="color-block">
                <img src={white} className="moon-color-img" />
              </div>
              <div className="color-block">
                <img src={gray} className="moon-color-img" />
              </div>
              <div className="color-block">
                <img src={yellow} className="moon-color-img" />
              </div>
              <div className="color-block">
                <img src={green} className="moon-color-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="moon-section">
          <h1 className="sub-title">Home Page</h1>
          <p>
            In a distant future the humanity had already built multiple Moon
            bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
            travel company which organizes expeditions to the Moon.
          </p>
          <img src={home} className="moon-screen-img" />
        </div>
        <div className="moon-section">
          <h1 className="sub-title">Flight</h1>
          <p>
            In a distant future the humanity had already built multiple Moon
            bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
            travel company which organizes expeditions to the Moon.
          </p>
          <img src={flight} className="moon-screen-img" />
        </div>
        <div className="moon-section">
          <h1 className="sub-title">Destination</h1>
          <p>
            In a distant future the humanity had already built multiple Moon
            bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
            travel company which organizes expeditions to the Moon.
          </p>
          <img src={destination} className="moon-screen-img" />
        </div>
        <div className="moon-section">
          <h1 className="sub-title">Requirements</h1>
          <p>
            In a distant future the humanity had already built multiple Moon
            bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
            travel company which organizes expeditions to the Moon.
          </p>
          <img src={requirements} className="moon-screen-img" />
        </div>
        <div className="moon-section">
          <h1 className="sub-title">Activities</h1>
          <p>
            In a distant future the humanity had already built multiple Moon
            bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
            travel company which organizes expeditions to the Moon.
          </p>
          <img src={activities} className="moon-screen-img" />
        </div>
        <div className="moon-section">
          <h1 className="sub-title">Application</h1>
          <p>
            In a distant future the humanity had already built multiple Moon
            bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
            travel company which organizes expeditions to the Moon.
          </p>
          <img src={application} className="moon-screen-img" />
        </div>
        <div className="moon-section">
          <h1 className="sub-title">Mobile</h1>
          <p>
            In a distant future the humanity had already built multiple Moon
            bases and the colonies are growing rapidly. MOON EXPEDITIONS is a
            travel company which organizes expeditions to the Moon.
          </p>
          <img src={mobile} className="moon-screen-img" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MoonProject;
