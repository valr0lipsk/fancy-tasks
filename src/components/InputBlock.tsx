import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import Button from "./Button";

const InputBlock = () => {
  return (
    <div className="input__block">
      <SearchIcon />
      <input type="text" placeholder="Search..." />
      <Button text="Add new">
        <AddIcon />
      </Button>
    </div>
  );
};

export default InputBlock;
