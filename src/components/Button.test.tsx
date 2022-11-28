import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("testing button component", () => {
  it("renders a button", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders a button with default text", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });

  it("renders a button with custom text", () => {
    const text = "Some custom text";
    render(<Button text={text} />);
    expect(screen.getByRole("button")).toHaveTextContent(text);
  });

  it("renders a button by default with primary class", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveClass("btn--primary");
  });

  it("renders a button with outlined class", () => {
    render(<Button buttonClass="btn--outlined" />);
    expect(screen.getByRole("button")).toHaveClass("btn--outlined");
  });

  it("call clickHandler function by clicking on a button", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const clickHandler = () => {
      console.log("hello");
    };
    render(<Button clickHandler={clickHandler} />);
    const button = screen.getByText("Button");
    userEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith("hello");
  });
});
