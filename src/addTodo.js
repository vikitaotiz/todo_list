export default (todos, todo) => {
  if (todo) {
    const index = todos.length + 1;
    todos.push({ description: todo, completed: false, index });
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    /* eslint-disable */
    alert('Cannot add blank todo!');
    /* eslint-enable */
  }
};