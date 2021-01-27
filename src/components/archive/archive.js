import React, {useState} from "react";
import "./archive.scss";
import plantsDesktop from "../../assets/archive/flower-shop.jpg";
import plantsMobile from "../../assets/archive/flower-shop-mobile.jpg";
import melody from "../../assets/archive/melody-cover.png";
import cath from "../../assets/archive/cath-reporting.jpg";
import contact from "../../assets/archive/contact.jpg";

const photos = [plantsDesktop, plantsMobile, melody, cath, contact];

const Archive = () => {
  const [currPhotoIndex, setPhoto] = useState(0);

  return (
    <div id="archive-container">
      <h1 className="work-title main-header">Archive</h1>
      <div id="archive-subsection">
        <ul>
          <li
            onClick={() => setPhoto(0)}
            className={currPhotoIndex == 0 ? "archive-selected" : ""}
          >
            Plants boutique website
          </li>
          <li
            onClick={() => setPhoto(1)}
            className={currPhotoIndex == 1 ? "archive-selected" : ""}
          >
            Flower delivery app
          </li>
          <li
            onClick={() => setPhoto(2)}
            className={currPhotoIndex == 2 ? "archive-selected" : ""}
          >
            Melody app
          </li>
          <li
            onClick={() => setPhoto(3)}
            className={currPhotoIndex == 3 ? "archive-selected" : ""}
          >
            Cath reporting tool
          </li>
          <li
            onClick={() => setPhoto(4)}
            className={currPhotoIndex == 4 ? "archive-selected" : ""}
          >
            Contact app
          </li>
        </ul>
        <img src={photos[currPhotoIndex]} className="archive-img" />
      </div>
    </div>
  );
};

export default Archive;
