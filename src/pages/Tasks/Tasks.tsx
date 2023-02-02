import React, { useEffect, useState } from "react";
import { InputBlock, Navbar, TasksColumn } from "../../components";
import tasksList from "../../assets/tasks.json";

const Tasks = () => {
  const [tasks, setTasks] = useState(tasksList);

  return (
    <div className="main main--tasks">
      <Navbar />
      <div className="tasks__container">
        <InputBlock />
        <div className="container__table">
          <TasksColumn
            type="In progress"
            tasks={tasks.filter((e) => e.status === "In progress")}
          />
          <TasksColumn
            type="To do"
            tasks={tasks.filter((e) => e.status === "To do")}
          />
          <TasksColumn
            type="Done"
            tasks={tasks.filter((e) => e.status === "Done")}
          />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
