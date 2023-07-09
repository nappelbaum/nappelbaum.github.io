import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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

  // HashRouter

  return (
    <div className="app">
      <Router>
        <Nav navFix={navFix} navDarkColor={navDarkColor} />
        <AppRouter
          dbSkills={dbSkills}
          changeNavFix={changeNavFix}
          changeNavDarkColor={changeNavDarkColor}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
