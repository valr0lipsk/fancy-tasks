import React, { FunctionComponent } from "react";

interface StatusBlockProps {
  type: "completed" | "progress";
  tasksCount: number;
}

const StatusBlock: FunctionComponent<StatusBlockProps> = ({
  type,
  tasksCount,
}) => {
  return (
    <div className="container container--block">
      <span>{tasksCount}</span>
      {type === "completed" ? <p>Tasks done</p> : <p>Tasks in progress</p>}
    </div>
  );
};

export default StatusBlock;
