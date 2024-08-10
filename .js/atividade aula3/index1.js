/*
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

1. Leia o código abaixo

a) O que vai ser impresso no console?

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
*/

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) Sera impresso no console a multiplicacao da 'variavel'. No caso 2 ira virar 10 e 10 ira virar 50
//b) Nao ira aparecer nada, pois a funcao apenas multiplica a variavel, e para exibir é necessario o console.log

/*
2. Leia o código abaixo

a) Explique o que essa função faz e qual é sua utilidade

b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
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

//a) Primeiro, o codigo pede para o usuario inserir um texto, depois a funcao ira transformar qualquer texto maisculo em minusculo e analisar se o texto possui a string "cenoura", retornando true ou false
//b) i. true  ii. true  iii. true
     