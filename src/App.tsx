import "./App.css";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { CreateToDoButton } from "./components/CreateToDoButton";

function App() {
  return (
    <>
      <main>
        <section className="header flex bg-blue-700 w-100% h-100% justify-center items-center pb-14  z-1">
          <ToDoCounter />
        </section>
        <div className="bg-blue-700">
          <section className="relative w-full h-8 bg-gray-300 rounded-t-xl z-2 pt-10">
            <ToDoSearch />
          </section>
          <section className="h-auto items-center justify-center bg-gray-300">
            <ToDoList
              toDoItems={[
                { text: "do something" },
                { text: "Do another thing" },
                { text: "do something else" },
              ]}
            />
            <CreateToDoButton />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
