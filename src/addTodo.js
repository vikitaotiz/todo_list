export default (todos, todo) => {
  if (todo) {
    const index = todos.length + 1;
    todos.push({ description: todo, completed: 0, index });
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    alert('Cannot add blank todo!');
  }
};