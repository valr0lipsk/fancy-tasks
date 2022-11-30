import React from "react";
import StatusBlock from "./StatusBlock";
import TotalBlock from "./TotalBlock";

const Status = () => {
  return (
    <div className="container container--status">
      <StatusBlock type="completed" tasksCount={11} />
      <StatusBlock type="progress" tasksCount={4} />
      <TotalBlock tasksCount={11} />
    </div>
  );
};

export default Status;
