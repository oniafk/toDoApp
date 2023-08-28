import type { MouseEventHandler } from "react";

interface CreateToDoButtonProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateToDoButton(CreateToDoButtonProps: CreateToDoButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    CreateToDoButtonProps.setOpenModal(!CreateToDoButtonProps.openModal);
  };

  return (
    <button
      className=" fixed bottom-5 right-5 rounded-full bg-teal-500 w-10 h-10 p-auto text-white text-2xl"
      onClick={handleClick}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
