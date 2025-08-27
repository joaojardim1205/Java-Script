//Crie uma funcao que receba um array de numeros e retorne um novo array com dois elementos. O primeiro e segundo numero do array recebidos divididos por 2

function trocaValores (Array) {
    const novaLista = []

    novaLista.push (Array[0] / 2)
    novaLista.push (Array[1] / 2)

    return novaLista

}

const lista = [6, 19, 16, 10, 17]
console.log (trocaValores(lista))