import { ToDoItemType } from "../../../Types/ToDoItemType";
import { UseLocalStorageReturnType } from "../../../Types/UseLocalStorageReturnType";
import { Modal } from "../../Modal";

import React from "react";

type AppUIProps = {
  completedCount: number;
  searchToDo: string;
  setSearchToDo: React.Dispatch<React.SetStateAction<string>>;
  filterToDos: ToDoItemType[];
  clickCompleteToDo: (text: string) => void;
  clickDeleteToDo: (text: string) => void;
  clickImportantToDo: (text: string) => void;
  CreateToDoButton: (props: CreateToDoButtonProps) => JSX.Element;
  ToDoList: (props: ToDoListProps) => JSX.Element;
  ToDoSearch: (props: ToDoSearchProps) => JSX.Element;
  ToDoCounter: (props: ToDoCounterProps) => JSX.Element;
  TotalToDosCount: number;
  LocalStorageData: UseLocalStorageReturnType;
  OpenModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  CreateToDoForm: (props: CreateToDoFormProps) => JSX.Element;
};

interface CreateToDoFormProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface CreateToDoButtonProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type ToDoListProps = {
  toDoItems: ToDoItemType[];
  clickCompleteToDo: (text: string) => void;
  clickDeleteToDo: (text: string) => void;
  clickImportantToDo: (text: string) => void;
};

type ToDoSearchProps = {
  searchToDo: string;
  setSearchToDo: React.Dispatch<React.SetStateAction<string>>;
};

type ToDoCounterProps = {
  completedToDos: number;
  defaultToDos: number;
  completedToDosArray: number;
};

function AppUI({
  completedCount,
  searchToDo,
  setSearchToDo,
  filterToDos,
  clickCompleteToDo,
  clickDeleteToDo,
  clickImportantToDo,
  CreateToDoButton,
  ToDoList,
  ToDoSearch,
  ToDoCounter,
  LocalStorageData,
  OpenModal,
  setOpenModal,
  CreateToDoForm,
}: AppUIProps) {
  let loading = LocalStorageData.loading;
  let error = LocalStorageData.error;
  return (
    <>
      <main>
        <section className="header flex bg-blue-700 w-full h-auto justify-center items-center pb-14  z-1">
          <ToDoCounter
            completedToDos={completedCount}
            defaultToDos={filterToDos.length}
            completedToDosArray={completedCount}
          />
        </section>
        <div className="bg-blue-700 h-full">
          <section className="relative w-full h-8 bg-gray-300 rounded-t-2xl z-2 pt-10 pb-5">
            <ToDoSearch searchToDo={searchToDo} setSearchToDo={setSearchToDo} />
          </section>
          <section className="h-full grid grid-flow-row justify-center bg-gray-300 ">
            <ToDoList
              {...(loading && <p>Loading...</p>)}
              {...(error && <p>Error...</p>)}
              toDoItems={filterToDos}
              clickCompleteToDo={clickCompleteToDo}
              clickDeleteToDo={clickDeleteToDo}
              clickImportantToDo={clickImportantToDo}
            />
            <CreateToDoButton
              openModal={OpenModal}
              setOpenModal={setOpenModal}
            />

            {OpenModal && (
              <Modal container={document.getElementById("modal")!}>
                <CreateToDoButton
                  openModal={OpenModal}
                  setOpenModal={setOpenModal}
                />
                {!!OpenModal && (
                  <CreateToDoForm
                    openModal={OpenModal}
                    setOpenModal={setOpenModal}
                  />
                )}
              </Modal>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export { AppUI };
