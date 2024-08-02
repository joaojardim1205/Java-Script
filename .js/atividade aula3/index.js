/*
a) O que vai ser impresso no console?

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
O que apareceria no console?
*/

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) sera impresso os numeros colocados na funcao multiplicado por 5, no caso ficaria 10 e 50
// b) se fosse retirado o console.log, nao seria impresso nada no console


/*
a. Explique o que essa função faz e qual é sua utilidade

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`
*/

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a) essa funcao ira trasformar o texto do usuario todo em minusculo e vai verificar se o texto possui a palavra "cenoura"
// b) i. "eu gosto de cenoura" ii. "cenoura é bom pra vista" iii. "cenouras crescem na terra"

