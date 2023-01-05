import React, { useEffect, useState } from "react";
import PriorityBar from "./PriorityBar";
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



function PriorityForm({priorityLevelNames}) {
  return (
    <form className="new-priority-form">

      <label htmlFor="priorityTitle">Priority Title:</label>
      <input type="text" id="priorityTitle" />

      <label htmlFor="priorityComment">Priority Comment:</label>
      <input type="text" id="priorityComment" />

      <label htmlFor="priorityLevel">Priority Level:</label>
      <select id="priorityLevel">

        {priorityLevelNames.map(level => (
          <option key={level.id} value={level.id}>{level.name}</option>
        ))}
      </select>

      <br/>
      <br/>
      <button type="submit">Add Priority</button>
    </form>
  );
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
          
          {/* NewPriorityForm */}
          <PriorityForm priorityLevelNames={priorityLevelNames}/>
          <br/>
          <NewPriorityLevelForm priorityLevelNames={priorityLevelNames} setPriorityLevelNames={setPriorityLevelNames}/>

        </div>

      </div>

      <br/>

      <PriorityBar user={user} priorities={priorities} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority} handlePriorityDelete={handlePriorityDelete}/>
    </div>
  );
}
export default Priority;