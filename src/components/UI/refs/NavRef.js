import React from "react";
import { NavLink } from "react-router-dom";

const NavRef = ({ refName, refHref, changeBurgerStyle }) => {
  return (
    <li>
      <NavLink
        to={refHref}
        className={({ isActive }) =>
          isActive ? "current-page" : "no-active-page"
        }
        onClick={() => {
          changeBurgerStyle(false);
          document.body.classList.remove("lock");
          window.scrollTo({ top: 0 });
        }}
      >
        {refName}
      </NavLink>
    </li>
  );
};

export default NavRef;
