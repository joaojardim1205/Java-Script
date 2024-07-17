const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
1)
a) Explique o que o código faz. Qual o teste que ele realiza? 
O codigo exibe uma pergunta pedindo um numero, depois caso o numero seja par, divisivel por 2
ira exibir que passou no teste, caso o numero seja impar e de um numero quebrado
ira exibir que nao vai passou no teste

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Para numeros inteiros extritamente iguais que sejam divisiveis por 2

c) Para que tipos de números a mensagem é "Não passou no teste"?
Para numeros que nao sejam divisiveis por 2, quando o numero fica quebrado
*/ 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*
2)
a) Para que serve o código acima?
O codigo serve para mostrar o preço de uma certa fruta, caso a fruta inserida nao tem preço expecifico 
O preço sera 5 reias

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O codigo ira exibir que o preço da fruta maçã é de R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
O codigo ira exibir que o preço da fruta Pêra é de R$ 5, pois sem o break o codigo vai rodar as toda as opções abaixo do escolhido
No caso o valor da opção "Pêra" e o default, ficano R$ 5, ja que o codigo primeiro atualiza a variavel preco para 5.5 e depois para 5
*/

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*
3)
a) O que a primeira linha está fazendo?
A primeira linha esta declarando uma variavel "numero" e dizendo que ela é igual ao string do prompt transformado em number

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Caso o usuário digite o numero 10, o codigo ira exibir que esse numero passou no teste, pois o numero é maior que 0
Além de criar a variavel "mensagem" e exibir ela
Caso o usuário digitar o numero -10, o codigo nao ira exibir nada, pois só exibi o passou no teste quando o numero é mair que 0
e tambem nao ira exibir a mensagem pois ela só é criada quando o numero passa na condição

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Sim, o console.log(mensagem) nao ira funcionar pois a variavel mensagem está dentro da condição if
ou seja está fora do escopo do console.log
*/