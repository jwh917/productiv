import React, { useState } from "react";


function NewPriorityLevelForm({priorityLevelNames, setPriorityLevelNames}) {

  const [priorityLevelName, setPriorityLevelName] = useState("");
  const [priorityLevelColor, setPriorityLevelColor] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault()
    setErrors([]);

    fetch("/priority_levels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: priorityLevelName,
          color: priorityLevelColor
        }),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((newPriorityLevel) => {
          setPriorityLevelNames([...priorityLevelNames, newPriorityLevel])
          setPriorityLevelName("")
          setPriorityLevelColor("")
        })
          
        } else {
          r.json().then((err) => {
            setErrors(err.errors)});
        }
      })

      event.target.reset()
       
}


  return (
    <form onSubmit={handleSubmit}>
      <label >Title:</label>
      <input type="text" onChange={(e) => setPriorityLevelName(e.target.value)} value={priorityLevelName}/>

      <label htmlFor="levelColor">Color:</label>
      <input type="color" onChange={(e) => setPriorityLevelColor(e.target.value)}></input>

      <br/>
      <button type="submit">Add Priority Level</button>

      {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

    </form>
  );
}

export default NewPriorityLevelForm;
