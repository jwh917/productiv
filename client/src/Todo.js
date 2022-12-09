import React, { useEffect, useState } from "react";
import TodoList from "./TodoList"


function Todo({user}) {

  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [todoCategories, setTodoCategories] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);



  useEffect(() => {
    fetch("/todos")
      .then((res) => {
      if (res.ok) {
        res.json().then((todos) => setTodos(todos));
      }
    });
  }, []);


  useEffect(() => {
    fetch("/todo_categories")
      .then((r) => r.json())
      .then((categories) => {
        setTodoCategories(categories)
        const categoriesNames = categories.map(category => category.name)
        categoriesNames.unshift("All")
        setCategoryNames(categoriesNames)})
  }, []);


  // console.log(todos)
  // console.log(todoCategories)
  // console.log(categoryNames)


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


  return (
    <div>
      <h1>Todo List</h1>
      <h2>Todo Count: {todos.length}</h2>

      <TodoList user={user} selectedTodos={selectedTodos} categoryNames={categoryNames} selectedTodoCategory={selectedTodoCategory} handleCategorySelected={handleCategorySelected} addNewTodo={addNewTodo} handleDeleteTodo={handleDeleteTodo}/>

    </div>
  ); 
  
  
  
}

export default Todo;