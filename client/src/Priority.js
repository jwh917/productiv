import React, { useEffect, useState } from "react";
import PriorityBar from "./PriorityBar";



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
      .then((priorityLevels) => {
        // const priorityLevelsNames = priorityLevels.map(priorityLevel => priorityLevel.name)
        setPriorityLevelNames(priorityLevels)})
  }, []);



  function addNewPriority(newPriority) {
    setPriorities([...priorities, newPriority])
  }

  function handlePriorityDelete(deletedPriorityId) {
    setPriorities(priorities.filter((priority) => (priority.id !== deletedPriorityId)))
  }


  // //////////////////////
  // Form component for creating new priorities
function PriorityForm({priorityLevelNames}) {
  return (
    <form className="new-priority-form">
      {/* Input for priority title */}
      <label htmlFor="priorityTitle">Priority Title:</label>
      <input type="text" id="priorityTitle" />

      {/* Input for priority comment */}
      <label htmlFor="priorityComment">Priority Comment:</label>
      <input type="text" id="priorityComment" />

      {/* Dropdown menu for selecting priority level */}
      <label htmlFor="priorityLevel">Priority Level:</label>
      <select id="priorityLevel">
        {/* Options for each available priority level */}
        {priorityLevelNames.map(level => (
          <option key={level.id} value={level.id}>{level.name}</option>
        ))}
      </select>

      {/* Submit button */}
      <br/>
      <br/>
      <button type="submit">Add Priority</button>
    </form>
  );
}

// Form component for creating new priority levels
function PriorityLevelForm() {
  return (
    <form>
      {/* Input for priority level title */}
      <label htmlFor="levelTitle">Title:</label>
      <input type="text" id="levelTitle" />

      {/* Color picker for selecting priority level color */}
      <label htmlFor="levelColor">Color:</label>
      <input type="color" id="levelColor" />

      {/* Submit button */}
      <br/>
      <button type="submit">Add Priority Level</button>
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

          <PriorityForm priorityLevelNames={priorityLevelNames}/>
          <br/>
          <PriorityLevelForm />

        </div>

      </div>

      <br/>

      <PriorityBar user={user} priorities={priorities} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority} handlePriorityDelete={handlePriorityDelete}/>
    </div>
  );
}
export default Priority;