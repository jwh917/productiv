import React from "react";


const buttonStyles = {
  display: "inline-block",
  width: "80px",
  textAlign: "center",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightgreen",
  borderRadius: "10px",
  textDecoration: "none",
  color: "black",
};

const xStyles = {
  color: "red",
  border: "1px solid red",
  cursor: "pointer"
};


function TodoCategoryFilter({ categoryNames, handleCategorySelected, todoCategories, deleteCategory}) {

  function handleDeleteCategory(category){
    const deletedCategory = todoCategories.find((todo) => (todo.name === category))

    deleteCategory(category)

    fetch(`todo_categories/${deletedCategory.id}`, {
      method: "DELETE"
    });

  }


    const categoryButtons = categoryNames.map((category) => {
        return ( <div key={category}>  
            <button
            key={category}
            style={buttonStyles}
            onClick={() => (handleCategorySelected(category))}
            >
          {category}
          <br/>
          <br/>
          
          </button>
          {category === "All" ? "" : <span style={xStyles} onClick={() => (handleDeleteCategory(category))}>X</span> }

          </div>)
    })

    return <div className="grid-container"> {categoryButtons} </div>   
}

export default TodoCategoryFilter;