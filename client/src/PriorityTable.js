import React from "react";
import PriorityItem from "./PriorityItem";
import PriorityLevelHeader from "./PriorityLevelHeader";

function PriorityTable({priorities, priorityLevelNames, handlePriorityDelete, priorityLevelDelete}){
  

  return (
    <table>
      <thead>
      <div className="priorityName-container ">
        {priorityLevelNames.map(level => (
          <PriorityLevelHeader
            key={level.id}
            level={level}
            priorityLevelDelete={priorityLevelDelete}
          />
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
export default PriorityTable;