import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavRef = ({ refName, refHref, subhref, changeBurgerStyle }) => {
  const location = useLocation();

  return (
    <li>
      <NavLink
        to={refHref}
        className={({ isActive }) =>
          isActive || location.pathname === subhref
            ? "current-page"
            : "no-active-page"
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
