// Faça um programa que leia 20 numeros inteiros e armazene-os num vetor. Armazene os numeros pares no vetor PAR e os numeros IMPARES no vetor impar. imprima os tres vetores   

let ArrayVetor = []
let ArrayVetorPAR = []
let ArrayVetorIMPAR = []

for (let i = 0; i < 20; i++) {
    let numero = parseInt (prompt (`Digite o  ${i + 1}° numero inteiro`))

    ArrayVetor.push(numero)
    
    if (numero % 2 === 0){
        ArrayVetorPAR.push(numero)
    } else {
        ArrayVetorIMPAR.push(numero)
    }
}

console.log ("Todos os numeros: ",ArrayVetor)
console.log ("Todos os numeros pares: ",ArrayVetorPAR)
console.log ("Todos os numeros impares: ",ArrayVetorIMPAR)