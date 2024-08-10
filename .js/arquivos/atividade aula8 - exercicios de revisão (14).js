// Faça um programa que leia tres numeros e mostre o maior e o menor deles

let num1 = Number (prompt ("insira um numero para se fazer uma comparação"))
let num2 = Number (prompt ("insira um outro numero para se fazer uma comparação"))
let num3 = Number (prompt ("insira mais um numero para se fazer uma comparação"))

let ArrayNumero = [num1, num2, num3]

let NumeroMax = Math.max(...ArrayNumero)
let NumeroMin = Math.min(...ArrayNumero)

console.log("O maior número entre eles é o " + NumeroMax)
console.log("O menor número entre eles é  o " + NumeroMin)
