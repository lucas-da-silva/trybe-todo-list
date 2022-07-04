const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const buttonCreate = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonFinalized = document.querySelector('#remover-finalizados');
const buttonSave = document.querySelector('#salvar-tarefas');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const buttonSelected = document.querySelector('#remover-selecionado');

// Create li and reset input
buttonCreate.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;

  list.appendChild(li);

  input.value = '';
});

// Change color when selected li
list.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }

  event.target.style.backgroundColor = 'gray';
  event.target.classList.add('selected');
});

// Create function double click to line-through
list.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Create function clear allLi to buttonClear
buttonClear.addEventListener('click', () => {
  const allLi = document.querySelectorAll('li');
  for (let i = 0; i < allLi.length; i += 1) {
    list.removeChild(allLi[i]);
  }
});

// Create function clear allCompleted to buttonFinalized
buttonFinalized.addEventListener('click', () => {
  const allCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < allCompleted.length; i += 1) {
    list.removeChild(allCompleted[i]);
  }
});

// Create button to save data in Local Storage
buttonSave.addEventListener('click', () => {
  localStorage.clear();
  const allLi = document.querySelectorAll('li');
  for (let i = 0; i < allLi.length; i += 1) {
    const { className } = allLi[i];
    const li = allLi[i].innerHTML;
    const liIndex = `li ${i}`;
    const classIndex = `Class ${i}`;
    localStorage.setItem(liIndex, li);
    localStorage.setItem(classIndex, className);
  }
  localStorage.setItem('numberOfItems', allLi.length);
});

// Load data save in Local Storage
window.onload = () => {
  const index = localStorage.getItem('numberOfItems');
  for (let i = 0; i < index; i += 1) {
    const item = document.createElement('li');
    item.className = localStorage.getItem(`Class ${i}`);
    list.appendChild(item).innerHTML = localStorage.getItem(`li ${i}`);
  }
};

// Create button to up selected task
buttonUp.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    if (selected.previousElementSibling) {
      selected.parentNode.insertBefore(selected, selected.previousElementSibling);
    } else {
      alert('Não é possível mover esta tarefa para cima');
    }
  }
});

// Create button to up selected task
buttonDown.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    if (selected.nextElementSibling) {
      selected.parentNode.insertBefore(selected.nextElementSibling, selected);
    } else {
      alert('Não é possível mover esta tarefa para baixo');
    }
  }
});

// Create button that removes the selected element
buttonSelected.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  list.removeChild(selected);
});
