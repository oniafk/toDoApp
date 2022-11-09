import React from "react";
import './ToDoItem.css';

function ToDoItem (props) {
    
       return(
        <li className="ToDoItem">            
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✓</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span onClick={props.onDelete} className="Icon Icon-delete">X</span>
        </li>
    )
};

export { ToDoItem };