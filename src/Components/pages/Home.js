import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import MenuCards from "../MenuCards";
import MenuLists from "../MenuLists";
import Footer from "../Footer";

function Home() {
  return (
    <div className="App">
      <HeroSection />
      <MenuCards />
      <MenuLists />
      <Footer />
    </div>
  );
}

export default Home;
