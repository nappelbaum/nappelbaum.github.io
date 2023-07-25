import React, { useState } from "react";
import "./../sass/main.scss";
import NavPhone from "./UI/refs/NavPhone";
import NavBurger from "./UI/buttons/NavBurger";
import NavList from "./UI/refs/NavList";
import NavLogo from "./UI/refs/NavLogo";
import { useSelector } from "react-redux";

const Nav = () => {
  const [burgerStyles, setBurgerStyles] = useState(false);
  const changeBurgerStyle = function (style) {
    setBurgerStyles(style);
  };

  const navDarkColor = useSelector((state) => state.navColor.navDarkColor);
  const navFix = useSelector((state) => state.navColor.navFix);

  return (
    <nav
      className={`nav${navFix ? " nav--fix" : ""}${
        navDarkColor ? " nav--dark-color" : ""
      }`}
    >
      <div className="container">
        <div className="nav__row">
          <NavPhone />
          <NavLogo />
          <NavBurger
            burgerStyles={burgerStyles}
            setBurgerStyles={setBurgerStyles}
            navDarkColor={navDarkColor}
          />
          <NavList
            burgerStyles={burgerStyles}
            navDarkColor={navDarkColor}
            changeBurgerStyle={changeBurgerStyle}
          />
        </div>
      </div>
      <div
        className={`overlay${burgerStyles === false ? "" : " overlay--active"}`}
      ></div>
    </nav>
  );
};

export default Nav;
