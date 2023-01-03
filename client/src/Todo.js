import React, { useEffect, useState } from "react";
import TodoList from "./TodoList"


function Todo({user}) {

  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [todoCategories, setTodoCategories] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((r) => r.json())
      .then((todos) => setTodos(todos))
  }, [selectedCategory]);


  useEffect(() => {
    fetch("/todo_categories")
      .then((r) => r.json())
      .then((categories) => {
        setTodoCategories(categories)
        const categoriesNames = categories.map(category => category.name)
        categoriesNames.unshift("All")
        setCategoryNames(categoriesNames)})
  }, []);



  function handleCategorySelected(category) {
    setSelectedCategory(category)
  }

  const selectedTodoCategory = todoCategories.find(todoCat => {
    return todoCat.name === selectedCategory
  })

  let selectedTodos = []

  if (selectedCategory === "All") {
    selectedTodos = todos
  } else {
    selectedTodos = todos.filter((todo) => 
    (todo.todo_category.id === selectedTodoCategory.id))
  }


  function handleDeleteTodo(deletedTodoId) {
    setTodos(todos.filter((todo) => (todo.id !== deletedTodoId)))
  }

  function addNewTodo(newTodo) {
    setTodos([...todos, newTodo])
  }

  function addNewCategory(newCategory) {
    setCategoryNames([...categoryNames, newCategory.name])
  }

  function deleteCategory(category){

    setTodoCategories(todoCategories.filter((todo) => (todo.name !== category)))
    
    setCategoryNames(categoryNames.filter((categoryName) => (categoryName !== category)))

  }


  return (

    <div className="todoPage">
        
      <div className="todoList">
        <h1><u>Todo List</u></h1>
        <h2><u>Todo Count</u>: {todos.length}</h2>


      </div>

      <div >
        <TodoList user={user} selectedTodos={selectedTodos} categoryNames={categoryNames} handleCategorySelected={handleCategorySelected} addNewTodo={addNewTodo} handleDeleteTodo={handleDeleteTodo} addNewCategory={addNewCategory} setTodoCategories={setTodoCategories} todoCategories={todoCategories} deleteCategory={deleteCategory}/>

      </div>


    </div>
  ); 
  
  
  
}

export default Todo;