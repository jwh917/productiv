import React, {useState} from "react";


const inputStyles = {
  cursor: "pointer"
};



function NewTodoForm({user, setUser, categoryNames, addNewTodo, todoCategories}) {
    const [newItemTitle, setNewItemTitle] = useState("")
    const [newItemCategoryId, setNewItemCategoryId] = useState(0)
    const [errors, setErrors] = useState([]);

   
    const categoriesWithoutAll = categoryNames.filter((category) => (category !== "All"))

    const options = categoriesWithoutAll.map((category) => {
        return (
            <option key={category} value={category}>{category}</option>
          )
    })

    function handleSelectedCategory(event) {
      const selectedCategory = todoCategories.find((category) => (category.name === event.target.value))

      setNewItemCategoryId(selectedCategory.id)
    }



    function handleSubmit(event) {
        event.preventDefault()
        setErrors([]);

        const newTodo = {
          user_id: user.id,              
          todo_category_id: newItemCategoryId,
          title: newItemTitle,
          completed: false
        }


        fetch("/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
          })
          .then((r) => {
            if (r.ok) {
              r.json().then((newTodo) => {
                addNewTodo(newTodo)
                setNewItemTitle("")
                // setUser({...user, todos: newTodo})

              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
          event.target.reset()           
    }

   
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                New Todo Title: <input type="text" onChange={(e) => setNewItemTitle(e.target.value)} value={newItemTitle}></input>
            </label>
            <br/>
                <label> Category: <br/>
                  <select style={inputStyles} onChange={handleSelectedCategory}>
                    <option>Choose a Category</option>
                    {options}
                  </select>
                </label>
                <br/>
            <input type="submit" style={inputStyles} value="Add Todo"></input>

            {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

        </form>
        <br/>
       
        </div>
    )
    
}

export default NewTodoForm;