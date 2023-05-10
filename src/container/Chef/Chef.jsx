import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Artista Principal" />
      <h1 className="headtext__cormorant">Nosotros Creemos en</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
          Nos gusta nuestro trabajo y lo hacemos con amor.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          La bendición de llevar emociones muy positivas a las personas que nos contratan para que estemos en
          sus hogares o en alguna tarima ,alegrías ,aplausos ,
          Sonrisas y lágrimas de felicidad y nuestra misión es más evidente
          al ver la alegría con la que nos reciben y la melancolía
          al terminar nuestra presentación
          {" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Gustavo del Mar</p>
        <p className="p__opensans">Cantante & Artista</p>
      </div>
    </div>
  </div>
);

export default Chef;
