import React from "react";
import CommitDate from "./CommitDate";

const Commit = (props) => {
  return (
    <div className="commit">
      <h1 className="commit__repo">{props.repo}</h1>
      <h1 className="commit__numOfCommits">{props.numOfCommits}</h1>
      <div> <CommitDate date={props.date} /> </div>
    </div>
  );
};

export default Commit;
