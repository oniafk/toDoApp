interface ToDoItemProps {
  text: string;
}

function ToDoItem(props: ToDoItemProps) {
  return (
    <div>
      <div>
        <p>{props.text}</p>
        <span>
          Star icon <img src="" alt="Star mark" />
        </span>
      </div>
      <div>
        <p>date</p>
        <span>
          Add to do icon <img src="" alt="Add To Do" />
          Delete icon <img src="" alt="Delete" />
        </span>
      </div>
    </div>
  );
}

export { ToDoItem };
