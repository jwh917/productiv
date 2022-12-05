import React from "react";



function TodoItem({ title, category }) {

  

    return (
        <div >
            <h4> - {category}</h4>
            <h5> &emsp; &emsp;{title}</h5>
        </div>
    )
}

export default TodoItem;