const inputText = document.querySelector('.container__write');
const btnCreate = document.querySelector('button');
const taskList = document.querySelector('.container__tasks');

function addTask () {
  if (inputText.value) {
    let newTask = document.createElement('article');
    newTask.classList.add('tasks');

    let text = document.createElement('p');
    text.innerText = inputText.value;
    newTask.appendChild(text);

    let icons = document.createElement('div');
    icons.classList.add('icons');
    newTask.appendChild(icons);

    let completed = document.createElement('i');
    completed.classList.add('iconoir-check-circle-solid', 'icon__completed');
    completed.addEventListener('click', completeTask);

    let deleted = document.createElement('i');
    deleted.classList.add('iconoir-trash-solid', 'icon__deleted');
    deleted.addEventListener('click', deleteTask);

    icons.append(completed, deleted);

    taskList.appendChild(newTask);
  } else {
    alert ('Por favor, ingresa una tárea.');
  }
}

function completeTask (e) {
  let task = e.target.parentNode.parentNode;
  task.classList.toggle('completed');
};

function deleteTask (e) {
  let task = e.target.parentNode.parentNode;
  task.remove();
}

btnCreate.addEventListener('click', addTask)

inputText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});