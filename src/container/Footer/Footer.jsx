import React from "react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    {/* <FooterOverlay />
    <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactános</h1>
        {/* <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p> */}
        {/* <p className="p__opensans">+1 212-344-1230</p> */}
        <p className="p__opensans">+57 3118284067</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logos} alt="footer_logo" />
        <p className="p__opensans">
          &quot;El mejor espectaculo de serenata para tus celebraciones&quot;
        </p>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/profile.php?id=100009348774673&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://instagram.com/gustavodelmar_?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
          <a href="https://youtube.com/@gustavodelmar6993" target="_blank" rel="noopener noreferrer">
            <FiYoutube/>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
