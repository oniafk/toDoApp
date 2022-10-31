import React from "react";
import './ToDoItem.css';

function ToDoItem (props) {
    const onComplete = () => {
        alert('you have completed ' + props.text)
    };
    const onDelete = () => {
        alert('you have removed ' + props.text)
    };

    return(
        <li className="ToDoItem">            
            <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✓</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span onClick={onDelete} className="Icon Icon-delete">X</span>
        </li>
    )
};

export { ToDoItem };