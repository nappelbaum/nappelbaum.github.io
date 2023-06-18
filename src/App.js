import React, { useState } from "react";
// import "./sass/main.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import dbSkills from "./data/DbSkills";

function App() {
  const [navFix, setNavFix] = useState(true);
  const changeNavFix = (newNav) => {
    setNavFix(newNav);
  };

  return (
    <div>
      <Nav navFix={navFix} />
      <Header changeNavFix={changeNavFix} />
      <Skills skills={dbSkills} />
      <Footer />
    </div>
  );
}

export default App;
