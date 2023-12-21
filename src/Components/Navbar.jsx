import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;