export const doneTodosCount = (array) =>
  array.reduce((count, task) => (task.done ? count + 1 : count), 0);
