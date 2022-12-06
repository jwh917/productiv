import React, {useState} from "react";



function NewTodoForm({user, categoryNames, addNewTodo}) {
    const [newItemTitle, setNewItemTitle] = useState("")
    const [newItemCategoryId, setNewItemCategoryId] = useState("")
    const [errors, setErrors] = useState([]);
   
    const categoriesWithoutAll = categoryNames.filter((category) => (category !== "All"))
    const options = categoriesWithoutAll.map((category) => {
        return (
            <option key={category} value={category}>{category}</option>
          )
    })

    function handleSelectedCategory(event) {
      setNewItemCategoryId(categoryNames.indexOf(event.target.value))
    }

    // console.log(newItemCategoryId)



    function handleSubmit(event) {
        event.preventDefault()
        setErrors([]);



        fetch("/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,              
              todo_category_id: newItemCategoryId,
              title: newItemTitle,
              completed: false
            }),
          })
          .then((r) => {
            if (r.ok) {
              r.json().then((newTodo) => {
                addNewTodo(newTodo)
                setNewItemTitle("")
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
           
    }


   
    return (
        <div>
        <form onSubmit={handleSubmit} className="new-todo-form">
            <label>
                Title: <input type="text" onChange={(e) => setNewItemTitle(e.target.value)} value={newItemTitle}></input>
            </label>
            <br/>
                <label> Category: <select onChange={handleSelectedCategory}>
                <option>Choose a Category</option>
                        {options}
                    </select>
                </label>
                <br/>
            <input type="submit" value="Add Todo"></input>

            {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

        </form>
        <br/>
       
        </div>
    )
    
}

export default NewTodoForm;