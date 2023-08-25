type Props = {
  completedToDos: number;
  defaultToDos: number;
  completedToDosArray: number;
};

function ToDoCounter(props: Props) {
  let contentSpan;
  let contentP;

  if (props.defaultToDos === 0) {
    contentSpan = <span>You dont have any To Do</span>;
  } else {
    contentSpan = (
      <span>
        {props.completedToDos} of {props.defaultToDos} completed
      </span>
    );
    contentP = <p className="text-white">you have completed</p>;
  }

  return (
    <div className="todo-counter  align-center h-24">
      <div className=" flex-wrap flex flex-col  h-24 justify-between pt-5 items-center ">
        {contentP}
        <div className="text-white">{contentSpan}</div>
      </div>
    </div>
  );
}

export { ToDoCounter };
