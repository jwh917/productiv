import React from "react";



function TodoCategoryFilter({ categoryNames, selectedCategory, handleCategorySelected }) {
   
    const categoryButtons = categoryNames.map((category) => {
        return (<button
            key={category}
            onClick={() => (handleCategorySelected(category))}
            >
          {category}
          </button>)
    })
    return <div> {categoryButtons} </div>   
}

export default TodoCategoryFilter;