import React from 'react';
import './nav-bar.scss';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Nav, Navbar} from "react-bootstrap";



class NavBar extends React.Component {

    handleSetActive = to => {
        console.log(to);
    };
    render() {

        return (
            <Navbar  expand="lg">
                <Nav className=" mt-5">
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
                        offset={0}
                        duration={500}
                        className= "nav-link" href="#work"
                    >Work</Link>
                </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Navbar>)



    }
};

export default NavBar;
