import React from "react";
import { ToDoProvider } from "../ToDoContext";
import { AppUI } from "./AppUI";


// const defaultToDos = [
//   { text : 'Cut onion', completed: true },
//   { text : 'take course intro react', completed: false },
//   { text : 'Lloracion con la llorona', completed: true },
//   { text : 'jugar wow', completed: false},
// ];


function App() {
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;
