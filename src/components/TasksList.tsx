import React from "react";
import Task from "./Task";

import tasks from "../assets/tasks.json";

const TasksList = () => {
  return (
    <ul>
      {tasks.map((e) => (
        <Task {...e} />
      ))}
    </ul>
  );
};

export default TasksList;
