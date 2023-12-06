import React, { useState } from "react";
import { ToDoItemType } from "../../Types/ToDoItemType";
import { UseLocalStorageReturnType } from "../../Types/UseLocalStorageReturnType";

function useLocalStorage(
  itemName: string,
  initialValue: ToDoItemType[]
): UseLocalStorageReturnType {
  const [localStorageToDoItem, setLocalStorageToDoItem] =
    useState<ToDoItemType[]>(initialValue);

  const [loading, setLoanding] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem: ToDoItemType[];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setLocalStorageToDoItem(parsedItem);
        }

        setLoanding(false);
      } catch (error) {
        setError(true);
        setLoanding(false);
        console.log(error);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem: ToDoItemType[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setLocalStorageToDoItem(newItem);
  };

  return { localStorageToDoItem, saveItem, loading, error };
}

export { useLocalStorage };
