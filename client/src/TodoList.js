import React from "react";
import TodoItem from "./TodoItem";
import TodoCategoryFilter from "./TodoCategoryFilter";
import NewTodoForm from "./NewTodoForm";


function TodoList ({user, selectedTodos, categoryNames, handleCategorySelected, addNewTodo, handleDeleteTodo}) {

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

          <div className="todoCategoryButtons">
            <TodoCategoryFilter categoryNames={categoryNames} handleCategorySelected={handleCategorySelected} />
          </div>

          <br/>
          
          {/* make items smaller and in a grid */}
          <div className="todosListShown">
            {todosShown}
          </div>
        </div>
        )
}

export default TodoList
