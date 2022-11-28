import React, { FunctionComponent } from "react";

interface ButtonProps {
  // define interface for Button props
  text: string;
  clickHandler: () => void;
  buttonClass: "btn--primary" | "btn--outlined";
}

const Button: FunctionComponent<Partial<ButtonProps>> = ({
  text,
  clickHandler,
  buttonClass,
}) => {
  // create a conponent that inherit FunctionComponent interface defined with ButtonProps. *Partial<T> generic makes all interface's fields optional
  const buttonClasses = ["btn", buttonClass ? buttonClass : "btn--primary"];
  clickHandler = clickHandler ? clickHandler : () => {};

  return (
    <button onClick={clickHandler} className={buttonClasses.join(" ")}>
      {" "}
      {text ? text : "Button"}{" "}
    </button>
  );
};

export default Button;
