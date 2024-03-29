import React from "react";
import { ToDoItem } from "../ToDoItem";

interface ToDos {
  text: string;
  completed: boolean;
  important: boolean;
}

interface ToDoListProps {
  toDoItems: ToDos[];
  clickCompleteToDo: (text: string) => void;
  clickDeleteToDo: (text: string) => void;
  clickImportantToDo: (text: string) => void;
  loading: boolean;
  error: boolean;
  children: React.ReactNode;
}

function ToDoList(props: ToDoListProps) {
  return (
    <div className=" flex flex-col content-between gap-5 justify-items-center h-auto pb-20 ">
      {props.toDoItems.map((item, index) => (
        <ToDoItem
          key={index}
          text={item.text}
          completed={item.completed}
          important={item.important}
          clickCompleteToDo={props.clickCompleteToDo}
          clickDeleteToDo={props.clickDeleteToDo}
          clickImportantToDo={props.clickImportantToDo}
        />
      ))}
      {props.children}
    </div>
  );
}

export { ToDoList };
