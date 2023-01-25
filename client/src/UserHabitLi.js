import React from "react";

const xStyles = {
  color: "red",
  border: "1px solid red",
  cursor: "pointer"
};


function UserHabitLi({habit, handleDelHabit}){

  const {id, title, created_at} = habit

  const createdAt = created_at.slice(0, 10)
  const habitDate = `${createdAt.substr(5, 6)}/${createdAt.substr(0, 4)}`.replaceAll("-", "/")


  function handleDeleteClick() {
    fetch(`/habits/${id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        handleDelHabit(id);
      }
    });
  }

  
  return (
    <span>
      <li key={id}> {habitDate}: <br/> {title} <br/><br/> <button style={xStyles} onClick={handleDeleteClick}>❌</button> <br/> <br/>  </li>
    </span>
  );
}
export default UserHabitLi;