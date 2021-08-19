export default (e) => {
  const todosArray = JSON.parse(localStorage.getItem('todos'));
  const todoObject = todosArray.find((todo) => todo.index === Number(e.target.parentNode.id));
  const index = todosArray.indexOf(todoObject);
  todosArray[index].description = e.target.textContent;
  localStorage.setItem('todos', JSON.stringify(todosArray));
};