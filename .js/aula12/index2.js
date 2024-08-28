/*
2. Gestão de Compras
- Descrição: Crie um objeto `carrinho` com as propriedades `itens` (um array de objetos, cada um representando um produto com `nome` e `preco`), e `total`.
- Crie uma função `addItens`, que pergunta ao usuario nome e preço do objeto e inclui no array. Se ja tiver algum com o mesmo nome, atualize o preço.
- Depois, crie uma função `calcularTotal` que recebe o objeto `carrinho` e calcula o valor total dos itens.
*/

const carrinho = {
    itens: [], 
    total: 0
}

function addItens() {
    let nomeProduto = prompt('Digite o nome do produto: ');
    let precoProduto = Number(prompt('Digite o preço do produto: '));

    let produtoExistente = carrinho.itens.find(item => item.nome === nomeProduto);
    if (produtoExistente) {
        produtoExistente.preco = precoProduto;
    } else {
        carrinho.itens.push({ nome: nomeProduto, preco: precoProduto });
    }
}

function calcularTotal() {
    let total = 0;
    carrinho.itens.forEach(item => {
        total += item.preco;
    });
    carrinho.total = total;
    alert(`O valor total dos itens do carrinho é R$${carrinho.total}`);
}

addItens();
calcularTotal();