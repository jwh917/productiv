import React, {useState} from "react";

function NewPriorityForm({user, priorityLevelNames, addNewPriority}) {
    const [newItemTitle, setNewItemTitle] = useState("")
    const [newItemComment, setNewItemComment] = useState("")
    const [newItemLevelId, setNewItemLevelId] = useState(0)
    const [errors, setErrors] = useState([]);

    function handleSelectedLevel(event) {
      setNewItemLevelId(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setErrors([]);

        fetch("/priorities", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,              
              priority_level_id: newItemLevelId,
              title: newItemTitle,
              comment: newItemComment
            }),
          })
          .then((r) => {
            if (r.ok) {
              r.json().then((newPriority) => {
                addNewPriority(newPriority)
                setNewItemTitle("")
                setNewItemComment("")
              });
            } else {
              r.json().then((err) => {
                setErrors(err.errors)});
            }
          })

          event.target.reset()
           
    }


   
    return (
        <div>

          <form onSubmit={handleSubmit}>

            <label htmlFor="priorityTitle">Priority Title:</label>
            <input type="text" onChange={(e) => setNewItemTitle(e.target.value)} value={newItemTitle} />

            <label htmlFor="priorityComment">Priority Comment:</label>
            <input type="text" onChange={(e) => setNewItemComment(e.target.value)} value={newItemComment}/>

            <label htmlFor="priorityLevel">Priority Level:</label>
            <select onChange={handleSelectedLevel}>

              {priorityLevelNames.map(level => (
                <option key={level.id} value={level.id}>{level.name}</option>
              ))}
            </select>

            <br/>
            <br/>
            <button type="submit">Add Priority</button>

            {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

          </form>
       
        </div>
    )
    
}

export default NewPriorityForm;