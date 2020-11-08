import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "./components/nav-bar/nav-bar";

import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import AboutSection from "./components/about-section/about-section";
import WorkSection from "./components/work-section/work-section";
import Footer from "./components/footer/footer";

function App() {
  return (<div className="container-main" >

        <div className="intro" id="home">
         <NavBar />

          <div className="intro-details ml-5">
            <h1 className="details-name ">Hi, I'm Maria.</h1>
            <h2 className="details-profession ml-1">User interface designer</h2>
            <div className="d-flex mt-2 ml-2 details-social-links">
                <a href="#"><FaBehance className="mr-3 ml-1"/></a>
                <a href="#"><FaLinkedinIn className="mr-3"/></a>
                <a href="#"><FaDribbble/> </a>
            </div>
          </div>
        </div>


          <AboutSection/>
          <WorkSection  />
          <Footer  />

      </div>
  );
}

export default App;
