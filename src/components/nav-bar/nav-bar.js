import React from "react";
import "./nav-bar.scss";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";
import resume from "../../assets/maria-zaytseva-resume.pdf";


class NavBar extends React.Component {
  handleSetActive = to => {
    console.log(to);
  };

  state = {
    bg: "transparent"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ bg: "light" });
    } else {
      this.setState({ bg: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar className={this.state.bg} expand="md" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
              href="#home"
            >
              Home
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
              href="#about"
            >
              About
            </Link>

            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
              href="#work"
            >
              Projects
            </Link>
            <a
              target="_blank"
              className="nav-link"
              href={resume}
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
