export default (e) => {
  /* eslint-disable */
  const confirmDelete = confirm('Are you sure?');
  /* eslint-enable */
  if (confirmDelete) {
    const todosArray = JSON.parse(localStorage.getItem('todos'));
    const todoObject = todosArray.find((todo) => todo.index === Number(e.target.parentNode.id));
    const index = todosArray.indexOf(todoObject);
    todosArray.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todosArray));
  }
};