const ul = document.querySelector('ul');
const form = document.querySelector('form');

const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement('li');
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  const newBtn = document.createElement('button');
  newBtn.innerText = 'X';
  newTodo.appendChild(newBtn);
  ul.appendChild(newTodo);
}

ul.addEventListener('click', function (event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = 'line-through';
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = 'none';
    clickedListItem.isCompleted = false;
  }

  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem('todos', JSON.stringify(savedTodos));
    }
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newLi = document.createElement('li');
  const newSpan = document.createElement('span');
  const newBtn = document.createElement('button');
  newBtn.innerText = 'X';
  newSpan.innerText = document.querySelector('input').value + ' ';
  newLi.append(newSpan, newBtn);
  ul.append(newLi);
  form.reset();

  savedTodos.push({ task: newSpan.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedTodos));
});
