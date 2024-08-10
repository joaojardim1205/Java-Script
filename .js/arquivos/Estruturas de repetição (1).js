// Faça um programa que leia 5 números e informe a soma e a media dos números

let ArrayNumeros = []

while (ArrayNumeros.length < 5) {
    let numero = Number (prompt ("Digite um número: "))
    ArrayNumeros.push (numero)
}

let numeroSoma = ArrayNumeros [0] + ArrayNumeros [1] + ArrayNumeros [2] + ArrayNumeros [3] + ArrayNumeros [4]
console.log (numeroSoma)

let numeroMedia = numeroSoma / 5
console.log (numeroMedia)