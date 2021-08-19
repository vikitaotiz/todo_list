export default (todoList) => {
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
};