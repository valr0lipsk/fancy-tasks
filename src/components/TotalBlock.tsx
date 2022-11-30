import React, { FunctionComponent } from "react";
interface TotalBlockProps {
  tasksCount: number;
}

const TotalBlock: FunctionComponent<TotalBlockProps> = ({ tasksCount }) => {
  return (
    <div className="container container--total">
      {tasksCount > 0 ? (
        <p>
          Total tasks done in last month: 
          <span>{tasksCount}.</span>
           Keep going!
        </p>
      ) : (
        <p>You have not complete any tasks :(</p>
      )}
    </div>
  );
};

export default TotalBlock;
