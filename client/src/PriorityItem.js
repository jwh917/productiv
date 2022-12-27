import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";


const ExampleDiv = styled.div`
  position: relative;
  background-color: darkgray;
  color: white;
  padding: 1px 5px;
  height: 250px;
  margin: 0.3em;
  cursor: move;
  text-align: center;
  width: fit-content;
`;

function PriorityItem({priority, priorityLevel, positions, nodeRef, handleStop, handlePriorityDelete}){
  
  const {id, priority_level_id, title, comment} = priority

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
  fetch(`priorities/${id}`, {
      method: "DELETE"
  });
  handlePriorityDelete(id)
}



  return (
    <>
    <Draggable
              defaultPosition={
                positions === null
                  ? { x: 0, y: 0 }
                  : !positions[priority]
                  ? { x: 0, y: 0 }
                  : { x: positions[priority].x, y: positions[priority].y }
              }
              position={null}
              key={priority[5]}
              nodeRef={nodeRef}
              onStop={handleStop}
            >
              <div ref={nodeRef}>
                <ExampleDiv id={priority[5]}>
                  <h5>{priorityLevel}{priorityLevelColor(priorityLevel)}<sup>{priority_level_id}</sup></h5>
                  <h4>{title}</h4>
                  <p> - {comment}</p>
                  <button onClick={handleDelete}>X</button>               
                </ExampleDiv>
              </div>
      </Draggable>
      </>
  );
}
export default PriorityItem;