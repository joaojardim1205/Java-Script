/*
Exercício 13: Encerramento da Interseries
Crie uma função chamada encerrarInterseries que exibe todas as informações do time, incluindo a pontuação final. Inclua uma mensagem de agradecimento aos atletas pelo esforço.
Desafio: Adicione uma mensagem especial se o time conseguir mais de 50 pontos.
Dica: Faça com que o encerramento mostre todos os dados compilados do time.
*/

function encerrarInterseries(time) {
    mostrarPerfilTime(time);
    console.log(`Pontuação final: ${time.pontuacao}`);
    if (time.pontuacao > 50) {
      console.log("Parabéns! O time alcançou mais de 50 pontos!");
    }
    console.log("Agradecemos aos atletas pelo esforço!");
  }
  
  encerrarInterseries(time);