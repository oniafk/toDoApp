function ToDoSearch() {
  return (
    <div className="absolute left-16 -top-4 w-16 border-solid rounded-md ">
      <input
        className="bg-teal-500 rounded-2xl text-white placeholder-white p-2 border-white "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export { ToDoSearch };
