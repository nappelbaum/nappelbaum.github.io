import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Programs from "./pages/Programs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import dbSkills from "./data/DbSkills";
import Nav from "./components/Nav";
import Program from "./pages/Program";

function App() {
  const [navFix, setNavFix] = useState(false);
  const [navDarkColor, setNavDarkColor] = useState(false);
  const changeNavFix = (newNav) => {
    setNavFix(newNav);
  };
  const changeNavDarkColor = (newNav) => {
    setNavDarkColor(newNav);
  };

  return (
    <div className="app">
      <Router>
        <Nav navFix={navFix} navDarkColor={navDarkColor} />
        <Routes>
          <Route
            path="/snow/"
            element={
              <Main
                dbSkills={dbSkills}
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/snow/about"
            element={
              <About
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/snow/progs"
            element={
              <Programs
                dbSkills={dbSkills}
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/snow/prog"
            element={
              <Program
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/snow/prices"
            element={
              <About
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/snow/contacts"
            element={
              <About
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
