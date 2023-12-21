import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavLinkStyle } from "./Navbar";

const Products = () => {
  return (
    <div>
      <nav>
        <input type="search" placeholder="Search Products" />
        <div>
          <NavLink style={NavLinkStyle} to="new">
            New
          </NavLink>
          <NavLink style={NavLinkStyle} to="featured">
            Featured
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
