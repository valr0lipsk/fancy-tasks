import React from "react";
import { ReactComponent as ManIcon } from "../assets/man.svg";

const NoMatch = () => {
  return (
    <div className="block">
      <p className="title">Oops, no match. Please, try again!</p>
      <ManIcon />
    </div>
  );
};

export default NoMatch;
