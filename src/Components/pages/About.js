import React from "react";
import AboutContent from "../AboutContent";
import Footer from "../Footer";
import Socials from "../Socials";
import Timing from "../Timing";

function Commune() {
  return (
    <div className="App">
      <AboutContent />
      <Timing />
      <Socials />
      <Footer />
    </div>
  );
}

export default Commune;
