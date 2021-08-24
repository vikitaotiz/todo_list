export default () => {
  const todosArray = JSON.parse(localStorage.getItem('todos'));
  const itemsToBeDeleted = todosArray.filter((val) => val.completed);
  if (itemsToBeDeleted.length) {
    /* eslint-disable */
    const confirmDelete = confirm('Are you sure?');
    /* eslint-enable */
    if (confirmDelete) {
      itemsToBeDeleted.forEach((val) => {
        const index = todosArray.indexOf(val);
        todosArray.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todosArray));
      });
    }
  }
};