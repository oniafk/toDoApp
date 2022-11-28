import React from "react";
import { ToDoContext } from "./ToDoContext";

function ToDoForm() {

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewToDoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder="Cut onion for luch"
            />
            <div>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">
                    Add 
                </button>
            </div>
        </form>
    );
}

export { ToDoForm }