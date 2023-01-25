import React from "react";

const inputStyles = {
  cursor: "pointer"
};


function PriorityItem({priority, handlePriorityDelete}){
  
  const {id, title, comment, level_name, level_color} = priority

  function handleDelete() {
    fetch(`priorities/${id}`, {
        method: "DELETE"
    });
    handlePriorityDelete(id)
  }

  return (

    <div key={id} style={{background: "white", border: "2px black solid", borderRadius: "5px"}}>
      <p><u>{title}</u></p>
      <p style={{background: `${ level_color }`}}>{ level_name }</p>
      <p><u>{comment}</u></p>
      <button type="button" style={inputStyles} onClick={handleDelete}>🗑</button>
    </div>

  );
}
export default PriorityItem;