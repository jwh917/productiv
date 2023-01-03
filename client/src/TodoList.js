import React from "react";
import TodoItem from "./TodoItem";
import TodoCategoryFilter from "./TodoCategoryFilter";
import NewTodoForm from "./NewTodoForm";
import NewTodoCategoryForm from "./NewTodoCategoryForm";


function TodoList ({user, selectedTodos, categoryNames, handleCategorySelected, addNewTodo, handleDeleteTodo, addNewCategory}) {

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

          <div>
            <NewTodoCategoryForm addNewCategory={addNewCategory}/>
          </div>

          <br/>

          <div className="todoCategoryButtons">
            <TodoCategoryFilter categoryNames={categoryNames} handleCategorySelected={handleCategorySelected} />
          </div>

          <br/>
          
          <div className="todosListShown">
            {todosShown}
          </div>
        </div>
        )
}

export default TodoList
