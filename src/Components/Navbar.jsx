import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div>
      <NavLink style={NavLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={NavLinkStyle} to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
