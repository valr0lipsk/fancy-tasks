import React, { ReactNode } from "react";
import { FunctionComponent } from "react";

interface ButtonProps {
  // define interface for Button props
  text: string;
  clickHandler: () => void;
  buttonClass: "btn--primary" | "btn--outlined";
  children: ReactNode;
}

const Button: FunctionComponent<Partial<ButtonProps>> = ({
  text,
  clickHandler,
  buttonClass,
  children,
}) => {
  // create a conponent that inherit FunctionComponent interface defined with ButtonProps. *Partial<T> generic makes all interface's fields optional
  const buttonClasses = ["btn", buttonClass ? buttonClass : "btn--primary"];
  clickHandler = clickHandler ? clickHandler : () => {};

  return (
    <button onClick={clickHandler} className={buttonClasses.join(" ")}>
      {children}
      {text ? text : "Button"}
    </button>
  );
};

export default Button;
