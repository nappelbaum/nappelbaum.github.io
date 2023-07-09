import React from "react";
import navRefs from "./navRefs";
import NavRef from "./NavRef";

const NavList = ({ burgerStyles, navDarkColor, changeBurgerStyle }) => {
  return (
    <div
      className={`nav__navigation-list${
        burgerStyles === false ? "" : " nav__navigation-list--active"
      } ${navDarkColor ? " nav__navigation-list--dark" : ""}`}
    >
      <ul>
        {navRefs.map((ref) => (
          <NavRef
            refName={ref.name}
            refHref={ref.href}
            subhref={ref.subhref}
            key={ref.name}
            changeBurgerStyle={changeBurgerStyle}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavList;
