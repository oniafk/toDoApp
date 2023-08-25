import { useState } from "react";
import { ToDoItemType } from "../../Types/ToDoItemType";
import { UseLocalStorageReturnType } from "../../Types/UseLocalStorageReturnType";

function useLocalStorage(
  itemName: string,
  initialValue: ToDoItemType[] = []
): UseLocalStorageReturnType {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem: ToDoItemType[];

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [localStorageToDoItem, setLocalStorageToDoItem] =
    useState<ToDoItemType[]>(parsedItem);

  const saveItem = (newItem: ToDoItemType[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setLocalStorageToDoItem(newItem);
  };

  return { localStorageToDoItem, saveItem };
}

export { useLocalStorage };
