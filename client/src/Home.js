import React, { useEffect, useState } from "react";

import UserHabits from "./UserHabits";

function Home({user}) {

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("/habits")
      .then((r) => r.json())
      .then(setHabits);
  }, []);

  const {start_day, end_day} = user

  function mornAfterEve(start_day, end_day){
    const date = new Date()
    const hour = date.getHours();
    const wish = `Good ${(hour > start_day && 'Morning') || (hour < end_day && 'Afternoon/Evening') || 'Night'} `;
    return wish
  }


  function handleDelHabit(deletedHabitId){
    const updatedHabits = habits.filter((habit) => habit.id !== deletedHabitId);
    setHabits(updatedHabits)
  }



  return (
    <div>
      <h1>Home</h1>
      <h2>{mornAfterEve(start_day, end_day)}</h2>

      <label htmlFor="Notifications">Notifications </label>

      <ul>
        <li>Check Todo List</li>
        <li>Set up Priority Bar</li>
        <li>If you haven't already</li>
      </ul>

      <br/>

      
      <h2>Previous Daily Habits</h2>

      <UserHabits habits={habits} handleDelHabit={handleDelHabit}/>

      <br/>

      <div> 
        <h3>ProDucTiv Board</h3>

        <h5>The 15 Best Productivity Blogs to Read in 2022</h5>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nzvJMPP9j73Sc2zHwN65X6QAtAzhAyZpBQ&usqp=CAU" alt="productiveImg"/>
        <br/>
        <a href="https://www.ntaskmanager.com/blog/best-productivity-blogs/">Ntaskmanager.com - Article</a>

        <h5>The 22 Best productivity blogs you need to follow in 2023</h5>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNLTWECSEmCB01Hyf2DEuolAaJd1GRG3YHbZbdW0s0X0t5VkJQRgmmeI7HtXn4DCM8Bs&usqp=CAU" alt="productiveImg"/>
        <br/>
        <a href="https://timeular.com/blog/the-six-best-productivity-blogs-you-need-to-follow/">Timeular.com - Blog</a>
      </div>

      <br/>
      <br/>

    </div>
    
  );
}

export default Home;