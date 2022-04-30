const listaToda = JSON.parse(localStorage.getItem('listaSalva'));
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const inputTexto = document.querySelector('#texto-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');

function carregarListaSalva() {
  for (let index = 0; index < Object.keys(listaToda).length; index += 1) {
    const lis = document.createElement('li');
    lis.innerText = listaToda[index]['0'];
    lis.className = listaToda[index]['1'];
    listaTarefa.appendChild(lis);
  }
}

window.onload = function verificadorListaSalva() {
  if (listaToda !== null) {
    carregarListaSalva();
  }
};

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

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const finalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    finalizados[index].remove();
  }
});

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  document.querySelector('.itemSelecionado').remove();
});

// eslint-disable-next-line complexity
document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  const tarefas = {};
  const itensLista = document.querySelectorAll('li');
  for (let index = 0; index < itensLista.length; index += 1) {
    if (itensLista[index].innerText !== '') { // vai impedir de salvar itens vazios
      tarefas[index] = [itensLista[index].innerText, itensLista[index].className];
    }
  }
  localStorage.setItem('listaSalva', JSON.stringify(tarefas)); // https://blog.logrocket.com/localstorage-javascript-complete-guide/ <-- me ajudou muito nessa parte :)
});
