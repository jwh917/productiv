import React, { useEffect, useState } from "react";
import UserHabits from "./UserHabits";

function Home({user}) {

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("/habits")
      .then((r) => r.json())
      .then(setHabits);
  }, []);

  function mornAfterEve(){
    const date = new Date()
    const hour = date.getHours();
    const wish = `Good ${(hour < 12 && 'Morning! 🌇') || (hour < 17 && 'Afternoon/Evening! 🏙') || 'Night! 🌃'}`;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return   <span> <h2> {wish} <br/> <br/> {today}</h2> </span>
  
  }


  function handleDelHabit(deletedHabitId){
    const updatedHabits = habits.filter((habit) => habit.id !== deletedHabitId);
    setHabits(updatedHabits)
  }



  return (
    <div className="homePage">
      <div>
        <h1><u>Home</u></h1>
      </div>
  
      <div style={{marginLeft: "-80px"}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span>
          <h2>{mornAfterEve()}</h2>
        </span>

        <h3><u>Notifications</u></h3>

        <ul>
          <li>Check Todo List</li>
          <li>Set up Priority Bar</li>
        </ul>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>

      <div>
        <br/>
        <br/>
        <h2><u>Previous Daily Habits</u></h2>

        <UserHabits habits={habits} handleDelHabit={handleDelHabit}/>

      </div>

      <br/>

      <div> 
        <h3><u>ProDucTiv Board</u></h3>

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