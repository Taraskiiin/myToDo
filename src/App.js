/* eslint-disable unicorn/filename-case */
import React from 'react'
import { useSelector } from 'react-redux'

import { doneTodosCount } from './utils/done-todos-count.js'

import { TodoList } from './components/todo-list'
import { NewTodoForm } from './components/new-todo-form'
import { DoneCounter } from './components/common/done-counter'
import { Filter } from './components/filter'
import { Title } from './components/common/title'
import { Modal } from './components/common/modal'

const App = () => {
  const modal = useSelector((state) => state.modal)
  const todo = useSelector((state) => state.todo)
  const filter = useSelector((state) => state.filter)

  let filteredTodos

  switch (filter) {
    case 'done': {
      filteredTodos = todo.filter((task) => task.done)
      break
    }
    case 'unfinished': {
      filteredTodos = todo.filter((task) => !task.done)
      break
    }
    default: {
      filteredTodos = todo
      break
    }
  }

  const doneCount = doneTodosCount(todo)

  return (
    <main className="max-w-[1360px] p-5 xl:p-0 xl:pt-20 m-auto">
      {modal && (
        <Modal>
          <NewTodoForm />
        </Modal>
      )}
      <Title />
      <DoneCounter all={todo.length} doneCount={doneCount} />
      <div className="flex justify-center gap-20 mx-auto w-full">
        <TodoList tasks={filteredTodos} />
        <Filter />
      </div>
    </main>
  )
}

export default App
