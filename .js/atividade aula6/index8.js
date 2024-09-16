/*
Exercício 8: Criando um Objeto para o Time
Crie um objeto chamado time que armazene o nome do time, a cor, a turma, o mascote, os atletas (array) e o esporte escolhido.
Desafio: Adapte as funções anteriores para usar as informações armazenadas no objeto time.
Dica: Organize todas as informações relacionadas ao time em uma única estrutura.
*/

let time = {
    nome: prompt("Qual é o nome do time?"),
    cor: prompt("Qual é a cor do time?"),
    turma: prompt("Qual é a turma?"),
    mascote: prompt("Qual é o mascote?"),
    atletas: [],
    esporte: ""
  };
  
  for (let i = 0; i < 5; i++) {
    time.atletas.push(prompt(`Qual é o nome do atleta ${i + 1}?`));
  }
  
  console.log(`Bem-vindo, ${time.nome} da ${time.turma}!`);
  console.log(`Nome do time: ${time.nome}`);
  console.log(`Cor do time: ${time.cor}`);
  console.log(`Turma: ${time.turma}`);
  console.log(`Mascote: ${time.mascote}`);
  console.log("Os atletas do time são:");
  for (let i = 0; i < time.atletas.length; i++) {
    console.log(`${i + 1}. ${time.atletas[i]}`);
  }