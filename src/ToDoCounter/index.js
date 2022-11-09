import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({ total, completed }) {
    
    return(
        <h2 className="ToDoCounter">You have completed { completed } of { total } to do's</h2>
    )
};

export {  ToDoCounter };