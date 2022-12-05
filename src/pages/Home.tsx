import React from "react";
import ChartBlock from "../components/Chart";
import Navbar from "../components/Navbar";
import Premium from "../components/Premium";
import Status from "../components/Status";
import TasksList from "../components/TasksList";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div className="main main--home">
      <Navbar />
      <div className="column">
        <Welcome userName="Josh" />
        <TasksList />
      </div>
      <div className="column">
        <Status />
        <ChartBlock />
        <Premium />
      </div>
    </div>
  );
};

export default Home;
