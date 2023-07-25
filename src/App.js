import React from "react";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import dbSkills from "./data/DbSkills";

function App() {
  // for Git HashRouter instead Router
  // + поменять login.js

  return (
    <div className="app">
      <HashRouter>
        <Nav />
        <AppRouter dbSkills={dbSkills} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
