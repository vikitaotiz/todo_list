import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addNewItem from './addTodo.js';
import clearCompletedTodos from './clearCompletedTodos.js';
import removeTodo from './removeTodo.js';
import editTodo from './editTodo.js';
import completeTask from './completeTask.js';

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
      completeTask(e);
    });
  });

  const editBtns = document.querySelectorAll('#editDescription');
  editBtns.forEach((btn) => {
    btn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.textContent) {
        editTodo(e);
        todoList.innerHTML = '';
        diplayTodoList();
      }
    });
  });

  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      removeTodo(e);
      todoList.innerHTML = '';
      diplayTodoList();
    });
  });
}

diplayTodoList();

addNewTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewItem(todos, addNewTodo.value);
    todoList.innerHTML = '';
    diplayTodoList();
    addNewTodo.value = '';
  }
});

clearCompleted.addEventListener('click', () => {
  clearCompletedTodos();
  todoList.innerHTML = '';
  diplayTodoList();
});