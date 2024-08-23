/*
1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
*/

const pessoa = {
    nome:  'João jardim',
    apelidos: ['Jardim', 'Garden', 'JJ']
};

console.log(`Meu nome é ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);