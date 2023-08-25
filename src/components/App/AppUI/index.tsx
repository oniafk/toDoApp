import { ToDoItemType } from "../../../Types/ToDoItemType";

import React from "react";

type AppUIProps = {
  completedCount: number;
  searchToDo: string;
  setSearchToDo: React.Dispatch<React.SetStateAction<string>>;
  filterToDos: ToDoItemType[];
  clickCompleteToDo: (text: string) => void;
  clickDeleteToDo: (text: string) => void;
  clickImportantToDo: (text: string) => void;
  CreateToDoButton: React.FC;
  ToDoList: (props: ToDoListProps) => JSX.Element;
  ToDoSearch: (props: ToDoSearchProps) => JSX.Element;
  ToDoCounter: (props: ToDoCounterProps) => JSX.Element;
  TotalToDosCount: number;
};

type ToDoListProps = {
  toDoItems: ToDoItemType[];
  clickCompleteToDo: (text: string) => void;
  clickDeleteToDo: (text: string) => void;
  clickImportantToDo: (text: string) => void;
};

type ToDoSearchProps = {
  searchToDo: string;
  setSearchToDo: React.Dispatch<React.SetStateAction<string>>;
};

type ToDoCounterProps = {
  completedToDos: number;
  defaultToDos: number;
  completedToDosArray: number;
};

function AppUI({
  completedCount,
  searchToDo,
  setSearchToDo,
  filterToDos,
  clickCompleteToDo,
  clickDeleteToDo,
  clickImportantToDo,
  CreateToDoButton,
  ToDoList,
  ToDoSearch,
  ToDoCounter,
}: AppUIProps) {
  return (
    <>
      <main>
        <section className="header flex bg-blue-700 w-full h-auto justify-center items-center pb-14  z-1">
          <ToDoCounter
            completedToDos={completedCount}
            defaultToDos={filterToDos.length}
            completedToDosArray={completedCount}
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

export { AppUI };
