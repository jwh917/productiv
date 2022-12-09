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
          <NewTodoForm user={user} categoryNames={categoryNames} addNewTodo={addNewTodo} />
          <br/>
          <TodoCategoryFilter categoryNames={categoryNames} selectedTodoCategory={selectedTodoCategory} handleCategorySelected={handleCategorySelected} />

          <div>{todosShown}</div>
        </div>
        )
}

export default TodoList
