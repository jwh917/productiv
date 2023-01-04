import React , { useState } from "react";
import { useHistory } from "react-router";


function HabitsForm({user}){

  const [checked, setChecked] = useState([]);

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();


  const {id} = user.profile


  function handleCheck(e){
    let newHabit = [...checked]
    if(e.target.checked){
      newHabit = [...checked, e.target.value];
    }
    else {
      newHabit.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(newHabit)

  }


  const checkedItems = checked.length
  ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
  : "";


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "profile_id": id,
        "title": checkedItems
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/"); 
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
    
    e.target.reset()
  }
  
  
  return (
  <div style={{position: "absolute", left: "600px", marginTop: "-60px"}}>
    <h4><u>Add Habits Here-</u></h4>

    <form onSubmit={handleSubmit}>
      <label htmlFor="Shower">Shower 🚿 | 🛀🏾 </label>
      <input
          type="checkbox"
          id="Shower"
          name="Shower"
          value="Shower"
          onChange={handleCheck}
        />

        <label htmlFor="Brush Teeth">Brush teeth 🦷 | 🪥 </label>
        <input
          type="checkbox"
          id="Brush Teeth"
          name="Brush Teeth"
          value="Brush Teeth"
          onChange={handleCheck}
        />

        <label htmlFor="Meds">Meds 💉 | 💊 </label>
        <input
          type="checkbox"
          id="Meds"
          name="Meds"
          value="Meds"
          onChange={handleCheck}
        />

        <label htmlFor="Drink Water">Drink water 💦 | 🚰 </label>
        <input
          type="checkbox"
          id="Drink Water"
          name="Drink Water"
          value="Water"
          onChange={handleCheck}
        />

        <label htmlFor="Mediation">Mediation 🧘🏻‍♀️ | 🧘🏾‍♂️ </label>
        <input
          type="checkbox"
          id="Mediation"
          name="Mediation"
          value="Mediation"
          onChange={handleCheck}
        />

        <label htmlFor="Walk">Walk 🚶🏽‍♂️ | 🚶🏼‍♀️ </label>
        <input
          type="checkbox"
          id="Walk"
          name="Walk"
          value="Walk"
          onChange={handleCheck}
        />

        <label htmlFor="Eat Veggies">Eat Veggies 🥦 | 🥕</label>
        <input
          type="checkbox"
          id="Eat Veggies"
          name="Eat Veggies"
          value="Eat Veggies"
          onChange={handleCheck}
        />

        <label htmlFor="Enough Sleep">Enough Sleep 🛌 | 🛏 </label>
        <input
          type="checkbox"
          id="Enough Sleep"
          name="Enough Sleep"
          value="Enough Sleep"
          onChange={handleCheck}
        />

        {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

        <div style={{position: "absolute", marginTop: "-10px"}}>
          <h4><u>Habits:</u></h4>
          <p style={{marginTop: "-15px"}}>{checkedItems}</p>
        </div>

        <button className="aboutPageButton" type="submit" style={{position: "absolute", marginTop: "140px"}}> {isLoading ? "Loading..." : "Submit Habits"} </button>

    </form>
        
  </div>
       
      
  );
}
export default HabitsForm;