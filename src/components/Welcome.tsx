import React from "react";
import { ReactComponent as ManImg } from "../assets/man.svg";

const Welcome = () => {
  return (
    <div className="container container--welcome">
      <p className="container__title">Hello Josh!</p>
      <p className="container__text">It's good to see you again.</p>
      <ManImg />
    </div>
  );
};

export default Welcome;
