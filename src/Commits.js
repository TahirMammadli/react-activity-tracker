import React from "react";
import Commit from "./Commit";

const Commits = (props) => {
  return (
    <div>
      <Commit
        repo={props.commits[0].repo}
        numOfCommits={props.commits[0].numOfCommits}
        date={props.commits[0].date}
      />
      <Commit
        repo={props.commits[1].repo}
        numOfCommits={props.commits[1].numOfCommits}
        date={props.commits[1].date}
      />
      <Commit
        repo={props.commits[2].repo}
        numOfCommits={props.commits[2].numOfCommits}
        date={props.commits[2].date}
      />
      <Commit
        repo={props.commits[3].repo}
        numOfCommits={props.commits[3].numOfCommits}
        date={props.commits[3].date}
      />
      <Commit
        repo={props.commits[4].repo}
        numOfCommits={props.commits[4].numOfCommits}
        date={props.commits[4].date}
      />
      <Commit
        repo={props.commits[5].repo}
        numOfCommits={props.commits[5].numOfCommits}
        date={props.commits[5].date}
      />
    </div>
  );
};

export default Commits;
