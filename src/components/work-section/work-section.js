import React from "react";
import "./work-section.scss";
import sop from "../../assets/sop-dribbble.png";
import hmp from "../../assets/hmp2.jpg";
import suvorov from "../../assets/suvorov-cover.jpg";
import elections from "../../assets/info-design/elections.svg";
import moon from "../../assets/moon-project/cover.jpg";
import newLand from "../../assets/illustrations/new-land.jpg";
import {Link} from "react-router-dom";

const works = [
  {
    img: moon,
    link: "/projects/moon",
    name: "Experience the Moon",
    role: "UI/UX design"
  },
  {
    img: sop,
    link: "/projects/sop",
    name: "Second Opinion App",
    role: "UI/UX design"
  },
  {
    img: hmp,
    link: "/projects/hmp",
    name: "Home Monitoring App",
    role: "UI/UX design"
  },
  {
    img: elections,
    link: "/projects/info-design",
    name: "Information design",
    role: ""
  },
  {
    img: suvorov,
    link: "/projects/suvorov-park",
    name: "Suvorov Park website",
    role: "Web design & development"
  },
  {
    img: newLand,
    link: "/projects/illustrations",
    name: "Digital illustration",
    role: ""
  }
];

const WorkSection = () => {
  return (
    <div className="work-container" id="work">
      <h1 className="secondary-header work-title">Projects</h1>
      <div className="d-flex flex-wrap work-list">
        {works.map(work => {
          return (
            <div className="img-container">
              <img src={work.img} className="work-img" />
              <Link to={work.link} activeClassName="active">
                <div className="details">
                  <h3>{work.name}</h3>
                  <p>{work.role}</p>
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
