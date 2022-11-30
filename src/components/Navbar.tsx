import React from "react";
import logo from "../assets/logo.svg";
import { ReactComponent as HomeLogo } from "../assets/home.svg";
import { ReactComponent as LinesLogo } from "../assets/lines.svg";
import { ReactComponent as ExitLogo } from "../assets/exit.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="" className="nav__logo" />
      <div className="nav__top-icons">
        <a className="nav__button">
          <HomeLogo />
        </a>
        <a className="nav__button">
          <LinesLogo />
        </a>
      </div>
      <a className="nav__button nav__button--bottom">
        <ExitLogo />
      </a>
    </nav>
  );
};

export default Navbar;
