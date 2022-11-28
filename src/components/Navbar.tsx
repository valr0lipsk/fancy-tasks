import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="" className="nav__logo" />
    </div>
  );
};

export default Navbar;
