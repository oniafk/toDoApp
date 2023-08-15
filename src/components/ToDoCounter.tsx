function ToDoCounter() {
  return (
    <div className="todo-counter  align-center h-24">
      <div className=" flex-wrap flex flex-col  h-24 justify-between pt-5 items-center ">
        <p className="text-white">you have completed</p>
        <div className="text-white">
          <span>0</span> to do's of <span>0</span>
        </div>
      </div>
    </div>
  );
}

export { ToDoCounter };
