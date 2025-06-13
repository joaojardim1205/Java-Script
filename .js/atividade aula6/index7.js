/*
Exercício 7: Função para Listar Atletas
Crie uma função chamada listarAtletas que recebe o array de atletas como argumento e exibe os nomes no console. Use essa função no programa para listar os atletas.
Desafio: Adicione uma nova função chamada adicionarAtleta que permite ao usuário adicionar um novo atleta à lista.
Dica: Modularize o código criando funções para organizar as ações.
*/

let atletas = [];

for (let i = 0; i < 5; i++) {
  atletas.push(prompt(`Qual é o nome do atleta ${i + 1}?`));
}

function listarAtletas(atletas) {
  console.log("Os atletas do time são:");
  for (let i = 0; i < atletas.length; i++) {
    console.log(`${i + 1}. ${atletas[i]}`);
  }
}

listarAtletas(atletas);

function adicionarAtleta(atletas) {
  let novoAtleta = prompt("Qual é o nome do novo atleta?");
  atletas.push(novoAtleta);
  listarAtletas(atletas);
}

adicionarAtleta(atletas);