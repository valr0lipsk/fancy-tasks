import React from "react";
import ChartBlock from "./components/Chart";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import TasksList from "./components/TasksList";
import Welcome from "./components/Welcome";
import * as dayjs from "dayjs";

import "./scss/_all.scss";

dayjs.extend(require("dayjs/plugin/weekday"));
dayjs.locale(require("dayjs/locale/ru"));

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
        <ChartBlock />
      </div>
    </div>
  );
}

export default App;
