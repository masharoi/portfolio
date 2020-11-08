import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "./components/nav-bar/nav-bar";

import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import AboutSection from "./components/about-section/about-section";
import WorkSection from "./components/work-section/work-section";
import Footer from "./components/footer/footer";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll";

function App() {
  return (<div className="container-main" >

        <div className="introduction" id="home">
            <Navbar  expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-4 mt-5">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className= "nav-link" href="#home"
                        >Home</Link>

                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className= "nav-link" href="#about"
                        >About</Link>

                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={5}
                            duration={500}
                            className= "nav-link" href="#work"
                        >Work</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

          <div className="name-container">
            <h1 className="name ml-5">Hi, I'm Maria.</h1>
            <h2 className="profession ml-5">User interface designer</h2>
            <div className="d-flex mt-2 ml-5 social-links">
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
