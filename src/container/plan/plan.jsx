import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Plan = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Nuestros mejores Planes" /> */}
      <h1 className="headtext__cormorant">LUJO</h1>

      <div className="app__laurels_awards">
        {data.awardsTwo.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.lujo} alt="laurels_img" />
    </div>
  </div>
);

export default Plan;
