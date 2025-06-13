/*
Exercício 11: Escolhendo um Mascote
Permita ao usuário alterar o mascote do time. Solicite um novo nome de mascote e atualize a propriedade mascote do objeto time.
Desafio: Exiba uma mensagem dizendo "O novo mascote do time é [novo mascote]!".
Dica: Certifique-se de atualizar a propriedade correta no objeto.
*/

let novoMascote = prompt("Qual é o novo mascote do time?");
time.mascote = novoMascote;
console.log(`O novo mascote do time é ${time.mascote}!`);
