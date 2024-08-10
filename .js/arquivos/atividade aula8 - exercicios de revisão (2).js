// Faça um programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let ganhoHora = Number (prompt ("insira aqui quanto você ganha por hora no mês"))
let numHora = Number (prompt ("insira aqui quantas horas você trabalha no mês"))

let salarioFInal = ganhoHora * numHora

console.log ("no final do mês você vai ganhar R$" + salarioFInal)