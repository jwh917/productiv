import React, { useEffect, useState } from "react";
import PriorityBar from "./PriorityBar";



function Priority(){

  const [priorities, setPriorities] = useState([]);
  const [priorityLevels, setPriorityLevels] = useState([]);
  const [priorityLevelNames, setPriorityLevelNames] = useState([]);


  useEffect(() => {
    fetch("/priorties")
      .then((res) => {
      if (res.ok) {
        res.json().then((priorities) => setPriorities(priorities));
      }
    });
  }, []);


  useEffect(() => {
    fetch("/priorty_levels")
      .then((r) => r.json())
      .then((priorityLevels) => {
        setPriorityLevels(priorityLevels)
        const priorityLevelsNames = priorityLevels.map(priorityLevel => priorityLevel.name)
        setPriorityLevelNames(priorityLevelsNames)})
  }, []);


  // console.log(priorities)
  // console.log(priorityLevels)
  // console.log(priorityLevelNames)

  
  return (
    <div>
      <h1>PriorityBar</h1>
      <h2>Organize Your Priorities</h2>

      <br/>

      <PriorityBar priorities={priorities} priorityLevelNames={priorityLevelNames}/>
    </div>
  );
}
export default Priority;