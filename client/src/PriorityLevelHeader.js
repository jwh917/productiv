import React from "react";

const inputStyles = {
  cursor: "pointer"
};


function PriorityLevelHeader({level, priorityLevelDelete}){
  
  const {id, name, color} = level


  function handleDelete() {
    fetch(`priority_levels/${id}`, {
        method: "DELETE"
    });
    priorityLevelDelete(id)
  }

  return (
    <div key={id}>
      <h3>
        <u style={{color: `${color}`}}>{name}</u>
        <button type="button" style={inputStyles} onClick={handleDelete}>Delete <br/> 🗑</button>
      </h3>
    </div>
  );
}
export default PriorityLevelHeader;