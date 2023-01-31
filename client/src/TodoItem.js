import React, { useState }  from "react";


function TodoItem({ title, category, todoId, completed, handleDeleteTodo, updateTodo}) {

  const [isCompleted, setIsCompleted] = useState(completed);

  function handleChecked(){

    fetch(`todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !isCompleted,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        updateTodo(todo)
        setIsCompleted(todo.completed)

      });

  }


  function handleDelete() {
    fetch(`todos/${todoId}`, {
        method: "DELETE"
    });
    handleDeleteTodo(todoId)
  }


    return (
        <div >
            <h4><u>{category}</u> &emsp; | &emsp; -{title} &emsp; &emsp; 
            Completed? ✅ &emsp; <button onClick={handleDelete}>❌</button>
            <input
              type="checkbox"
              id="Completed"
              name="Completed"
              checked={isCompleted}
              onChange={handleChecked}
            />      
            </h4>
        </div>
    )
}

export default TodoItem;