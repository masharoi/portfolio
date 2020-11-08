import React from 'react';
import './work-section.css';
import img1 from '../../assets/sop-dribbble 1.png'
import img2 from '../../assets/hmp2 1.png'
import img3 from '../../assets/Screen Shot 2020-10-31 at 10.52 1.png'
import img4 from '../../assets/Screen Shot 2020-10-31 at 7.29 1.png'
import img5 from '../../assets/Screen Shot 2020-10-31 at 7.26 1.png'

const works = [img1, img2, img3, img4, img5]
const WorkSection = () => {

    return( <div className="work-container" id="work">
            <h1 className="work">Work</h1>
           <div className="d-flex flex-wrap work-list">
               {works.map(src=> {
                   return <a href="#"><img src={src} className="work-img"/></a>
               })}
           </div>
        </div>

    )

}

export default WorkSection;
