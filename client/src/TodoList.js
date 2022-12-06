import React from "react";
import TodoItem from "./TodoItem";
import TodoCategoryFilter from "./TodoCategoryFilter";


function TodoList ({selectedTodos, categoryNames, selectedTodoCategory, handleCategorySelected}) {

    const todosShown = selectedTodos.map((todo) => {
        const categoryId = todo.todo_category.id
        return (
            <TodoItem
                key={todo.title}
                title={todo.title}
                category={categoryNames[categoryId]}
                todoId={todo.id}
                completed={todo.completed}
            />
        )
    })


    return (
        <div>
          <TodoCategoryFilter categoryNames={categoryNames} selectedTodoCategory={selectedTodoCategory} handleCategorySelected={handleCategorySelected} />

          <div>{todosShown}</div>
        </div>
        )
}

export default TodoList