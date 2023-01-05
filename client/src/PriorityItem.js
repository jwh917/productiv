import React from "react";


function PriorityItem({priority, priorityLevel, positions, nodeRef, handleStop, handlePriorityDelete}){
  
  const {id, priority_level, title, comment} = priority


  function handleDelete() {
    fetch(`priorities/${id}`, {
        method: "DELETE"
    });
    handlePriorityDelete(id)
  }

  return (
    <div key={id} style={{background: "white", border: "2px black solid", borderRadius: "5px"}}>
      <p><u>{title}</u></p>
      <p style={{background: `${priority_level.color}`}}>{priority_level.name}</p>
      <p><u>{comment}</u></p>
      <button type="button" onClick={handleDelete}>🗑</button>
    </div>
  );
}
export default PriorityItem;