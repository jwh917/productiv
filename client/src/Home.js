import React from "react";


function Home({user}) {

  const {start_day, end_day} = user.profile

  function morningAndNight(start_day, end_day){
    const date = new Date()
    const hour = date.getHours();
    const wish = `Good ${(hour < start_day && 'Morning') || (hour < end_day && 'Afternoon') || 'Evening'} `;
    return wish
  }


  return (
    <div>
      <h1>Home</h1>
      <h2>{morningAndNight(start_day, end_day)}</h2>

      <label htmlFor="Notifications">Notifications </label>

      <ul>
        <li>Check Todo List</li>
        <li>Set up Priority Bar</li>
        <li>If you haven't already</li>
      </ul>
      
      <h2>Everyday Habits</h2>
      {/* Habits Form */}
      {/* User Habits  */}

      {/* <form></form> */}
      <div >
        <input
          type="checkbox"
          id="Shower"
          name="Shower"
          value="Shower"
        />
        <label htmlFor="Shower">Shower 🚿 | 🛀🏾 </label>

        <input
          type="checkbox"
          id="Brush teeth"
          name="Brush teeth"
          value="Brush teeth"
        />
        <label htmlFor="Brush teeth">Brush teeth 🦷 | 🪥 </label>

        <input
          type="checkbox"
          id="Meds"
          name="Meds"
          value="Meds"
        />
        <label htmlFor="Meds">Meds 💉 | 💊 </label>

        <input
          type="checkbox"
          id="Drink water"
          name="Drink water"
          value="Drink water"
        />
        <label htmlFor="Drink water">Drink water 💦 | 🚰 </label>

        <input
          type="checkbox"
          id="Mediation"
          name="Mediation"
          value="Mediation"
        />
        <label htmlFor="Mediation">Mediation 🧘🏻‍♀️ | 🧘🏾‍♂️ </label>
        
      </div>

      <br/>
      <br/>
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