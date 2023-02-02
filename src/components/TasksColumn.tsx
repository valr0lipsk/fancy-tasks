import React, { FunctionComponent } from "react";
import { TaskProps } from "./TaskHome";
import { ReactComponent as MoreIcon } from "../assets/more.svg";
import { ReactComponent as CalendarIcon } from "../assets/calendar.svg";
import { Task } from "../models";

interface TasksColumnProps {
  type: string;
  tasks: Task[];
}

const TasksColumn: FunctionComponent<TasksColumnProps> = ({ type, tasks }) => {
  return (
    <div className="column">
      <p>
        {type} ({tasks.length})
      </p>
      <div className="task">
        <div className="header">
          <div>
            <p>Learn React</p>
            <span>studying</span>
          </div>
          <button className="btn-rounded">
            <MoreIcon />
          </button>
        </div>
        <div className="task__mark">
          <CalendarIcon />
          19 November 2022
        </div>
        <div className="line"></div>
      </div>

      <div className="task">
        <div className="header">
          <div>
            <p>Learn React</p>
            <span>studying</span>
          </div>
          <button className="btn-rounded">
            <MoreIcon />
          </button>
        </div>
        <div className="task__mark">
          <CalendarIcon />
          19 November 2022
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default TasksColumn;
