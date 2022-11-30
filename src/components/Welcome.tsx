import React, { FunctionComponent } from "react";
import { ReactComponent as ManImg } from "../assets/man.svg";

interface WelcomeProps {
  userName: string;
}

const Welcome: FunctionComponent<WelcomeProps> = ({ userName }) => {
  return (
    <div className="container container--welcome">
      <p className="container__title">Hello {userName}!</p>
      <p className="container__text">It's good to see you again.</p>
      <ManImg />
    </div>
  );
};

export default Welcome;
