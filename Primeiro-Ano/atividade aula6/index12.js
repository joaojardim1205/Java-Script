/*
Exercício 12: Pontuação do Time
Adicione uma propriedade ao objeto time chamada pontuacao e defina o valor inicial como 0. Crie uma função que permita ao usuário adicionar pontos ao time conforme eles participam das atividades.
Desafio: Exiba a pontuação total do time toda vez que ela for atualizada.
Dica: Use uma função para atualizar a pontuação e mostrar o resultado final.
*/

time.pontuacao = 0;

function adicionarPontos(time) {
  let pontos = parseInt(prompt("Quantos pontos o time deseja adicionar?"));
  time.pontuacao += pontos;
  console.log(`Pontuação atual: ${time.pontuacao}`);
}

adicionarPontos(time);