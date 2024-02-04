import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";
import {RiWhatsappFill} from "react-icons/ri"
const linkWhatsapp = "https://api.whatsapp.com/send?phone=573118284067"

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nosotros</h1>
        <p className="p__opensans">
          Gustavo Del Mar y Su Mariachi.
          Nos destacamos por nuestra energía, alegría, repertorio,
          versatilidad desde lo más romántico hasta lo más alegre
          entregados a nuestro público.

          Somos un gran equipo artístico que se encarga de crear un momento
          inolvidable.
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

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <p className="p__opensans">
          Gustavo Del Mar.
          Cantante de música ranchera, popular y balada con una trayectoria
          de 15 años a nivel profesional en la música, con 2 producciones
          musicales, la última "Tú lo mejor de todo", Con presentaciones en
          varias ciudades de Colombia
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
    </div>
  </div>
);

export default AboutUs;
