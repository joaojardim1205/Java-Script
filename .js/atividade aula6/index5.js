/*
Exercício 5: Escolhendo um Esporte
Pergunte ao usuário qual esporte (futebol, vôlei, basquete, xadrez ou FIFA) o time escolhe participar. Verifique se o esporte escolhido está na lista disponível.
Desafio: Exiba uma mensagem especial se o esporte escolhido for "futebol" ou "FIFA".
Dica: Utilize condicionais para verificar a escolha do esporte.
*/

let esportes = ["futebol", "vôlei", "basquete", "xadrez", "FIFA"];
let esporteEscolhido = prompt("Qual esporte o time escolhe participar?");

if (esportes.includes(esporteEscolhido)) {
  if (esporteEscolhido === "futebol" || esporteEscolhido === "FIFA") {
    console.log("Esporte escolhido com sucesso! Boa sorte!");
  } else {
    console.log("Esporte escolhido com sucesso!");
  }
} else {
  console.log("Esporte não disponível.");
}