// Faça um programa que peça para o usuario informar uma frase, entao altere todas as vogais "a" e "o" por "x"

let FraseUsuario = prompt ("insira aqui uma frase qualquer")

let NovaFrase = FraseUsuario.replaceAll ("a", "x")
NovaFrase = FraseUsuario.replaceAll ("o", "x")

console.log (NovaFrase)