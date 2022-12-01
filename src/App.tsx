import React from "react";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import TasksList from "./components/TasksList";
import Welcome from "./components/Welcome";
import "./scss/_all.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="column">
        <Welcome userName="Josh" />
        <TasksList />
      </div>
      <div className="column">
        <Status />
      </div>
    </div>
  );
}

export default App;
