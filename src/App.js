import { useState } from "react";
import Commit from "./Commit";
import './index.css'
import Commits from "./Commits";

const commits = [
    
  {
    id: "1",
    repo: "Project1",
    numOfCommits: 4,
    date: new Date(2020, 7, 16)
  },
  {
    id: "2",
    repo: "Project2",
    numOfCommits: 4,
    date: new Date(2020, 7, 16)
  },
  {
    id: "3",
    repo: "Project3",
    numOfCommits: 4,
    date: new Date(2020, 7, 16)
  },
  {
    id: "4",
    repo: "Project4",
    numOfCommits: 4,
    date: new Date(2020, 7, 16)
  },
  {
    id: "5",
    repo: "Project5",
    numOfCommits: 4,
    date: new Date(2020, 7, 16)
  },
  {
    id: "6",
    repo: "Project6",
    numOfCommits: 4,
    date: new Date(2020, 7, 16)
  }
]

function App() {

  return (
    
    <div className="commits">
      <Commits commits={commits} />
    </div>
  );
}

export default App;
