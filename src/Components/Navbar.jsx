import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkStyle = ({ isActive }) => {
  return {
    textDecoration: isActive ? "none" : "underline",
    fontWeight: isActive ? "bold" : "normal",
  };
};

const Navbar = () => {
  return (
    <nav>
      <NavLink style={NavLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={NavLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={NavLinkStyle} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
