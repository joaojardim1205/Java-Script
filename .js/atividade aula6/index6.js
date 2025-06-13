/*
Exercício 6: Listando Atletas com Laços
Liste todos os atletas do time um por um no console. Numere cada atleta (por exemplo: "1. Ana").
Desafio: Crie uma mensagem que diz "Os atletas do time são:" antes de listar.
Dica: Utilize um laço para percorrer o array e exibir os itens.
*/

let atletas = [];

for (let i = 0; i < 5; i++) {
  atletas.push(prompt(`Qual é o nome do atleta ${i + 1}?`));
}

console.log("Os atletas do time são:");
for (let i = 0; i < atletas.length; i++) {
  console.log(`${i + 1}. ${atletas[i]}`);
}