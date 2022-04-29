const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const inputTexto = document.querySelector('#texto-tarefa');
botaoCriarTarefa.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = inputTexto.value;
  document.querySelector('#lista-tarefas').appendChild(li);
  inputTexto.value = '';
});
