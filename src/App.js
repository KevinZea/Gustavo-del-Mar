import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Plan,
  Basic
} from "./container";
import BWhatsapp from "./components/BWhatsapp/BWhatsapp";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <BWhatsapp/>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    <Chef />
    <Intro />
    <Laurels />
    <Plan/>
    <Gallery />
    <FindUs />
    <Basic/>
    <Footer />
  </div>
);

export default App;
