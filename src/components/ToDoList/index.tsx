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
}

function ToDoList(props: ToDoListProps) {
  return (
    <div className=" grid grid-flow-row content-around justify-items-center h-full pb-20 ">
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
    </div>
  );
}

export { ToDoList };
