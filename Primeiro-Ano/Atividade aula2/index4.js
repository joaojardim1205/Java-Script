/*
a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

- O número chutado, com a mensagem: `O número chutado foi: <número>`
- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
*/

const NumeroEscolhido = Number (prompt ("Jogador 1°, escolha um numero aleatorio"))
console.log ("Vamos jogar!!")

let tentativas = 0
let acerto = false

while (!acerto) {
    let chute = Number (prompt ("Jogador 2°, chute um numero aleatorio"))
    tentativas ++
    console.log ("O número chutado foi: " + chute)

    if (chute === NumeroEscolhido) {
        acerto = true
        console.log ("Acertouuu!")
        console.log ("O numero de tentativas totais foi: " + tentativas)   
    } else if (chute > NumeroEscolhido){
        console.log ("Errou! O numero escolhido pelo jogador 1° é menor")
    } else {
        console.log ("Errou! O numero escolhido pelo jogador 1° é maior")
    }
}