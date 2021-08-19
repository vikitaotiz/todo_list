export default () => {
  const todosArray = JSON.parse(localStorage.getItem('todos'));
  const itemsToBeDeleted = todosArray.filter((val) => val.completed);
  itemsToBeDeleted.forEach((val) => {
    const index = todosArray.indexOf(val);
    todosArray.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todosArray));
  });
};