export default (node) => {
  const todosArray = JSON.parse(localStorage.getItem('todos'));
  const todoObject = todosArray.find((todo) => todo.index === Number(node.id));
  const index = todosArray.indexOf(todoObject);

  if (!todosArray[index].completed) {
    todosArray[index].completed = true;
    node.children[1].classList.add('completeTask');
    localStorage.setItem('todos', JSON.stringify(todosArray));
  } else {
    todosArray[index].completed = false;
    node.children[1].classList.remove('completeTask');
    localStorage.setItem('todos', JSON.stringify(todosArray));
  }
};