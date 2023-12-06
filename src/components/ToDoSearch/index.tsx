import React from "react";

type ToDoSearchProps = {
  searchToDo: string;
  setSearchToDo: React.Dispatch<React.SetStateAction<string>>;
};

function ToDoSearch({ searchToDo, setSearchToDo }: ToDoSearchProps) {
  return (
    <div className="absolute -top-10 w-4/6 h-12 border-solid rounded-md m-auto inset-0 ">
      <input
        onChange={(event) => {
          setSearchToDo(event.target.value);
        }}
        className="absolute bg-teal-500 rounded-2xl text-white placeholder-white p-2 border-white  m-auto inset-0"
        type="text"
        placeholder="Search..."
        value={searchToDo}
      />
    </div>
  );
}

export { ToDoSearch };
