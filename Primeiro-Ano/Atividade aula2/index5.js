/*
2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. 
   Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
    
    Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**
*/

let NumeroEscolhido = Math.floor((Math.random() * 100) + 1)
console.log ("Vamos jogar!!")
console.log ("O computador escolheu aleatoriamente um numero de 1 a 100, tente adivinhar!!")

let tentativas = 0
let acerto = false

while (!acerto) {
    let chute = Number (prompt ("Jogador, chute um numero aleatorio"))
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

// após realizar o exercicio, posso dizer que foi facil fazer a alteração, foi apenas necessario ler como funciona o sintaxe e fazer a alteração, o codigo é praticamente o mesmo. 
// acredito que nao possui nada para simplificar a alteração