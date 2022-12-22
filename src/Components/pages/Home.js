import React from "react";
//import HeroSection from "../HeroSection";
import HeroSlider from "../HeroSlider";
import MenuCards from "../MenuCards";
import AboutInfo from "../AboutInfo";
import MenuLists from "../MenuLists";
import Order from "../Order";
import Footer from "../Footer";

function Home() {
  return (
    <div className="App">
      <HeroSlider />
      <MenuCards />
      <AboutInfo />
      <MenuLists />
      <Order />
      <Footer />
    </div>
  );
}

export default Home;
