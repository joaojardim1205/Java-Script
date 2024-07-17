/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

const quantidade = Number(prompt("Quantos bichinhos de estimação você tem?"))

if (quantidade === 0){
    console.log("Que pena! Você pode adotar um pet!")
    } else if (quantidade > 0) {
    let nomesBichinhos = []
    let i = 0
    while (i < quantidade){
        let nome = prompt(`Digite o nome do seu bichinho ${i + 1}`)
        nomesBichinhos.push(nome)
        i++
      }
      console.log("Nomes dos seus bichinhos:", nomesBichinhos);
    } 