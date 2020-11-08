import React from 'react';
import './footer.css';
import {FaBehance, FaDribbble, FaLinkedinIn} from "react-icons/fa";


const Footer = () => {
    return(
        <div className="footer-container d-flex flex-column">
            <p>Let's connect! </p>
            <div className="d-flex mt-2 social-links-footer">
                <a href="#"><FaBehance className="mr-3 ml-1"/></a>
                <a href="#"><FaLinkedinIn className="mr-3"/></a>
                <a href="#"><FaDribbble/> </a>
            </div>
        </div>
    )

}

export default Footer;
