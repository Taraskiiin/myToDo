import { TodoList } from "./components/molecules/todo-list";
import { Filter } from "./components/molecules/filter";
import { Title } from "./components/atoms/title";

const App = () => {
  const tasks = [
    { label: "Complete assignment", done: false },
    { label: "Read a book", done: true },
    { label: "Exercise", done: false },
  ];

  return (
    <main className="max-w-[1360px] p-5 xl:p-0 m-auto">
      <Title />
      <div className="flex justify-between mx-auto">
        <TodoList tasks={tasks} />
        <Filter />
      </div>
    </main>
  );
};

export default App;
