import React, { FunctionComponent, useState } from "react";
import { ReactComponent as ClockIcon } from "../assets/clock.svg";
import { ReactComponent as CalendarIcon } from "../assets/calendar.svg";

export interface TaskProps {
  id: number;
  title: string;
  category: string;
  status: string;
  date: string;
  onStatusChange: (id: number) => void;
}

const TaskHome: FunctionComponent<TaskProps> = ({
  id,
  title,
  category,
  status,
  date,
  onStatusChange,
}) => {
  const dateSting = new Date(date).toDateString();
  return (
    <li className="container container--item">
      <div className="li__checkbox">
        <input
          type="checkbox"
          checked={status === "Done" ? true : false}
          onChange={() => onStatusChange(id)}
        />
      </div>
      <div className="li__text">
        <p className={status === "Done" ? "cross" : ""}>{title}</p>
        <p>{category}</p>
      </div>
      <div className="li__marks">
        <div>
          <ClockIcon />
          {status}
        </div>
        <div>
          <CalendarIcon />
          {dateSting}
        </div>
      </div>
    </li>
  );
};

export default TaskHome;
