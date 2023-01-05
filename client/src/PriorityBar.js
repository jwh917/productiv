import React from "react";
// , { useState, useRef, useEffect }
// import PriorityItem from "./PriorityItem";
// import NewPriorityForm from "./NewPriorityForm";



function PriorityBar({ priorities, priorityLevelNames, addNewPriority, handlePriorityDelete}){


function PriorityTable({priorities, priorityLevelNames}) {
  return (
    <table>
      <thead>
      <div className="priorityName-container ">
        {priorityLevelNames.map(level => (
          <h3 key={level.id}>
            <u>{level.name}</u>
            <button type="button">Delete</button>
          </h3>
        ))}
        </div>
      </thead>

      <tbody style={{position: "absolute", left: "425px"}}>
        {priorityLevelNames.map(level => (
          <tr key={level.id} style={{ backgroundColor: level.color }}>

            <td>
              <h3>
                {level.name}
              </h3>
            </td>

            <td className="grid-container">
              {priorities
                .filter(priority => priority.priority_level.id === level.id)
                .map(priority => (
                  <div key={priority.id} style={{background: "white", border: "2px black solid", borderRadius: "5px"}}>
                    <p><u>{priority.title}</u></p>
                    <p style={{background: `${priority.priority_level.color}`}}>{priority.priority_level.name}</p>
                    <p><u>{priority.comment}</u></p>
                    <button type="button">🗑</button>
                  </div>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


  return (
    <div >

     <br/>
     <br/>
    <PriorityTable priorities={priorities} priorityLevelNames={priorityLevelNames}/>

    </div>

    );
}
export default PriorityBar;

