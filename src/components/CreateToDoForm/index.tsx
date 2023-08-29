import React from "react";

interface CreateToDoFormProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addToDo: (text: string) => void;
}

function CreateToDoForm(props: CreateToDoFormProps) {
  const { openModal, setOpenModal, addToDo } = props;

  const [newtoDoValue, setNewToDoValue] = React.useState<string>("");

  const onSubmit = () => {
    addToDo(newtoDoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDoValue(event.target.value);
  };

  return (
    <form className=" border border-black rounded-lg w-5/6 mx-auto p-3 absolute bg-gray-200  m-auto inset-0 h-40 flex flex-col justify-evenly z-1">
      <div>
        <input
          value={newtoDoValue}
          onChange={onChange}
          className="rounded-md mx-auto w-full h-10 p-2 px-3 border border-black "
          type="text"
          placeholder="Write your To Do here"
        />
      </div>
      <div className="flex justify-evenly mt-2">
        <button
          className=" bg-teal-400 rounded-md text-center p-2"
          onClick={onSubmit}
        >
          create To Do
        </button>
        <button
          className="w-10 bg-orange-400  rounded-md text-center p-2"
          onClick={() => onCancel}
        >
          ❌
        </button>
      </div>
    </form>
  );
}

export { CreateToDoForm };
