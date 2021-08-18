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
      // li.setAttribute('draggable', true);

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