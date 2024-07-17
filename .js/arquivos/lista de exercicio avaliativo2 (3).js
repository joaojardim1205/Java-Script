/*
2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie um código para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/

let ArrayOriginal = [1,5,7,9,10,12,14,20,18,23,13,17,27]

console.log("a) Todos os valores do Array Original:")
ArrayOriginal.forEach (valor => {
    console.log (valor)
})

console.log("b) Todos os valores do Array Original dividido por 10:")
ArrayOriginal.forEach (valor => {
    console.log (valor / 10)
})

console.log ("c) O array com todos os numeros pares:")
let ArrayPar = ArrayOriginal.filter(valor => valor % 2 == 0);
console.log(ArrayPar)

console.log ("d) O array com todos os strings:")
let ArrayString = ArrayOriginal.map((valor, index) => "O elemento do índex " + index +  " é: " + valor)
console.log(ArrayString)

console.log ("e) Maior e menor numero do Array Original:")
let NumeroMax = Math.max(...ArrayOriginal)
let NumeroMin = Math.min(...ArrayOriginal)

console.log("Maior número: " + NumeroMax)
console.log("Menor número: " + NumeroMin)