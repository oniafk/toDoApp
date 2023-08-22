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

type UseLocalStorageReturnType = {
  localStorageToDoItem: ToDoItemType[];
  saveItem: (newItem: ToDoItemType[]) => void;
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

function useLocalStorage(
  itemName: string,
  initialValue: ToDoItemType[] = []
): UseLocalStorageReturnType {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem: ToDoItemType[];

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [localStorageToDoItem, setLocalStorageToDoItem] =
    useState<ToDoItemType[]>(parsedItem);

  const saveItem = (newItem: ToDoItemType[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setLocalStorageToDoItem(newItem);
  };

  return { localStorageToDoItem, saveItem };
}

function App() {
  const localStorageData = useLocalStorage("myToDos", []);

  const [searchToDo, setSearchToDo] = useState<string>("");
  const [completedToDos, setCompletedToDos] = useState<ToDoItemType[]>(
    localStorageData.localStorageToDoItem
  );

  let completedToDosArray = completedToDos.filter(
    (item) => !!item.completed === true
  ).length;
  let completedCount = completedToDos.length;

  const filterToDos = completedToDos.filter((item) =>
    item.text.toLowerCase().includes(searchToDo.toLocaleLowerCase())
  );

  const clickCompleteToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setCompletedToDos(newTodos);
    localStorageData.saveItem(newTodos);
  };

  const clickDeleteToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setCompletedToDos(newTodos);
    localStorageData.saveItem(newTodos);
  };

  const clickImportantToDo = (text: string) => {
    const newTodos = [...completedToDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].important = true;
    setCompletedToDos(newTodos);
    localStorageData.saveItem(newTodos);
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
