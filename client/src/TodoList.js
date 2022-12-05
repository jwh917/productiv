import React from "react";
import TodoItem from "./TodoItem";



function TodoList ({selectedTodos, categoryNames}) {

    const todosShown = selectedTodos.map((todo) => {
        const categoryId = todo.todo_category.id
        return (
            <TodoItem
                key={todo.title}
                title={todo.title}
                category={categoryNames[categoryId]}
                todoId={todo.id}
            />
        )
    })

    return (
        <div>
            <div>{todosShown}</div>
        </div>
        )
}

export default TodoList