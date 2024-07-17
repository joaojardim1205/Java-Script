// Faça um programa que leia 3 números, some-os e exiba a média entre eles.

let num1 = Number (prompt ("insira um numero para se fazer uma media"))
let num2 = Number (prompt ("insira um outro numero para se fazer uma media"))
let num3 = Number (prompt ("insira mais um numero para se fazer uma media"))

let numSoma = num1 + num2 + num3

console.log ("a soma de todos os 3 numeros é " + numSoma)

let numMedia = numSoma / 3

console.log ("a media de todos os 3 numeros é " + numMedia)