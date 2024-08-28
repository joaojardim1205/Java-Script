/*
4. Biblioteca Digital

- Descrição: Crie um algoritmo que contenha os dados cadastrais de um usuário, considerando `nome`, `email`, `senha`e `CPF`. Vamos simular que ele esqueceu a senha. Crie uma cópia dos dados, alterando apenas a sua senha.
- Agora refaça o exercício utilizando prompt para receber os dados do usuário e a nova senha.
*/

const  usuario = {
    nome: 'João',
    email: 'joao@gmail.com',
    senha: '123',
    CPF: '123456789'
}
console.log(usuario);

const  usuarioCopia = {...usuario};
usuarioCopia.senha = '456';

console.log(usuarioCopia);

const novoUsuario = {
    nome: prompt('Qual o seu nome?'),
    email: prompt('Qual o seu e-mail?'),
    senha: prompt('Qual a sua senha?'),
    CPF: prompt('Qual o seu CPF?')
};
console.log(novoUsuario);

const novoUsuarioCopia = {
    ...novoUsuario
}
novoUsuarioCopia.senha = prompt('Digite uma nova senha:');
console.log(novoUsuarioCopia);