/*
1. Cadastro de Aluno**
   Descrição: Crie um objeto `aluno` com as propriedades `nome`, `idade`, e `notas` (um array de números). Em seguida, crie uma função `calcularMedia` que recebe o objeto `aluno` e retorna a média das notas.
*/

const aluno = {
    nome: 'jeremias',
    idade:  20,
    notas: [10, 8, 9]
}

function  calcularMedia(aluno) {
    const soma = aluno[0] + aluno[1] + aluno[2]
    const media =  soma / aluno.length
    return media
}

console.log(calcularMedia(aluno.notas))