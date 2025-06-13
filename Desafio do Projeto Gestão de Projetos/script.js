const projetos = [];
let editando = null;

const formProjeto = document.getElementById('formularioProjeto');
const formTarefa = document.getElementById('formularioTarefa');
const projetoStatus = document.getElementById('projetoStatus');
const listaProjetos = document.getElementById('lista-Projetos');

formProjeto.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = document.getElementById('nomeProjeto').value;
  if(nome.trim()){
    const novoProjeto = { nome, tarefas: [] };
    projetos.push(novoProjeto);
    atualizarInterface();
    document.getElementById('nomeProjeto').value = '';
  };
});

formTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const projetoIndex = projetoStatus.value;
  if(projetoIndex === '') return;

  const tarefa = {
    descricao: document.getElementById('descricao').value,
    responsavel: document.getElementById('responsavel').value,
    recurso: document.getElementById('recurso').value,
    status: document.getElementById('status').value,
    cor: document.getElementById('cor').value
  };

  if(editando){
    projetos[editando.projetoIndex].tarefas[editando.tarefaIndex] = tarefa;
    editando = null;
  } else {
    projetos[projetoIndex].tarefas.push(tarefa);
  };

  formTarefa.reset();
  atualizarInterface();
});

function atualizarInterface() {
  projetoStatus.innerHTML = '<option value="">Selecione um projeto</option>';
  projetos.forEach((projeto, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = projeto.nome;
    projetoStatus.appendChild(option);
  });

listaProjetos.innerHTML = '';
projetos.forEach((projeto, projetoIndex) => {
const divProjeto = document.createElement('div');
divProjeto.classList.add('projeto');
const titulo = document.createElement('h3');
titulo.textContent = projeto.nome;
divProjeto.appendChild(titulo);

const botaoRemoverProjeto = document.createElement('button');
botaoRemoverProjeto.textContent = 'Remover Projeto';
botaoRemoverProjeto.onclick = () => {
  if(confirm(`Deseja remover o projeto ${projeto.nome}?`)){
    projetos.splice(projetoIndex, 1);
    atualizarInterface();
  };
};

divProjeto.appendChild(botaoRemoverProjeto);

projeto.tarefas.forEach((tarefa, tarefaIndex) => {
  const divTarefa = document.createElement('div');
  divTarefa.classList.add('tarefa');
  divTarefa.style.borderLeft = `6px solid ${tarefa.cor}`;
  divTarefa.style.backgroundColor = `${tarefa.cor}20`;

  divTarefa.innerHTML = `
    <p>${tarefa.descricao}</p>
    <p>Responsável: ${tarefa.responsavel}</p>
    <p>Recurso: ${tarefa.recurso}</p>
    <p>Status: ${tarefa.status}</p>
  `;

const botaoEditar = document.createElement('button');
botaoEditar.textContent = 'Editar';
botaoEditar.onclick = () => {
  editando = {projetoIndex, tarefaIndex};
  projetoStatus.value = projetoIndex;
  document.getElementById('descricao').value = tarefa.descricao;
  document.getElementById('responsavel').value = tarefa.responsavel;
  document.getElementById('recurso').value = tarefa.recurso;
  document.getElementById('status').value = tarefa.status;
  document.getElementById('cor').value = tarefa.cor;
};

const botaoRemover = document.createElement('button');
botaoRemover.textContent = 'Remover';
botaoRemover.onclick = () => {
  if(confirm("Tem certeza que deseja remover esta tarefa?")){
    projetos[projetoIndex].tarefas.splice(tarefaIndex, 1);
    atualizarInterface();
  };
};

  divTarefa.appendChild(botaoEditar);
  divTarefa.appendChild(botaoRemover);
  divProjeto.appendChild(divTarefa);
  });

  listaProjetos.appendChild(divProjeto);
  });
};