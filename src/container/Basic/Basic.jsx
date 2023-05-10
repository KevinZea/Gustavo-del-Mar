import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import { RiWhatsappFill } from "react-icons/ri"
const linkWhatsapp = "https://api.whatsapp.com/send?phone=573118284067"
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Plan Basico" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        BASICA
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Incluye Homenaje + Show
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          SERENATA BASICA
        </p>
        <p className="p__opensans">Pack de 7 canciones</p>
        <p className="p__opensans">Tambien incluye sonido</p>
      </div>
      <br />
      <div className="contactWhatsapp">
        <RiWhatsappFill
          color="black"
          fontSize={20}
        />
        <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
          Contactanos
        </a>
        {" "}

      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.basic} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
