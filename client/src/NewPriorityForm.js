import React, {useState} from "react";

function NewPriorityForm({user, priorityLevelNames, addNewPriority}) {
    const [newItemTitle, setNewItemTitle] = useState("")
    const [newItemComment, setNewItemComment] = useState("")
    const [newItemLevelId, setNewItemLevelId] = useState(0)
    const [errors, setErrors] = useState([]);
   
    const options = priorityLevelNames.map((category) => {
        return (
            <option key={category} value={category}>{category}</option>
          )
    })

    function handleSelectedLevel(event) {
      setNewItemLevelId(priorityLevelNames.indexOf(event.target.value))
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
              priority_level_id: newItemLevelId + 1,
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
            <label>
                Title: <input type="text" onChange={(e) => setNewItemTitle(e.target.value)} value={newItemTitle}></input>
            </label>
            <label>
                Comment: <input type="text" onChange={(e) => setNewItemComment(e.target.value)} value={newItemComment}></input>
            </label>
            <br/>
                <label> Priority Level: <select onChange={handleSelectedLevel}>
                <option>Choose a Priority Level</option>
                        {options}
                    </select>
                </label>
                <br/>
            <input type="submit" value="Add Priority"></input>

            {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

        </form>
        <br/>
       
        </div>
    )
    
}

export default NewPriorityForm;