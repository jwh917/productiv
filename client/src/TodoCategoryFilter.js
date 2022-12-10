import React from "react";


const linkStyles = {
  display: "inline-block",
  width: "80px",
  textAlign: "center",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightgreen",
  borderRadius: "10px",
  textDecoration: "none",
  color: "white",
};


function TodoCategoryFilter({ categoryNames, selectedCategory, handleCategorySelected }) {
   
    const categoryButtons = categoryNames.map((category) => {
        return (<button
            key={category}
            style={linkStyles}
            onClick={() => (handleCategorySelected(category))}
            >
          {category}
          </button>)
    })
    return <div> {categoryButtons} </div>   
}

export default TodoCategoryFilter;