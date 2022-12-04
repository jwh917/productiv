import React from "react";

import UserHabitLi from "./UserHabitLi";


function UserHabits({habits, handleDelHabit}){
  

  const habitList = habits.map((habit) => {

    return <UserHabitLi key={habit.id} habit={habit} handleDelHabit={handleDelHabit}/>
  })

  
  
  return (
    <div>
      <ul>{habitList} <br/></ul>      
    </div>
  );
}
export default UserHabits;