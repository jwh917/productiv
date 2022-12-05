import React, { useEffect, useState }  from "react";
import TodoList from "./TodoList"


function Todo() {

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


 
  const selectedTodoCategory = todoCategories.find(todoCat => {
    return todoCat.name === selectedCategory
    // setState for selectedCategory
  })

  let selectedTodos = []

  if (selectedCategory === "All") {
    selectedTodos = todos
  } else {
    selectedTodos = todos.filter((todo) => 
    (todo.todo_category_id === selectedTodoCategory.id))
  }




  return (
    <div>
      <h1>Todo List</h1>
      <h2>Todo Count: {todos.length}</h2>

      <TodoList selectedTodos={selectedTodos} categoryNames={categoryNames} />

    </div>
  ); 
  
  
  
}

export default Todo;