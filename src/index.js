import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const addNewTodo = document.querySelector('.addNewTodo');
const todoList = document.querySelector('#todoList');
const clearCompleted = document.querySelector('#clearCompleted');

const todos = [];

function diplayTodoList() {
  const data = localStorage.getItem('todos');

  if (data) {
    JSON.parse(data).forEach((val) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');

      const text = `
      <div class="d-flex dragTodo" id="${val.index}" draggable="true">
        <input class="form-check-input checkTodo" type="checkbox" value=""
        ${val.completed ? 'checked' : ''}>
        <div class="fw-bold flex-grow-1 ${val.completed ? 'completeTask' : ''}"
        id="editDescription"
        contenteditable="${!val.completed}">
          ${val.description}
        <span class="drag"></span>
        </div>
         <i class="fas fa-trash deleteBtn m-2"></i>
         <i class="fas fa-grip-vertical m-2 drag"></i>
      </div>`;

      li.innerHTML = text;
      todoList.appendChild(li);
    });
  }

  const checkTodos = document.querySelectorAll('.checkTodo');
  checkTodos.forEach((check) => {
    check.addEventListener('change', (e) => {
      const todosArray = JSON.parse(localStorage.getItem('todos'));
      const todoObject = todosArray.find((todo) => todo.index === Number(e.target.parentNode.id));
      const index = todosArray.indexOf(todoObject);

      if (!todosArray[index].completed) {
        todosArray[index].completed = 1;
        e.target.parentNode.children[1].classList.add('completeTask');
        localStorage.setItem('todos', JSON.stringify(todosArray));
      } else {
        todosArray[index].completed = 0;
        e.target.parentNode.children[1].classList.remove('completeTask');
        localStorage.setItem('todos', JSON.stringify(todosArray));
      }
    });
  });
}

diplayTodoList();

function addNewItem() {
  if (addNewTodo.value !== '') {
    const index = todos.length + 1;
    todos.push({ description: addNewTodo.value, completed: 0, index });
    localStorage.setItem('todos', JSON.stringify(todos));
    addNewTodo.value = '';
    todoList.innerHTML = '';
    diplayTodoList();
  }
}

addNewTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewItem();
  }
});