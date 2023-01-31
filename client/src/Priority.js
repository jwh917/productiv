import React, { useEffect, useState } from "react";
import PriorityBar from "./PriorityBar";
import NewPriorityForm from "./NewPriorityForm";
import NewPriorityLevelForm from "./NewPriorityLevelForm";



function Priority({user}){

  const [priorities, setPriorities] = useState([...user.custom_priorities]);

  const [priorityLevelNames, setPriorityLevelNames] = useState([]);

  const [shownPriorityLevelNames, setShownPriorityLevelNames] = useState([...user.priority_levels.map((priority) => priority.name)]);

  const uniqueShown = [...new Set(shownPriorityLevelNames)];



  useEffect(() => {
    fetch("/priority_levels")
      .then((r) => r.json())
      .then((priorityLevels) => 
        setPriorityLevelNames(priorityLevels))
  }, []);


  function addNewPriority(newPriority) {

    const revisedPriority = {
      id: newPriority.id,
      title: newPriority.title,
      comment: newPriority.comment,
      level_id: newPriority.priority_level.id,      
      level_name: newPriority.priority_level.name,
      level_color: newPriority.priority_level.color
    }

    setPriorities([...priorities, revisedPriority])

    setShownPriorityLevelNames([...shownPriorityLevelNames, newPriority.priority_level.name])

  }

  function handlePriorityDelete(deletedPriority) {

    const updatedPriorities = priorities.filter(
      priority => priority.id !== deletedPriority.id)
    setPriorities(updatedPriorities)


    if (!updatedPriorities.some(p => p.level_name === deletedPriority.level_name)) {
      const updatedPriorityLevels = shownPriorityLevelNames.filter(
        level => level !== deletedPriority.level_name
      )
      setShownPriorityLevelNames(updatedPriorityLevels)
    }
    
  }

  function priorityLevelDelete(deletedPriorityLevel) {
    setPriorityLevelNames(priorityLevelNames.filter((priorityLevel) => (priorityLevel.id !== deletedPriorityLevel.id)))

    setPriorities(priorities.filter((priority) => (priority.level_id !== deletedPriorityLevel.id)))

    setShownPriorityLevelNames(shownPriorityLevelNames.filter((name) => (name !== deletedPriorityLevel.name)))

  }

  return (
    <div className="priorityPage">
      <h1 className="priorityTitle"><u>PriorityBar</u></h1>
      <div>
        <br/>
        <br/>

        <h2 className="priorityHeader">
          <u>Organize Your Priorities</u>
        </h2>

        <div className="priorityForm-container">
          
          <p>Priority Levels in use:
            <br/>

            {uniqueShown.join(", ")}
          </p>
          <br/>

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