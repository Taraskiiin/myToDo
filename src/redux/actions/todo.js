export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_DONE = 'TOGGLE_DONE'

export const addTodo = (label, done) => ({
  type: ADD_TODO,
  payload: {
    label,
    done,
  },
})

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: {
    index,
  },
})

export const toggleDone = (index) => ({
  type: TOGGLE_DONE,
  payload: {
    index,
  },
})
