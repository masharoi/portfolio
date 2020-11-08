import React from 'react';
import './about-section.css'
import profile_img from '../../assets/profile-pic 1.png'
const AboutSection = () =>{

    return <div className="row about-container m-0" id="about">
        <div className="col-6 col-img">
            <img src={profile_img} className="profile-pic" />
        </div>
       <div className="col-6 col-desc">
           <div className="wrap-about">
           <h1 className="about-me">About me</h1>
           <p>
               I’m a user interface designer with a strong background in front-end development.
               When I am not designing, I draw in Procreate, do yoga or cook my next masterpiece.
           </p>
           </div>
       </div>
    </div>
}

export default AboutSection;
