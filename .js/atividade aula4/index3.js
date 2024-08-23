/*
2. Considere o código abaixo:
    
    const listaDeTarefas = {
      nome: "João",
      tarefas: [
        { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
        { descricao: "Limpar o quarto", concluida: false, prioridade: "média" }
      ]
    };
    
    Copie e cole, escreva seu código a partir dai.
    
    a) Adicione uma nova tarefa à lista
    b) Altere o status de uma tarefa existente para `concluida`.
*/

const listaDeTarefas = {
    nome: "João",
    tarefas: [
      { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
      { descricao: "Limpar o quarto", concluida: false, prioridade: "média" }
    ]
  };

listaDeTarefas.tarefas.push( { descricao: "Levar o lixo", concluida: false, prioridade: "baixa" },);
listaDeTarefas.tarefas[1].concluida = true;