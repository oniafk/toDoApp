import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { ToDoButton } from "./ToDoButton";
// import './App.css';

const ToDos = [
  { text : 'Cut onion', completed: false },
  { text : 'take course intro react', completed: false },
  { text : 'Lloracion con la llorona', completed: false },
];


function App() {
  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>  

      <ToDoList>
        {ToDos.map(toDo => (
          <ToDoItem key={toDo.text} text={toDo.text}/>
        ))}
      </ToDoList>  

      <ToDoButton/>   
    </React.Fragment>
  );
}

export default App;
