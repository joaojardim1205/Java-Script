let nome = prompt('Qual o seu primeiro nome?');
let nome2 = prompt('Qual o seu segundo nome?');
let idade = prompt('Qual a sua idade?');
let boolEstudadente = confirm('Você ainda é um estudante?');

console.log(`Seu nome é ${nome} ${nome2}, tem ${idade} e é estudante: ${boolEstudadente}`);

let soma = 3 + 4;
console.log(soma);

let multi = (3 + 5) / 2;
console.log(multi);

let sub = (4 - 5) * (-1);
console.log(sub);

let resto = 234 % 5;
console.log(resto);

let num = [10, 20, 30];

let maior = Math.max(num[0], num[1], num[2]);
let menor = Math.min(num[0], num[1], num[2]);

console.log(`Maior número: ${maior}\nMenor número: ${menor}`);

num.sort((a, b) => b - a);

console.log(`Números em ordem decrescente: ${num.join(", ")}`);

let turno = prompt("Digite o turno que você estuda (M - Matutino, V - Vespertino, N - Noturno):");

if (turno == "M" && turno == "m") {
  console.log("Bom Dia!");
} else if (turno === "V" || turno === "v") {
  console.log("Boa Tarde!");
} else if (turno === "N" || turno === "n") {
  console.log("Boa Noite!");
} else {
  console.log("Valor Inválido!");
};