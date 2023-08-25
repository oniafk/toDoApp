import { ToDoItemType } from "../ToDoItemType";

type UseLocalStorageReturnType = {
  localStorageToDoItem: ToDoItemType[];
  saveItem: (newItem: ToDoItemType[]) => void;
};

export type { UseLocalStorageReturnType };
