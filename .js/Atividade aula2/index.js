//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 

//O codigo esta fazendo uma contagem ate 5, a cada loop, o valor aumento, "1,2,3,4,5", depois é adicionado a cada loop o valor da contagem a variavel "valor". No final sera exibido "10" 


//2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

/*
a) O que vai ser impresso no console?
b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
Se sim, o que poderia ser usado para fazer isso?
*/

//O codigo ira exibir todos os numeros que sao maiores que 18
//em JavaScript é útil para iterar sobre os valores de um array, mas ele não fornece acesso direto aos índices dos elementos, Para acessar o indice é possivel utilizar apenas o for, desse jeito:

const lista2 = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let indice = 0; indice < lista2.length; indice++) {
  if (lista2[indice] > 18) {
    console.log("Índice: " + indice + "\nNúmero: " + lista2[indice])
  }
}


//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

//Caso o usuário digitasse 4, o codigo ira corrar as linhas, adicionando um asterisco a cada linha, no caso do 4, ficaria quatro asteriscos '****'.