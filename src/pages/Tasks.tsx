import React from "react";
import InputBlock from "../components/InputBlock";
import Navbar from "../components/Navbar";

const Tasks = () => {
  return (
    <div className="main main--tasks">
      <Navbar />
      <div className="tasks__container">
        <InputBlock />
      </div>
    </div>
  );
};

export default Tasks;
