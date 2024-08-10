// Faça um programa que leia 4 notas em um array, mostre as notas e a media na tela.

let ArrayNotas = []

while (ArrayNotas.length < 4) {
    let numero = Number (prompt ("Digite aqui a sua nota: "))
    ArrayNotas.push (numero)
}

console.log (ArrayNotas)

let numeroSoma = ArrayNotas [0] + ArrayNotas [1] + ArrayNotas [2] + ArrayNotas [3] 

let numeroMedia = numeroSoma / 4
console.log (numeroMedia)