import React from "react";
import Button from "./Button";
import { ReactComponent as PremiumIcon } from "../assets/premium.svg";

const Premium = () => {
  return (
    <div className="container container--premium">
      <div className="text">
        <p className="title title--main">Track even more</p>
        <p>Unlock premium only for $9.99 per month.</p>
        <Button text="Go Premium" />
      </div>
      <PremiumIcon />
    </div>
  );
};

export default Premium;
