import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import { RiWhatsappFill } from "react-icons/ri"
const linkWhatsapp = "https://api.whatsapp.com/send?phone=573118284067"
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Servicio de Serenatas para todas las ocasiones" /> */}
      <h1 className="app__header-h1">Gustavo del Mar y su Mariachi</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        brindamos una experiencia musical inolvidable para todo tipo de eventos y celebraciones
        Reserva con nosotros
        {" "}
      </p>
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
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
