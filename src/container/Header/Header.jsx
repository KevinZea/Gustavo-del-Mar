import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import { RiWhatsappFill } from "react-icons/ri"
import { FiYoutube } from "react-icons/fi";
import {IoLogoTiktok} from "react-icons/io5"
import { FaInstagramSquare } from "react-icons/fa";
const linkWhatsapp = "https://api.whatsapp.com/send?phone=573118284067"
const linkInstagram = "https://instagram.com/gustavodelmar_?igshid=YmMyMTA2M2Y="

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
        <RiWhatsappFill
          color="black"
          fontSize={20}
        />
        <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
          CONTACTANOS
        </a>
        {" "}

      </div>
      <br />
      <div className="pageInstagram">
        <FaInstagramSquare
          color="black"
          fontSize={20}
        />
        <a href={linkInstagram} target="_blank" rel="noopener noreferrer">
          Ir a Instagram
        </a>
        {"  "}

      </div>
      <br />
      <div className="pageYoutube">
      <FiYoutube/>
        <a href="https://youtube.com/@gustavodelmar6993" target="_blank" rel="noopener noreferrer">
          Visita nuestro canal
        </a>
      </div>
      <br />
      <div className="pageYoutube">
        <IoLogoTiktok/>
        <a href="https://www.tiktok.com/@mariachigustavodelmar?_t=8cEdEaoFBuX&_r=1" target="_blank" rel="noopener noreferrer">
          Perfil de Tiktok
        </a>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
