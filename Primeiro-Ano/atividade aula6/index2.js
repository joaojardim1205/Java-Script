/*
Exercício 2: Entrada de Dados
Modifique o programa para perguntar ao usuário qual é o nome do time, a cor, a turma e o mascote. Armazene todas essas informações nas variáveis correspondentes.
Desafio: Depois que o usuário fornecer os dados, mostre uma mensagem personalizada incluindo todas as informações do time.
Dica: Pense em como perguntar esses dados e usá-los no programa.
*/

let nomeDoTime = prompt("Qual é o nome do time?");
let corDoTime = prompt("Qual é a cor do time?");
let turma = prompt("Qual é a turma?");
let mascote = prompt("Qual é o mascote?");

console.log(`Bem-vindo, ${nomeDoTime} da ${turma}!`);
console.log(`Nome do time: ${nomeDoTime}`);
console.log(`Cor do time: ${corDoTime}`);
console.log(`Turma: ${turma}`);
console.log(`Mascote: ${mascote}`);