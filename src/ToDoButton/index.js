import React from "react";
import './CreateToDoButton.css';

function ToDoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    };

    return(
        <button 
        className="CreateToDoButton"
        onClick={ onClickButton }
        >
        +
        </button>
    )
};

export { ToDoButton };