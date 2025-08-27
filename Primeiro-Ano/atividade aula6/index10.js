/*
Exercício 10: Mostrar Perfil do Time
Crie uma função chamada mostrarPerfilTime que exibe todas as informações do time: nome, cor, turma, mascote, atletas e esportes escolhidos.
Desafio: Adicione uma verificação para exibir uma mensagem especial se o time tiver mais de 5 atletas.
Dica: Ajuste a mensagem de acordo com as informações do time.
*/

function mostrarPerfilTime(time) {
    console.log(`Bem-vindo, ${time.nome} da ${time.turma}!`);
    console.log(`Nome do time: ${time.nome}`);
    console.log(`Cor do time: ${time.cor}`);
    console.log(`Turma: ${time.turma}`);
    console.log(`Mascote: ${time.mascote}`);
    console.log("Os atletas do time são:");
    for (let i = 0; i < time.atletas.length; i++) {
      console.log(`${i + 1}. ${time.atletas[i]}`);
    }
    console.log("Esportes escolhidos:");
    for (let i = 0; i < time.esportes.length; i++) {
      console.log(`${i + 1}. ${time.esportes[i]}`);
    }
    if (time.atletas.length > 5) {
      console.log("Parabéns! O time tem mais de 5 atletas!");
    }
  }
  
  mostrarPerfilTime(time);