import React, { useState, useRef, useEffect } from "react";
import PriorityItem from "./PriorityItem";
import NewPriorityForm from "./NewPriorityForm";


import styled from "styled-components";

const ItemsContainer = styled.div`
  color: black;
  position: relative;
  background-color: white;
  width: 100%;
  height: 700px;
  border: 4px solid green;
`;


function PriorityBar({user, priorities, priorityLevelNames, addNewPriority}){

  const [positions, setPositions] = useState({});
  // const [hasLoaded, setHasLoaded] = useState(false);
  const nodeRef = useRef(null);


  // set the ref value

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem("positions_div")
    );

    setPositions(existingDivPositions);
    // setHasLoaded(true);
    console.log(existingDivPositions);
    console.log("has loaded");
  }, []);

  function handleStop(e, data) {
    // console.log(e)
    // console.log(data)
    // console.log(data.x)
    // console.log(data.y)
    // console.log(data.node)
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


  // console.log(positions)
  // console.log(  exampleRef.current)
  // console.log(priorities)
  // console.log(priorityLevels)
  // console.log(priorityLevelNames)



  const prioritiesShown = priorities.map((priorty) => {
    const priortyLevelId = priorty.priorty_level_id - 1
    return (
        <PriorityItem
            key={priorty.title}
            priorty={priorty}
            priorityLevel={priorityLevelNames[priortyLevelId]}
            positions={positions}
            nodeRef={nodeRef}
            handleStop={handleStop}
        />
    )
})



  
  
  return (
    <div>

    
      <h3> New Priority Form</h3>
      <NewPriorityForm user={user} priorityLevelNames={priorityLevelNames} addNewPriority={addNewPriority}/>

      <br/>
      <br/>

      <ItemsContainer>
        {prioritiesShown}
      </ItemsContainer>

        <br/>
        <br/> 


        <h2>Critical</h2>
        <div class="vl"></div>
        <h2>Major</h2>
        <div class="vl"></div>
        <h2>Medium</h2>
        <div class="vl"></div>
        <h2>Minor</h2>
        <div class="vl"></div>



      <br/>

    </div>

    );
}
export default PriorityBar;

