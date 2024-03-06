import { useDispatch } from 'react-redux'
import { showModal } from '../../redux/actions/modal'
import { toggleDone, removeTodo } from '../../redux/actions/todo'

import { TodoListItem } from '../common/todo-list-item'
import { Button } from '../common/button'

export const TodoList = ({ tasks }) => {
  const dispatch = useDispatch()
  const handleShowModal = () => dispatch(showModal())
  const handleToggleTodo = (index) => dispatch(toggleDone(index))
  const handleRemoveTodo = (index) => dispatch(removeTodo(index))

  return (
    <div className="flex flex-col gap-10 min-w-[560px] items-center justify-center p-10 rounded-md bg-white">
      <ul className="w-fit">
        {tasks.length > 0 &&
          tasks.map(({ label, done }, index) => (
            <TodoListItem
              key={index}
              label={label}
              done={done}
              onClick={() => handleToggleTodo(index)}
              onRemove={() => handleRemoveTodo(index)}
            />
          ))}
      </ul>
      <div className="max-w-[320px] mx-auto">
        <Button label="+ ADD" onClick={handleShowModal} />
      </div>
    </div>
  )
}
