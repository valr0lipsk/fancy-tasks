import React, { useEffect, useState } from "react";
import Task from "./TaskHome";

import tasksList from "../assets/tasks.json";

const TasksList = () => {
  const [tasks, setTasks] = useState(tasksList);
  const [filter, setFilter] = useState("All");

  const filterHandler = (value: string) => {
    setFilter(value);
  };

  const filteredTasks = () => {
    return filter === "All" ? tasks : tasks.filter((t) => t.status === filter);
  };

  const handleChangeStatus = (id: number) => {
    setTasks(
      [...tasks].map((el) => {
        if (el.id === id) {
          switch (el.status) {
            case "In progress":
              return { ...el, status: "Done" };
            case "To do":
              return { ...el, status: "Done" };
            case "Done":
              return { ...el, status: "To do" };
          }
        }
        return el;
      })
    );
  };

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
        {filteredTasks().map((e) => (
          <Task onStatusChange={handleChangeStatus} key={e.id} {...e} />
        ))}
      </ul>
    </>
  );
};

export default TasksList;
