import React from "react";

import styled from "styled-components";

import Draggable from "react-draggable";


const ExampleDiv = styled.div`
  position: relative;
  background-color: darkgray;
  color: white;
  padding: 0.5em 1em;
  width: 15%;
  height: 260px;
  margin: 0.3em;
  cursor: move;
`;

function PriorityItem({priorty, priorityLevel, positions, nodeRef, handleStop, handleDeleteTodo}){
  
  console.log(priorty)
  const {id, priorty_level_id, title, comment} = priorty

function priorityLevelColor(priorityLevel){
  if(priorityLevel === "Critical"){
    return <p>🔴</p>
  }
  if(priorityLevel === "Major"){
    return <p>🟠</p>
  }
  if(priorityLevel === "Medium"){
    return <p>🟡</p>
  }
  if(priorityLevel === "Minor"){
    return <p>🟢</p>
  }
}
  


function handleDelete() {
  fetch(`priorties/${id}`, {
      method: "DELETE"
  });
  handleDeleteTodo(id)
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
                  <h5>PriorityLevel: {priorityLevel}</h5>
                  {priorityLevelColor(priorityLevel)}<sup>{priorty_level_id}</sup>
                  <h6>{title} &emsp; <button onClick={handleDelete}>X</button></h6>
                  <p> - {comment}</p>
                  {/* <button>X</button> */}
                </ExampleDiv>
              </div>
            </Draggable>
            </>
  );
}
export default PriorityItem;