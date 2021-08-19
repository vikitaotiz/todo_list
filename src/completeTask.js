export default (e) => {
  const todosArray = JSON.parse(localStorage.getItem('todos'));
  const todoObject = todosArray.find((todo) => todo.index === Number(e.target.parentNode.id));
  const index = todosArray.indexOf(todoObject);

  if (!todosArray[index].completed) {
    todosArray[index].completed = true;
    e.target.parentNode.children[1].classList.add('completeTask');
    localStorage.setItem('todos', JSON.stringify(todosArray));
  } else {
    todosArray[index].completed = false;
    e.target.parentNode.children[1].classList.remove('completeTask');
    localStorage.setItem('todos', JSON.stringify(todosArray));
  }
};