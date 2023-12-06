import type { MouseEventHandler } from "react";

interface ToDoItemProps {
  text: string;
  completed: boolean;
  important: boolean;
  clickCompleteToDo: (text: string) => void;
  clickDeleteToDo: (text: string) => void;
  clickImportantToDo: (text: string) => void;
}

function ToDoItem(props: ToDoItemProps) {
  const handleComplete: MouseEventHandler<HTMLSpanElement> = () => {
    props.clickCompleteToDo(props.text);
  };

  const handleDelete: MouseEventHandler<HTMLSpanElement> = () => {
    props.clickDeleteToDo(props.text);
  };

  const handleImportant: MouseEventHandler<HTMLSpanElement> = () => {
    props.clickImportantToDo(props.text);
  };
  return (
    <div
      className={`w-60 grid m-3 ${
        props.important
          ? props.completed
            ? "bg-teal-400"
            : "bg-orange-400"
          : props.completed
          ? "bg-teal-400"
          : "bg-slate-200"
      } h-auto rounded-md`}
    >
      <div className="grid grid-flow-col h-auto  p-2 w-52 mb-2">
        <p className="w-48">{props.text}</p>
        <div className="pl-1">
          <span onClick={handleImportant}>🌟</span>
        </div>
      </div>
      <div className="grid grid-flow-col justify-between px-1 bg-teal-400 rounded-b-md">
        <div>
          <p>date</p>
        </div>
        <div>
          <span className=" mr-2 hover:cursor-pointer" onClick={handleComplete}>
            ✅
          </span>
          <span className="hover:cursor-pointer" onClick={handleDelete}>
            ❌
          </span>
        </div>
      </div>
    </div>
  );
}

export { ToDoItem };
