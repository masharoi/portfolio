import React from "react";
import "./work-section.scss";
import sop from "../../assets/sop-dribbble.png";
import hmp from "../../assets/hmp2.jpg";
import suvorov from "../../assets/suvorov-cover.jpg";
import melody from "../../assets/melody-cover.png";
import contact from "../../assets/contact-cover.jpg";
import {Link} from "react-router-dom";

const works = [
  {
    img: sop,
    link: "https://www.behance.net/gallery/107745399/Second-Opinion-app",
    name: "Second Opinion App"
  },
  {
    img: hmp,
    link: "https://www.behance.net/gallery/107747377/Home-monitoring-app",
    name: "Home Monitoring App"
  },
  {
    img: suvorov,
    link: "https://www.behance.net/gallery/86535683/UI-Suvorov-Park-Website",
    name: "Suvorov Park website"
  },
  {
    img: melody,
    link: "https://www.behance.net/gallery/83774703/Melody-Mobile-App",
    name: "Melody App"
  },
  {
    img: contact,
    link: "https://www.behance.net/gallery/82318209/Contact-Mobile-App",
    name: "Contact App"
  }
];

const WorkSection = () => {
  return (
    <div className="work-container" id="work">
      <h1 className="work-title">Projects</h1>
      <div className="d-flex flex-wrap work-list">
        {works.map(work => {
          return (
            <div className="img-container">
              <img src={work.img} className="work-img" />
              <Link to={`/projects/sop`} activeClassName="active">
                <div className="details">
                  <h3>{work.name}</h3>
                  <p>UI/UX design</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSection;
