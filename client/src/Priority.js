import React, { useEffect, useState } from "react";
import PriorityBar from "./PriorityBar";
import NewPriorityForm from "./NewPriorityForm";
import NewPriorityLevelForm from "./NewPriorityLevelForm";



function Priority({user}){

  const [priorities, setPriorities] = useState([]);
  const [priorityLevelNames, setPriorityLevelNames] = useState([]);

  useEffect(() => {
    fetch("/priorities")
      .then((res) => {
      if (res.ok) {
        res.json().then((priorities) => setPriorities(priorities));
      }
    });
  }, []);


  useEffect(() => {
    fetch("/priority_levels")
      .then((r) => r.json())
      .then((priorityLevels) => 
        setPriorityLevelNames(priorityLevels))
  }, []);


  function addNewPriority(newPriority) {
    setPriorities([...priorities, newPriority])
  }

  function handlePriorityDelete(deletedPriorityId) {
    setPriorities(priorities.filter((priority) => (priority.id !== deletedPriorityId)))
  }


  function priorityLevelDelete(deletedPriorityLevelId) {
    setPriorityLevelNames(priorityLevelNames.filter((priorityLevel) => (priorityLevel.id !== deletedPriorityLevelId)))
  }

  return (
    <div className="priorityPage">
      <h1 className="priorityTitle"><u>PriorityBar</u></h1>
      <div>
        <br/>
        <br/>
        <br/>

        <h2 className="priorityHeader"><u>Organize Your Priorities</u></h2>

        <br/>
        <br/>

        <div className="priorityForm-container">

          <NewPriorityForm user={user} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority}/>
          <br/>
          <NewPriorityLevelForm priorityLevelNames={priorityLevelNames} setPriorityLevelNames={setPriorityLevelNames}/>

        </div>

      </div>

      <br/>

      <PriorityBar user={user} priorities={priorities} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority} handlePriorityDelete={handlePriorityDelete} priorityLevelDelete={priorityLevelDelete}/>
    </div>
  );
}
export default Priority;