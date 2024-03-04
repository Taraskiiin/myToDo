import { TodoListItem } from "../../atoms/todo-list-item";

export const TodoList = ({ tasks }) => {
  const onClick = () => console.log("1");
  return (
    <ul className="w-2/3">
      {tasks.length > 0 &&
        tasks.map(({ label, done }, index) => (
          <TodoListItem
            key={index}
            label={label}
            done={done}
            onClick={onClick}
          />
        ))}
    </ul>
  );
};
