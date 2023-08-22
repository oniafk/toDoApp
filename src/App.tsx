import React, { useState } from "react";
import "./App.css";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { CreateToDoButton } from "./components/CreateToDoButton";

type ToDoItemType = {
  text: string;
  completed: boolean;
  important: boolean;
};

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
  const savedToDosString = localStorage.getItem("myToDos");
  const parsedToDos: ToDoItemType[] = savedToDosString
    ? JSON.parse(savedToDosString)
    : localStorage.setItem("myToDos", JSON.stringify([]));

  const [searchToDo, setSearchToDo] = useState<string>("");
  console.log(searchToDo);

  const [completedToDos, setCompletedToDos] =
    useState<ToDoItemType[]>(parsedToDos);

  let completedToDosArray = completedToDos.filter(
    (item) => !!item.completed === true
  ).length;
  let completedCount = completedToDos.length;

  const filterToDos = completedToDos.filter((item) =>
    item.text.toLowerCase().includes(searchToDo.toLocaleLowerCase())
  );

  const updateLocalStorageAndToDoItems = (newToDos: ToDoItemType[]) => {
    localStorage.setItem("myToDos", JSON.stringify(newToDos));
    setCompletedToDos(newToDos);
  };

  const clickCompleteToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    updateLocalStorageAndToDoItems(newTodos);
  };

  const clickDeleteToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    updateLocalStorageAndToDoItems(newTodos);
  };

  const clickImportantToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].important = true;
    updateLocalStorageAndToDoItems(newTodos);
  };

  return (
    <>
      <main>
        <section className="header flex bg-blue-700 w-full h-auto justify-center items-center pb-14  z-1">
          <ToDoCounter
            completedToDos={completedToDosArray}
            defaultToDos={completedCount}
          />
        </section>
        <div className="bg-blue-700 h-full">
          <section className="relative w-full h-8 bg-gray-300 rounded-t-2xl z-2 pt-10 pb-5">
            <ToDoSearch searchToDo={searchToDo} setSearchToDo={setSearchToDo} />
          </section>
          <section className="h-full grid grid-flow-row justify-center bg-gray-300 ">
            <ToDoList
              toDoItems={filterToDos}
              clickCompleteToDo={clickCompleteToDo}
              clickDeleteToDo={clickDeleteToDo}
              clickImportantToDo={clickImportantToDo}
            />
            <CreateToDoButton />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
