import { useSelector } from "react-redux";

import { TodoList } from "./components/molecules/todo-list";
import { Filter } from "./components/molecules/filter";
import { Title } from "./components/atoms/title";
import { Modal } from "./components/atoms/modal";
import { NewTodoForm } from "./components/molecules/new-todo-form";

const App = () => {
  const tasks = [
    { label: "Complete assignment", done: false },
    { label: "Read a book", done: true },
    { label: "Exercise", done: false },
  ];

  const modal = useSelector((state) => state.modal);

  return (
    <main className="max-w-[1360px] p-5 xl:p-0 xl:pt-20 m-auto">
      {modal && (
        <Modal>
          <NewTodoForm />
        </Modal>
      )}
      <Title />
      <div className="flex justify-center gap-20 mx-auto w-full">
        <TodoList tasks={tasks} />
        <Filter />
      </div>
    </main>
  );
};

export default App;
