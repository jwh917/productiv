import React from "react";

function UserHabitLi({habit, handleDelHabit}){

  const {id} = habit


  function handleDeleteClick() {
    fetch(`/habits/${id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        handleDelHabit(id);
      }
    });
  }

  
  return (
    <span>
      <li key={habit.id}> {habit.created_at.slice(0, 10)} - {habit.title} &emsp; <sup onClick={handleDeleteClick}>X</sup> <br/> <br/>  </li>
    </span>
  );
}
export default UserHabitLi;