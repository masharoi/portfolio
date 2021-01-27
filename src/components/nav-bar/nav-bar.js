import React from "react";
import "./nav-bar.scss";

import { HashLink } from 'react-router-hash-link';
import {Nav, Navbar} from "react-bootstrap";
import resume from "../../assets/maria-zaytseva-resume.pdf";

import smoothscroll from 'smoothscroll-polyfill';
class NavBar extends React.Component {
  handleSetActive = to => {
    console.log(to);
  };

  state = {
    bg: "transparent"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({bg: "light"});
    } else {
      this.setState({bg: "transparent"});
    }
  };

  componentDidMount() {
    //added a polyfill for safari smooth scroll
    smoothscroll.polyfill();
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar className={this.state.bg} expand="md" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <HashLink className="nav-link"  to="/#home" smooth> Home</HashLink>

            <HashLink className="nav-link" to="/#about" smooth> About</HashLink>

            <HashLink className="nav-link"  to="/#work" smooth> Projects </HashLink>

            <a target="_blank" className="nav-link" href={resume}>
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
