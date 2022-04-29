const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const inputTexto = document.querySelector('#texto-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');

botaoCriarTarefa.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = inputTexto.value;
  listaTarefa.appendChild(li);
  inputTexto.value = '';
});

listaTarefa.addEventListener('click', (event) => {
  const verificador = document.querySelector('.itemSelecionado');
  if (verificador === null) {
    event.target.classList.add('itemSelecionado');
  } else {
    verificador.classList.remove('itemSelecionado'); // https://www.w3schools.com/howto/howto_js_remove_class.asp <-- me ajudou nessa parte
    event.target.classList.add('itemSelecionado');
  }
});

listaTarefa.addEventListener('dblclick', (event) => {
  if (event.target.classList[0] === 'completed' || event.target.classList[1] === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed'); // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add <-- me ajudou nessa parte
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  for (let index = listaTarefa.childElementCount; index > 0; index -= 1) {
    listaTarefa.removeChild(listaTarefa.firstElementChild);
  }
});
