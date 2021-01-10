import React from "react";
import "./work-section.scss";
import sop from "../../assets/sop-dribbble.png";
import hmp from "../../assets/hmp2.jpg";
import suvorov from "../../assets/suvorov-cover.jpg";
import melody from "../../assets/melody-cover.png";
import elections from "../../assets/info-design/elections.svg";
import {Link} from "react-router-dom";

const works = [
  {
    img: sop,
    link: "/projects/sop",
    name: "Second Opinion App"
  },
  {
    img: hmp,
    link: "/projects/hmp",
    name: "Home Monitoring App"
  },
  {
    img: elections,
    link: "/projects/info-design",
    name: "Information design"
  },
  {
    img: suvorov,
    link: "/projects/suvorov-park",
    name: "Suvorov Park website"
  },
  {
    img: melody,
    link: "/projects/melody",
    name: "Melody App"
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
              <Link to={work.link} activeClassName="active">
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
