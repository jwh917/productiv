import React, { useState, useRef, useEffect } from "react";
import PriorityItem from "./PriorityItem";
import NewPriorityForm from "./NewPriorityForm";


import styled from "styled-components";

const ItemsContainer = styled.div`
  color: black;
  position: relative;
  background-color: white;
  width: 350px;
  height: 100px;
  border: 4px solid green;
  right: 420px;
  top: -150px;
  display: flex;
  justify-content: space-evenly;
`;


function PriorityBar({user, priorities, priorityLevelNames, addNewPriority, handlePriorityDelete}){


  const [positions, setPositions] = useState({});
  const nodeRef = useRef(null);



  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem("positions_div")
    );

    setPositions(existingDivPositions);
    console.log(existingDivPositions);
    console.log("has loaded");
  }, []);

  function handleStop(e, data) {
    let dummyPositions = { ...positions };
    const itemId = e.target.id;
    dummyPositions[itemId] = {};
    dummyPositions[itemId]["x"] = data.x;
    dummyPositions[itemId]["y"] = data.y;
    setPositions(dummyPositions);
  }

  useEffect(() => {
    localStorage.setItem(`positions_div`, JSON.stringify(positions));
  }, [positions]);



  const prioritiesShown = priorities.map((priority) => {
    const priorityLevelId = priority.priority_level_id - 1
    return (
        <PriorityItem
            key={priority.id}
            priority={priority}
            priorityLevel={priorityLevelNames[priorityLevelId]}
            positions={positions}
            nodeRef={nodeRef}
            handleStop={handleStop}
            handlePriorityDelete={handlePriorityDelete}
        />
    )
})


  
  return (
    <div >

    
      <h3><u>New Priority Form</u></h3>
      <NewPriorityForm user={user} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority}/>

      <br/>
      <br/>
      <ItemsContainer>
        {prioritiesShown}
      </ItemsContainer>

        <br/>
        <br/> 
        <br/> 
        <br/> 

      <div className="priorityLevelsContainer">
        <div className="vl"><h2>Critical</h2></div>
        
        <div className="vl"><h2>Major</h2></div>
        
        <div className="vl"><h2>Medium</h2></div>
        
        <div className="vl"><h2>Minor</h2></div>
       
        <div className="vl"></div>

      </div>


      <br/>

    </div>

    );
}
export default PriorityBar;

