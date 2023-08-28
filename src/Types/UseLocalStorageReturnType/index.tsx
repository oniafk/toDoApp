import { ToDoItemType } from "../ToDoItemType";

type UseLocalStorageReturnType = {
  localStorageToDoItem: ToDoItemType[];
  saveItem: (newItem: ToDoItemType[]) => void;
  loading: boolean;
  error: boolean;
};

export type { UseLocalStorageReturnType };
