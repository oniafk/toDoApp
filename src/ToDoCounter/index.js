import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css";

function ToDoCounter() {

    const { totalToDos, completedToDos } = React.useContext( ToDoContext )
    
    return(
        <h2 className="ToDoCounter">You have completed { completedToDos } of { totalToDos } to do's</h2>
    )
};

export {  ToDoCounter };