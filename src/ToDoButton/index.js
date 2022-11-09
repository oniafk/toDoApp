import React from "react";
import './CreateToDoButton.css';

function ToDoButton() {
    const onClickButton = (message) => {
        alert(message);
    };

    return(
        <button 
        className="CreateToDoButton"
        onClick={() => onClickButton('olis perros')}
        >
        +
        </button>
    )
};

export { ToDoButton };