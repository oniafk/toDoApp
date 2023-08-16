import { ToDoItem } from "./ToDoItem";

interface ToDos {
  text: string;
}

interface ToDoListProps {
  toDoItems: ToDos[];
}

function ToDoList(props: ToDoListProps) {
  return (
    <div className=" grid grid-flow-row content-around justify-items-center h-full pb-20 ">
      {props.toDoItems.map((item, index) => (
        <ToDoItem key={index} text={item.text} />
      ))}
    </div>
  );
}

export { ToDoList };
