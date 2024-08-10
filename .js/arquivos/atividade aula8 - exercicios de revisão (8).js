// Faça um programa que leia um vetor numerico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.

let ArrayNumeros = []
while (ArrayNumeros.length < 4) {
    let numero = Number (prompt ("Digite aqui numeros aleatorios: "))
    ArrayNumeros.push (numero)
}

console.log ("O vetor ordenado: " + ArrayNumeros.sort((a, b) => a - b))