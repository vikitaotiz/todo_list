import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addNewItem from './addTodo.js';
import clearCompletedTodos from './clearCompletedTodos.js';
import removeTodo from './removeTodo.js';
import editTodo from './editTodo.js';
import completeTask from './completeTask.js';
import displayTodos from './displayTodos.js';

const addNewTodo = document.querySelector('.addNewTodo');
const todoList = document.querySelector('#todoList');
const clearCompleted = document.querySelector('#clearCompleted');
const todos = JSON.parse(localStorage.getItem('todos'));

function updateUi() {
  todoList.innerHTML = '';
  /* eslint-disable */
  diplayTodoList();
  /* eslint-enable */
}

function diplayTodoList() {
  displayTodos(todoList);

  const checkBoxes = document.querySelectorAll('.checkTodo');
  checkBoxes.forEach((check) => {
    check.addEventListener('change', (e) => {
      completeTask(e.target.parentNode);
    });
  });

  const contentEditables = document.querySelectorAll('#editDescription');
  contentEditables.forEach((btn) => {
    btn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.textContent) {
        editTodo(e);
        updateUi();
      }
    });
  });

  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      removeTodo(e);
      updateUi();
    });
  });
}

addNewTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewItem(todos, addNewTodo.value);
    updateUi();
    addNewTodo.value = '';
  }
});

clearCompleted.addEventListener('click', () => {
  clearCompletedTodos();
  updateUi();
});

window.onload = () => { diplayTodoList(); };