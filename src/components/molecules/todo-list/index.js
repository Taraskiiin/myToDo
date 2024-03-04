import { TodoListItem } from "../../atoms/todo-list-item";
import { Button } from "../../atoms/button";

export const TodoList = ({ tasks }) => {
  const onClick = () => console.log("1");
  return (
    <div className="flex flex-col gap-10 max-w-2/3 items-center justify-center p-10 rounded-md bg-white">
      <ul className="w-fit">
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
      <div className="max-w-[320px] mx-auto">
        <Button label="+ ADD" onClick={() => console.log("1")} />
      </div>
    </div>
  );
};
