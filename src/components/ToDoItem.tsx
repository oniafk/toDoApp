interface ToDoItemProps {
  text: string;
}

function ToDoItem(props: ToDoItemProps) {
  return (
    <div className="w-60 grid m-3 bg-slate-200  h-auto rounded-md ">
      <div className="grid grid-flow-col h-auto  p-2 w-52 mb-2">
        <p className="w-48">{props.text}</p>
        <div className="pl-1">
          <span>🌟</span>
        </div>
      </div>
      <div className="grid grid-flow-col justify-between px-1 bg-teal-400 rounded-b-md">
        <div>
          <p>date</p>
        </div>
        <div>
          <span className=" mr-2">✅</span>
          <span>❌</span>
        </div>
      </div>
    </div>
  );
}

export { ToDoItem };
