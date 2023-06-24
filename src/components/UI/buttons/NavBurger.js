import React from "react";

const NavBurger = ({ burgerStyles, setBurgerStyles, navDarkColor }) => {
  return (
    <div
      className={`nav__burger${
        burgerStyles === false ? "" : " nav__burger--active"
      } ${navDarkColor ? " nav__burger--dark" : ""}`}
      onClick={() => {
        setBurgerStyles((prev) => !prev);
        document.body.classList.toggle("lock");
      }}
    >
      <span></span>
    </div>
  );
};

export default NavBurger;
