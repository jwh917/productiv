import React, { useState }  from "react";



function TodoItem({ title, category, todoId, completed, handleDeleteTodo }) {

  const [isCompleted, setIsCompleted] = useState(completed);


  function handleChecked(){
    setIsCompleted(!isCompleted)

    fetch(`todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed:  !isCompleted,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }


  function handleDelete() {
    fetch(`todos/${todoId}`, {
        method: "DELETE"
    });
    handleDeleteTodo(todoId)
  }


    return (
        <div >
            <h4> - {category}</h4>
            <h5> &emsp; &emsp; {title} &emsp; <button onClick={handleDelete}>X</button></h5>             

            <label htmlFor="Completed">Completed? ✅</label>
            <br/>
            <input
              type="checkbox"
              id="Completed"
              name="Completed"
              checked={isCompleted}
              onChange={handleChecked}
            />
        </div>
    )
}

export default TodoItem;