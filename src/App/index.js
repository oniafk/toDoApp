import React from "react";
import { AppUI } from "./AppUI";

const defaultToDos = [
  { text : 'Cut onion', completed: true },
  { text : 'take course intro react', completed: false },
  { text : 'Lloracion con la llorona', completed: true },
  { text : 'jugar wow', completed: false},
];


function App() {
  const [ToDos, setToDos] = React.useState (defaultToDos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = ToDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = ToDos.length;

  let searchedToDos = [];

  if(!searchValue.length >= 1) {
    searchedToDos = ToDos;
  } else {
    searchedToDos = ToDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    }) 
  }

  const completeToDo = (text) => {
    const toDoIndex = ToDos.findIndex(toDo => toDo.text === text);

    const newToDos = [...ToDos];
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = ToDos.findIndex(toDo => toDo.text === text);

    const newToDos = [...ToDos];
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
  };

  return (
    <AppUI
      totalToDos={ totalToDos }
      completedToDos={ completedToDos }
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}   
    />
  );
}

export default App;
