export function doneTodosCount(array) {
  if (array.length > 0) {
    return array.reduce((count, task) => {
      return task.done ? count + 1 : count
    }, 0)
  }
  return 0
}
