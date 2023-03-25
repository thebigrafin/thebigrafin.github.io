const form = document.querySelector('#todoForm');
const list = document.querySelector('#todoList');

form.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();
  const input = document.querySelector('#todoInput');
  const date = document.querySelector('#todoDate');
  const time = document.querySelector('#todoTime');
  const task = input.value;
  const taskDate = date.value;
  const taskTime = time.value;
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const deleteButton = document.createElement('button');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', completeTask);
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', deleteTask);
  listItem.innerText = task + ' ' + taskDate + ' ' + taskTime;
  listItem.appendChild(checkbox);
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
  input.value = '';
  date.value = '';
  time.value = '';
}

function completeTask(event) {
  const checkbox = event.target;
  const listItem = checkbox.parentNode;
  if (checkbox.checked) {
    listItem.style.textDecoration = 'line-through';
  } else {
    listItem.style.textDecoration = 'none';
  }
}

function deleteTask(event) {
  const button = event.target;
  const listItem = button.parentNode;
  list.removeChild(listItem);
}
