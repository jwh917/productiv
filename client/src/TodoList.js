import React from "react";
import TodoItem from "./TodoItem";
import TodoCategoryFilter from "./TodoCategoryFilter";
import NewTodoForm from "./NewTodoForm";
import NewTodoCategoryForm from "./NewTodoCategoryForm";


function TodoList ({user, setUser, selectedTodos, categoryNames, handleCategorySelected, addNewTodo, handleDeleteTodo, addNewCategory, setTodoCategories, todoCategories, deleteCategory, setSelectedCategory, updateTodo}) {


    const todosShown = selectedTodos.map((todo) => {

        return (
            <TodoItem
                key={todo.id}
                title={todo.title}
                category={todo.category || todo.todo_category.name}
                todoId={todo.id}
                completed={todo.completed}
                handleDeleteTodo={handleDeleteTodo}
                updateTodo={updateTodo}
                
            />
        )
    })


    return (

        <div>
          <div>
            <NewTodoForm user={user} setUser={setUser} categoryNames={categoryNames} addNewTodo={addNewTodo} todoCategories={todoCategories}/>
          </div>

          <div>
            <NewTodoCategoryForm addNewCategory={addNewCategory} setTodoCategories={setTodoCategories} todoCategories={todoCategories} deleteCategory={deleteCategory} />
          </div>

          <br/>

          <div className="todoCategoryButtons">
            <TodoCategoryFilter categoryNames={categoryNames} handleCategorySelected={handleCategorySelected} todoCategories={todoCategories} deleteCategory={deleteCategory} setSelectedCategory={setSelectedCategory}/>
          </div>

          <br/>
          
          <div className="todosListShown">
            {todosShown}
          </div>
        </div>
        )
}

export default TodoList
