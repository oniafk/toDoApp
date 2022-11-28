import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoButton } from "../ToDoButton";
import { Modal } from "../Modal";
import {ToDoForm} from "../ToDoForm"

function AppUI () {

    const { error, loading, searchedToDos, completeToDo, deleteToDo, openModal, setOpenModal } = React.useContext(ToDoContext);

    return (
        
    <React.Fragment>
    <ToDoCounter />
    <ToDoSearch />
      

    <ToDoList>
      {error && <p>el cielo se cae, hay un error!!</p>}
      {loading && <p>Estamos cargando</p>}
      {(!loading && !searchedToDos.length) && <p>Crea tu primer To Do</p>}

      {searchedToDos.map(toDo => (
        <ToDoItem key={toDo.text} text={toDo.text} completed={toDo.completed}
        onComplete={() => completeToDo(toDo.text)}
        onDelete={() => deleteToDo(toDo.text)}/>          
      ))}
    </ToDoList>  
 
    {!!openModal && (
       <Modal>
        <ToDoForm></ToDoForm>
     </Modal>
    )}

    <ToDoButton
      setOpenModal = {setOpenModal}
    />   
  </React.Fragment>

    );
}

export { AppUI };