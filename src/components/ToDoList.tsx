import { ToDoItem } from "./ToDoItem";

interface ToDos {
  text: string;
}

interface ToDoListProps {
  toDoItems: ToDos[];
}

function ToDoList(props: ToDoListProps) {
  return (
    <div>
      {props.toDoItems.map((item, index) => (
        <ToDoItem key={index} text={item.text} />
      ))}
    </div>
  );
}

export { ToDoList };
