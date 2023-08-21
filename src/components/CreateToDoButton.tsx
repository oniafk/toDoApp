import type { MouseEventHandler } from "react";

function CreateToDoButton() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event);
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
