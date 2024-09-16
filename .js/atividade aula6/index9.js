/*
Exercício 9: Gerenciando a Lista de Esportes
Adicione uma propriedade ao objeto time chamada esportes que é um array vazio. Peça ao usuário para selecionar 2 esportes da lista disponível e armazene-os nesse novo array.
Desafio: Crie uma função que permite ao usuário adicionar ou remover esportes do array.
Dica: Manipule o array dentro do objeto para refletir as preferências do time.
*/

let time = {
    esportes: []
  };
  
let esportesDisponiveis = ["futebol", "vôlei", "basquete", "xadrez", "FIFA"];

for (let i = 0; i < 2; i++) {
    let esporteEscolhido = prompt(`Qual é o esporte ${i + 1} que o time escolhe participar?`);
    if (esportesDisponiveis.includes(esporteEscolhido)) {
    time.esportes.push(esporteEscolhido);
    } else {
    console.log("Esporte não disponível.");
    }
}

console.log("Esportes escolhidos:");
for (let i = 0; i < time.esportes.length; i++) {
    console.log(`${i + 1}. ${time.esportes[i]}`);
}

function adicionarEsporte(time) {
    let novoEsporte = prompt("Qual é o novo esporte que o time deseja adicionar?");
    if (esportesDisponiveis.includes(novoEsporte)) {
    time.esportes.push(novoEsporte);
    console.log("Esporte adicionado com sucesso!");
    } else {
    console.log("Esporte não disponível.");
    }
}

function removerEsporte(time) {
    let esporteRemover = prompt("Qual é o esporte que o time deseja remover?");
    if (time.esportes.includes(esporteRemover)) {
    let index = time.esportes.indexOf(esporteRemover);
    time.esportes.splice(index, 1);
    console.log("Esporte removido com sucesso!");
    } else {
    console.log("Esporte não encontrado.");
    }
}