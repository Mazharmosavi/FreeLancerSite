import React from "react";
import { NavLink } from "react-router-dom";

function CustomNavlink({ children,to }) {
  const NavLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100 hover:text-primary-900";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${NavLinkClass} bg-primary-100 text-primary-900`
            : `${NavLinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavlink;
