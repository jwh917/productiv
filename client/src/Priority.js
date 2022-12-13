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


  function addNewPriority(newPriority) {
    setPriorities([...priorities, newPriority])
  }

  function handleDeleteTodo(deletedPriorityId) {
    setPriorities(priorities.filter((priority) => (priority.id !== deletedPriorityId)))
  }

  
  return (
    <div className="priorityPage">
      <h1><u>PriorityBar</u></h1>
      <div>
        <br/>
        <br/>
        <br/>

        <h2 className="priorityHeader"><u>Organize Your Priorities</u></h2>

      </div>

      <br/>

      <PriorityBar user={user} priorities={priorities} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority} handleDeleteTodo={handleDeleteTodo}/>
    </div>
  );
}
export default Priority;