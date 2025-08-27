/*
Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
*/

function perguntarInformacoes() {
    const Informacoes = {
        nome: prompt("Qual é o seu nome?"),
        idade: prompt("Qual é a sua idade?"),
        profissao: prompt("Qual é a sua profissão?")

    }

    console.log(`Nome: ${Informacoes.nome}, profissao: ${Informacoes.profissao}, idade: ${Informacoes.idade}`);
}

perguntarInformacoes();