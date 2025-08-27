/*
2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

// a)
function soma (num1, num2){
    return num1 + num2
}

console.log (soma(10,20))

// b)
function MaiorOuMenor (num1, num2){
    return num1 >= num2
}

console.log(MaiorOuMenor(9,15))
console.log(MaiorOuMenor(23,20))

// c)
function ParOuImpar (num){
    return (num % 2 == 0)
}
let A

console.log(ParOuImpar(10))
console.log(ParOuImpar(7))

// d)
function processaMensagem(mensagem) {
    const tamanho = mensagem.length
    const mensagemMaiuscula = mensagem.toUpperCase()
    
    console.log(`Tamanho da mensagem: ${tamanho}`)
    console.log(`Mensagem em maiúsculas: ${mensagemMaiuscula}`)
}

console.log(processaMensagem("Olá, como você está?"))