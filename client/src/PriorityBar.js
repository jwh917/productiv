import React from "react";
import PriorityItem from "./PriorityItem";


function PriorityBar({ priorities, priorityLevelNames, handlePriorityDelete}){


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
                  <PriorityItem
                  key={priority.id}
                  priority={priority}
                  handlePriorityDelete={handlePriorityDelete}
                  />
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

