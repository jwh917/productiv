import React, { useEffect, useState } from "react";
import PriorityBar from "./PriorityBar";



function Priority({user}){

  const [priorities, setPriorities] = useState([]);
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
        const priorityLevelsNames = priorityLevels.map(priorityLevel => priorityLevel.name)
        setPriorityLevelNames(priorityLevelsNames)})
  }, []);


  // console.log(priorities)
  // console.log(priorityLevels)
  // console.log(priorityLevelNames)

  function addNewPriority(newPriority) {
    setPriorities([...priorities, newPriority])
  }

  function handleDeleteTodo(deletedPriorityId) {
    setPriorities(priorities.filter((priority) => (priority.id !== deletedPriorityId)))
  }

  
  return (
    <div>
      <h1>PriorityBar</h1>
      <h2>Organize Your Priorities</h2>

      <br/>

      <PriorityBar user={user} priorities={priorities} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority} handleDeleteTodo={handleDeleteTodo}/>
    </div>
  );
}
export default Priority;