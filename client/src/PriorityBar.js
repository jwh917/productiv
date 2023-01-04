import React from "react";
// , { useState, useRef, useEffect }
// import PriorityItem from "./PriorityItem";
// import NewPriorityForm from "./NewPriorityForm";


// import styled from "styled-components";

// const ItemsContainer = styled.div`
//   color: black;
//   position: relative;
//   background-color: white;
//   width: 350px;
//   height: 100px;
//   border: 4px solid green;
//   right: 420px;
//   top: -150px;
//   display: flex;
//   justify-content: space-evenly;
// `;

// user,

function PriorityBar({ priorities, priorityLevelNames, addNewPriority, handlePriorityDelete}){




// Table component for displaying priorities
// Fix css on this
function PriorityTable({priorities, priorityLevelNames}) {
  return (
    <table>
      {/* Table header for each priority level */}
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
      {/* <br/> */}

      {/* Table body with one row for each priority level */}
      <tbody style={{position: "absolute", left: "425px"}}>
        {priorityLevelNames.map(level => (
          <tr key={level.id}>
            {/* Column for priority level (displayed with color) */}
            {/* style={{ backgroundColor: level.color }} */}
            <td>
              <h3>
                <hr style={{borderTop:" 4px solid red"}}/>
                {level.name}
              </h3>
            </td>

            {/* Column for priorities with this level */}
            <td className="grid-container">
              {priorities
                .filter(priority => priority.priority_level.id === level.id)
                .map(priority => (
                  <div key={priority.id} style={{background: "white", border: "2px black solid", borderRadius: "5px"}}>
                    {/* Priority title and comment */}
                    <p><u>{priority.title}</u></p>
                    <p style={{"background": "red"}}>{priority.priority_level.name}</p>
                    <p>-{priority.comment}</p>
                    {/* Delete button */}
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

