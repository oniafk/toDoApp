function ToDoSearch() {
  return (
    <div className="absolute -top-10 w-4/6 h-12 border-solid rounded-md m-auto inset-0 ">
      <input
        className="absolute bg-teal-500 rounded-2xl text-white placeholder-white p-2 border-white  m-auto inset-0"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export { ToDoSearch };
