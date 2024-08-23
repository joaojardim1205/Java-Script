const serie = {
  nome: "Stranger Things", 
  ano: 2016, 
  elenco: [
    "Millie Bobby Brown", "Finn Wolfhard", "Gaten Matarazzo", 
    "Caleb McLaughlin", "Sadie Sink"
    ], 
  episodiosHoje: [
    {canal: "Netflix", horario: "16h"}, 
    {canal: "HBO Max", horario: "18h"}, 
    {canal: "Prime Video", horario: "20h"}
    ]
}

console.log(serie.elenco[1])
console.log(serie.elenco[serie.elenco.length - 1])
console.log(serie.episodiosHoje[1])

// a) O que vai ser impresso no console?

// No primeiro console.log será impresso tudo que está dentro do array elenco, no segundo console.log será impresso o tamanho do array - 1 , no terceiro console.log será impresso o segundo item que está dentro do array episodiosHoje


const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  proprietario: {
    nome: "Carlos",
    idade: 45,
    habilitado: true
  }
};

console.log(carro.proprietario.nome);
console.log(carro.proprietario.habilitado);

//a) O que vai ser impresso no console?
//b) Como você acessaria o modelo do carro?

// a) No primeiro console.log será  impresso o nome do proprietário do carro, no segundo console.log será impresso se o proprietário está habilitado
// b) Para acessar o  modelo do carro, é possivel pelo console.log(carro.modelo) 


const calculadora = {
  somar: function(a, b) {
    return a + b;
  },
  subtrair: function(a, b) {
    return a - b;
  }
};

console.log(calculadora.somar(5, 3));
console.log(calculadora.subtrair(10, 4));

/*
a) O que vai ser impresso no console?
b) Como você chamaria a função somar para adicionar os números 7 e 2?
c) Como seria as funções de multiplicar e dividir?
d) Para o que serve a palavra return?
*/

// a) No  primeiro console.log será impresso 8, no segundo console.log será impresso 6
// b) console.log(calculadora.somar(7, 2))
// c) Para multiplicar seria: multiplicar: function(a, b) { return a *  b },  e para dividir seria: dividir: function(a, b) { return a / b }
// d) A palavra return serve para devolver o valor da função para o console.log
