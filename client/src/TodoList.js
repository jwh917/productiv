import React from "react";
import TodoItem from "./TodoItem";
import TodoCategoryFilter from "./TodoCategoryFilter";
import NewTodoForm from "./NewTodoForm";


function TodoList ({user, selectedTodos, categoryNames, selectedTodoCategory, handleCategorySelected, addNewTodo, handleDeleteTodo}) {

    const todosShown = selectedTodos.map((todo) => {
        const categoryId = todo.todo_category.id
        return (
            <TodoItem
                key={todo.title}
                title={todo.title}
                category={categoryNames[categoryId]}
                todoId={todo.id}
                completed={todo.completed}
                handleDeleteTodo={handleDeleteTodo}
            />
        )
    })


    return (
        <div>
          <div>
            <NewTodoForm user={user} categoryNames={categoryNames} addNewTodo={addNewTodo} />
          </div>

          <br/>

          <div style={{position: "relative", right: "165px"}}>
            <TodoCategoryFilter categoryNames={categoryNames} selectedTodoCategory={selectedTodoCategory} handleCategorySelected={handleCategorySelected} />
          </div>

          <br/>
          
          {/* make items smaller and in a grid */}
          <div style={{position: "relative", right: "200px"}}>
            {todosShown}
          </div>
        </div>
        )
}

export default TodoList
