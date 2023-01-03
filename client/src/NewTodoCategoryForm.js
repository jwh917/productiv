import React, {useState} from "react";


function NewTodoCategoryForm({addNewCategory}) {
    const [newCategoryName, setNewCategoryName] = useState("")
    const [errors, setErrors] = useState([]);
   


    function handleSubmit(event) {
        event.preventDefault()
        setErrors([]);

        fetch("/todo_categories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: newCategoryName
            }),
          })
          .then((r) => {
            if (r.ok) {
              r.json().then((newCategory) => {
                addNewCategory(newCategory)
                setNewCategoryName("")
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })

          event.target.reset()
           
    }


    return (
      <div>
        <form onSubmit={handleSubmit} className="new-todo-form">

            <label>
                New Category: <input type="text" onChange={(e) => setNewCategoryName(e.target.value)} value={newCategoryName}></input>
            </label>

            {errors.map((err) => ( <h6 key={err}>{err}</h6>))}
            <input type="submit" value="Add Category"></input>

        </form>
        <br/>
       
      </div>
    )
    
}

export default NewTodoCategoryForm;