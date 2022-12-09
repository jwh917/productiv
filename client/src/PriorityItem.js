import React from "react";

import styled from "styled-components";

import Draggable from "react-draggable";


const ExampleDiv = styled.div`
  position: relative;
  background-color: darkgray;
  color: white;
  padding: 0.5em 1em;
  width: 10%;
  height: 200px;
  margin: 0.3em;
  cursor: move;
`;

function PriorityItem({priorty, priorityLevel, positions, nodeRef, handleStop}){
  
  console.log(priorty)
  const {id, priorty_level_id, title, comment} = priorty

function priorityLevelColor(priorityLevel){
  if(priorityLevel === "Critical"){
    return <h2>🔴</h2>
  }
  if(priorityLevel === "Major"){
    return <h2>🟠</h2>
  }
  if(priorityLevel === "Medium"){
    return <h2>🟡</h2>
  }
  if(priorityLevel === "Minor"){
    return <h2>🟢</h2>
  }
}
  
  return (
    <>
    <Draggable
              defaultPosition={
                positions === null
                  ? { x: 0, y: 0 }
                  : !positions[priorty]
                  ? { x: 0, y: 0 }
                  : { x: positions[priorty].x, y: positions[priorty].y }
              }
              position={null}
              key={priorty[5]}
              nodeRef={nodeRef}
              onStop={handleStop}
            >
              <div ref={nodeRef}>
                <ExampleDiv id={priorty[5]}>
                  <h3>PriorityLevel: {priorityLevel}</h3><sup>{priorty_level_id}</sup>
                  {priorityLevelColor(priorityLevel)}
                  <h4>{title}</h4>
                  <h5> - {comment}</h5>
                </ExampleDiv>
              </div>
            </Draggable>
            </>
  );
}
export default PriorityItem;