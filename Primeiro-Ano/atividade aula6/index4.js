/*
Exercício 4: Lista de Atletas
Crie um array para armazenar os nomes de 5 atletas do time. Mostre os nomes dos atletas no console em uma única linha, separados por vírgulas.
Desafio: Peça ao usuário para adicionar mais um atleta à lista.
Dica: Use métodos de array para adicionar elementos.
*/

let atletas = [];

for (let i = 0; i < 5; i++) {
  atletas.push(prompt(`Qual é o nome do atleta ${i + 1}?`));
}

console.log(atletas.join(", "));

let novoAtleta = prompt("Qual é o nome do novo atleta?");
atletas.push(novoAtleta);

console.log(atletas.join(", "));