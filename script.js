/* eslint-disable no-param-reassign */
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const inputTexto = document.querySelector('#texto-tarefa');
botaoCriarTarefa.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = inputTexto.value;
  document.querySelector('#lista-tarefas').appendChild(li);
  inputTexto.value = '';
});

document.querySelector('#lista-tarefas').addEventListener('click', (event) => {
  const verificador = document.querySelector('.itemSelecionado');
  if (verificador === null) {
    event.target.className = 'itemSelecionado';
  } else {
    verificador.classList.remove('itemSelecionado');
    event.target.className = 'itemSelecionado';
  }
});
