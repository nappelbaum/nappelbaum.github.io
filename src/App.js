import React, { useState } from "react";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import dbSkills from "./data/DbSkills";

function App() {
  const [navFix, setNavFix] = useState(false);
  const [navDarkColor, setNavDarkColor] = useState(false);
  const changeNavFix = (newNav) => {
    setNavFix(newNav);
  };
  const changeNavDarkColor = (newNav) => {
    setNavDarkColor(newNav);
  };

  // for Git HashRouter instead Router
  // + поменять login.js

  return (
    <div className="app">
      <HashRouter>
        <Nav navFix={navFix} navDarkColor={navDarkColor} />
        <AppRouter
          dbSkills={dbSkills}
          changeNavFix={changeNavFix}
          changeNavDarkColor={changeNavDarkColor}
        />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
