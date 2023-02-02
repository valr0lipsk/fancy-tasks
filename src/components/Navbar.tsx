import React from "react";
import logo from "../assets/logo.svg";
import { ReactComponent as HomeLogo } from "../assets/home.svg";
import { ReactComponent as LinesLogo } from "../assets/lines.svg";
import { ReactComponent as ExitLogo } from "../assets/exit.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="" className="nav__logo" />
      <div className="nav__top-icons">
        <NavLink to="/" className="nav__button">
          <HomeLogo />
        </NavLink>
        <NavLink to="/tasks" className="nav__button">
          <LinesLogo />
        </NavLink>
      </div>
      <a className="nav__button nav__button--bottom">
        <ExitLogo />
      </a>
    </nav>
  );
};

export default Navbar;
