import React, { useEffect, useState } from "react";
import Task from "./Task";

import tasksList from "../assets/tasks.json";

const TasksList = () => {
  const [tasks, setTasks] = useState(tasksList);
  const [filter, setFilter] = useState("All");

  const filterHandler = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {
    filter !== "All"
      ? setTasks(tasksList.filter((e) => e.status === filter))
      : setTasks(tasksList);
  }, [filter]);

  return (
    <>
      <p className="title title--main">Tasks</p>
      <div className="filters">
        <button
          className={"btn--text " + (filter === "All" ? "active" : "")}
          onClick={() => filterHandler("All")}
        >
          All
        </button>
        <button
          className={"btn--text " + (filter === "To do" ? "active" : "")}
          onClick={() => filterHandler("To do")}
        >
          To do
        </button>
        <button
          className={"btn--text " + (filter === "In progress" ? "active" : "")}
          onClick={() => filterHandler("In progress")}
        >
          In progress
        </button>
        <button
          className={"btn--text " + (filter === "Done" ? "active" : "")}
          onClick={() => filterHandler("Done")}
        >
          Done
        </button>
      </div>
      <ul className="list">
        {tasks.map((e) => (
          <Task key={e.id} {...e} />
        ))}
      </ul>
    </>
  );
};

export default TasksList;
