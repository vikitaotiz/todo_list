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

const todos = [];

function diplayTodoList() {
  displayTodos();

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