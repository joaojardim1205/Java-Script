/*
Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
*/

function soma (num1, num2){
    const soma = num1 + num2
    console.log (`Soma: ${soma}`)
}

function subtração (num1, num2){
    const subtração = num1 - num2
    console.log (`Diferença: ${subtração}`)
}

function multiplicação (num1, num2){
    const Multiplicação = num1 * num2
    console.log(`Multiplicação: ${Multiplicação}`)
}

function divisão (num1, num2){
    const divisao = num1 / num2
    console.log (`Divisão: ${divisao}`)
}

soma(30,3)
subtração(30,3)
multiplicação(30,3)
divisão(30,3)
