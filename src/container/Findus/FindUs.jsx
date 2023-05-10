import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import {RiWhatsappFill} from "react-icons/ri"
const linkWhatsapp = "https://api.whatsapp.com/send?phone=573118284067"
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Plan Estrella" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        ESPECIAL
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Incluye Homenaje + Show
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          SERENATA ESPECIAL
        </p>
        <p className="p__opensans">Pack de 8 canciones</p>
        <p className="p__opensans">Tambien incluye sonido + obsequio de FLORES o CHAMPAÑA</p>
      </div>
      <br />
      <div className="contactWhatsapp">
        <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
          Contactanos
        </a>
        {" "}
        <RiWhatsappFill
          color="black"
          fontSize={20}
        />
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
