import React from "react";
import PriorityTable from "./PriorityTable";


function PriorityBar({ priorities, priorityLevelNames, handlePriorityDelete, priorityLevelDelete}){
  return (
    <div >

      <br/>
      <br/>
      <PriorityTable priorities={priorities} priorityLevelNames={priorityLevelNames} handlePriorityDelete={handlePriorityDelete} priorityLevelDelete={priorityLevelDelete}/>

    </div>

    );
}
export default PriorityBar;

