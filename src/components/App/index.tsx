import React, { useState } from "react";
import "./App.css";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { useLocalStorage } from "../../Hooks/LocalStorage";
import { ToDoItemType } from "../../Types/ToDoItemType";
import { AppUI } from "./AppUI";

// let defaultToDos = [
//   { text: "do something 1", completed: false, important: false },
//   { text: "Do another thing 2", completed: false, important: false },
//   { text: "do Something else 3", completed: false, important: false },
//   { text: "Do something else again 4", completed: false, important: false },
//   { text: "do something else again 5", completed: true, important: false },
//   { text: "hakuna matata", completed: true, important: false },
// ];

// localStorage.setItem('myToDos', JSON.stringify(defaultToDos));
// localStorage.removeItem("myToDos");

function App() {
  const { localStorageToDoItem, saveItem, loading, error } = useLocalStorage(
    "myToDos",
    []
  );

  const [searchToDo, setSearchToDo] = useState<string>("");

  const [completedToDos, setCompletedToDos] =
    useState<ToDoItemType[]>(localStorageToDoItem);

  setTimeout(() => {
    setCompletedToDos(localStorageToDoItem);
  }, 500);

  const completedToDosCount = completedToDos.filter(
    (item) => item.completed
  ).length;
  const totalToDosCount = completedToDos.length;

  const filterToDos = completedToDos.filter((item) =>
    item.text.toLowerCase().includes(searchToDo.toLocaleLowerCase())
  );

  const clickCompleteToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setCompletedToDos(newTodos);
    saveItem(newTodos);
  };

  const clickDeleteToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setCompletedToDos(newTodos);
    saveItem(newTodos);
  };

  const clickImportantToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].important = true;
    setCompletedToDos(newTodos);
    saveItem(newTodos);
  };

  return (
    <AppUI
      completedCount={completedToDosCount}
      searchToDo={searchToDo}
      setSearchToDo={setSearchToDo}
      filterToDos={filterToDos}
      clickCompleteToDo={clickCompleteToDo}
      clickDeleteToDo={clickDeleteToDo}
      clickImportantToDo={clickImportantToDo}
      CreateToDoButton={CreateToDoButton}
      ToDoList={ToDoList}
      ToDoSearch={ToDoSearch}
      ToDoCounter={ToDoCounter}
      TotalToDosCount={totalToDosCount}
      LocalStorageData={{ loading, error, localStorageToDoItem, saveItem }}
    />
  );
}

export default App;
